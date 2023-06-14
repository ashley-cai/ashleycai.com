
console.log(document.URL)

var isScrolling = false;
var scrolling = 0;

let branches1;
let produceNodes1;
// let branches2;
// let produceNodes2;
// let branches3;
// let produceNodes3;

let branchesArray;

let timeStart = 0;
let time = 0;
let alpha = 255;

let canvas = null;
let ctx = null;

//Colorway 1
// let PALETTE = {
//   plantGradient: [ [120, 50, 170], [200, 90,100]],
//   plant: [ [150, 90, 60]],
//   leaves: [  [150, 50, 60], [180,  90,  50], [120,  40 ,  50]],
//   tomato: [ [10, 80, 100], [30, 96, 100], [70, 50, 90], [150, 50, 90]]
// }

let PALETTE = {
  plantGradient: [ [79, 59, 96], [79, 59, 96]],
  plant: [ [79, 75, 43]],
  leavesOutline: [  [68, 50, 60], [104,  90,  50], [79, 75, 30]],
  leaves: [  [76, 52, 75], [81,  55,  82], [74, 49, 84]],
  tomato: [ [10, 80, 100], [30, 96, 100], [70, 50, 90], [50, 50, 90]]
}

let w = window.innerWidth / 2;
let aspect = window.innerWidth/ window.innerHeight;
let h = w / aspect;
const MAX_BRANCH_DEPTH = 2; //can get rid of tomatoes by changing this to 3
const MIN_THICKNESS = 1;
const DAVINCI = 0.78;

const INIT_THICKNESS = 10;
const HEIGHT_PER_INDEX = 20;

const THICKNESS_STEP = 0.1;
const THICKNESS_JUMP_RATIO = 0.6;
const HEIGHT_JUMP_RATIO = 0.41;
const STEM_LENGTH_STEP = 0.5;
let PADDING = 0;
const MAIN_STEM_WAVE_PROB = 0;
const BRANCH_ANGLES = [PI / 4, PI / 4, PI/2 - PI/6];
const SUCKER_BRANCH_ANGLE = PI/3;
const PRODUCE_INIT_SIZE = {
  fruit: 5,
  leaf: 11,
  stem: 5
};

const FRUIT_PROB = 0.4;
const SUCKER_PROB = 0.5;
const BRANCH_PROB = (node) => {
  let { depth } = node;
  if (depth == 0){
    if (node.sucker) return 1.0;
    return 1;
  }
  if (depth == 1 && node.index >= 1) return 0.5;
  if (depth == 2) {
    if (node.produces == "fruit") return 1;
    else return 0.5;
  }
  return 0;
};;
const END_REACHED = (node) => {
  let { depth, index } = node;
  if (node.thickness < MIN_THICKNESS) return true;
  if (depth == 0 && !node.sucker) return node.y < 0 || index > rnd(25, 35);
  if (depth == 0) { return index > (20 / (node.sucker * 0.5))} //unused for now
  if (depth == 1) return index > 10;
  if (depth == 2) return index > 5;
};

const WOBBLE_ANGLE = (node) => {
  return map(node.depth, 0,2, PI/32, PI/64);
};

const CURVE_ANGLE = (node) => {
  let d = map(node.depth, 0, 2, 0.1, 1.0);
  let c = map(node.index, 0, 20, 0, PI/4);
  
  return c * rnd(0.8,1.2) * d;
};


const d3Thickness = INIT_THICKNESS * Math.pow(THICKNESS_JUMP_RATIO, 3);
const PRODUCE_MAX_SIZES = {
  fruit: (node) => PRODUCE_INIT_SIZE['fruit'],
  leaf: (node) => PRODUCE_INIT_SIZE['leaf'],
  stem: (node) => PRODUCE_INIT_SIZE['stem']
};
const PRODUCE_STEPS = {
  fruit: 0.1,
  leaf: 1,
};

function createPlant(xLocation) {
  let initNode = {
    x: w * xLocation,
    y: h,
    angle: -PI / 2,
    thickness: INIT_THICKNESS,
    height: HEIGHT_PER_INDEX,
    depth: 0,
    index: 0,
    numChildren: 0,
    color: PALETTE.plant[0]
  };
  initNode.angle -= PI/30;
  
  let rightPlant = {...initNode};
  rightPlant.x += w/6;
  rightPlant.angle += PI/12;
  
  let leftPlant = {...initNode};
  leftPlant.x -= w/4;
  leftPlant.angle += PI/16;
  
  let branches = [];
  branches.push([initNode]);
  
  let produceNodes = [];

  // console.log(branches)
  return [branches, produceNodes];
}

function setup() {
  setupCanvases(w, h);
  if (DEBUG) frameRate(5);
  colorMode(HSB);
  frameRate(5);
  gradientBackground(PALETTE.plantGradient[1], PALETTE.plantGradient[0]);
  // smooth();

  setupPlants();

  canvas = document.getElementById("defaultCanvas0");
  ctx = canvas.getContext("2d");
  ctx.globalAlpha = 1;

  timeStart = millis();
}

function draw() {
  clear();

  //Actual drawing
  
  time = millis();
  if (!isScrolling) {
    if (time - timeStart > 8000) {
      ctx.globalAlpha = 1;
      drawPlant(branches1, produceNodes1);
    }
  } else {
    if (ctx.globalAlpha > 0) {
      drawPlant(branches1, produceNodes1);
      ctx.globalAlpha = ctx.globalAlpha - .2
      if (ctx.globalAlpha <= .01) {
        console.log(isScrolling)
        // Run the callback
        setupPlants();
        isScrolling = false;
        timeStart = millis();
        // console.log(time)
      }
  }
}

  drawCanvases();
}

function drawPlant(branchesArray, produceNodesArray) {
  //Draw each node
  
  branchesArray.forEach((branch) =>
    branch.forEach((node) => {
      let branchPoly = branchToPoly(branch);
      let strokeMe =  { lrStroke: branchPoly.lrStroke, strokeFill: node.color }
      mPoly(branchPoly.bounds, strokeMe, branchPoly.size);
    })
  );
  produceNodesArray.forEach((produceNode) => {
    let stemPoly = stemToPoly(produceNode.stem);
    let producePoint = stemPoly.stemEnd;
    mPoly(stemPoly.bounds, { strokeFill: produceNode.stem.color, lrStroke: stemPoly.lrStroke}, stemPoly.size);
    if (produceNode.type == "fruit") {  
      let fruitCenter = movev(producePoint, produceNode.stem.angle, produceNode.size/2);
      mEllipse(fruitCenter.x, fruitCenter.y, produceNode.size, produceNode.size, {
        foregroundFill: produceNode.color,
        strokeFill: [produceNode.color[0], produceNode.color[1] * 2, produceNode.color[2]/ 2]
      });
      mEllipse(producePoint.x, producePoint.y, 2, 2, {
        foregroundFill: produceNode.stem.color,
        strokeFill: [produceNode.stem.color[0], produceNode.stem.color[1] / 2, produceNode.stem.color[2] /2]
      });
    } else {
      mPoly(leafToPoly(producePoint, produceNode), {
        strokeFill: produceNode.outline,
        foregroundFill: [produceNode.color[0], produceNode.color[1] ,  produceNode.color[2], 70],
      });
    }
  });

  //Do the next one
  plant(branchesArray, produceNodesArray);
}

function plant(branchesArray, produceNodesArray) {
  let newBranches = [];
  let numCurrentBranches = branchesArray.length;
  for (let i = 0; i < numCurrentBranches; i++) {
    let branch = branchesArray[i];
    let latestNode = branch[branch.length - 1];
    if (latestNode.culled) continue;
    if (!END_REACHED(latestNode) && inBounds(latestNode) ) {
      
      const shouldBranch =  (latestNode.depth == 0 && branch[0].timeSinceBranch >= 4) || Math.random() < BRANCH_PROB(latestNode)
      if (shouldBranch) {
        branch[0].numChildren = branch[0].numChildren + 1;
        branch[0].timeSinceBranch = 0;
        if (!latestNode.produces) {
          newBranches.push(branchNode(latestNode, branch[0].numChildren));
        } else {
          produceNodesArray.push(newProduce(latestNode, branch[0].numChildren));
        }
      } else {
        branch[0].timeSinceBranch = branch[0].timeSinceBranch + 1;
      }
      branch.push(growNode(latestNode));
    } else {
      latestNode.produces = "leaf";
      produceNodesArray.push(newProduce(latestNode, "final"));
      latestNode.culled = true;
    }
  }
  branchesArray.push(...newBranches);
  for (let i = 0; i < produceNodesArray.length; i++) {
    growProduce(produceNodesArray[i]);
  }
}

function growNode(node) {
  //Core node has no type
  let nextNode = { ...node };
  let nextP = movev(cv(node.x, node.y), node.angle, node.height);
  nextNode.x = nextP.x;
  nextNode.y = nextP.y;
  nextNode.index += 1;
  nextNode.color = node.color;

  if (nextNode.depth == 0) {
    if (rn() < MAIN_STEM_WAVE_PROB) {
      nextNode.angle += prn.rn(-PI / 4, PI / 4);
    }
  } else {
    if (node.angle < 0 && node.angle > -PI) {
      nextNode.angle += (nextNode.angle > -PI / 2 ? 1 : -1) * CURVE_ANGLE(node);
    } else {
      nextNode.angle += (nextNode.angle > -PI / 2 ? 1 : -1) * CURVE_ANGLE(node); //TODO: Gravity
    }
  }
  nextNode.thickness = nextNode.thickness - THICKNESS_STEP;

  const wobbleAngle = WOBBLE_ANGLE(node);
  nextNode.angle += rnd(-wobbleAngle, wobbleAngle);
  return nextNode;
}

function iterateNode(node) {
  return  {
    index: 0,
    depth:  node.depth + 1,
    x: node.x,
    y: node.y,
    height: node.height * HEIGHT_JUMP_RATIO, //ODO: DAMPEN VIBES
    thickness: node.thickness * THICKNESS_JUMP_RATIO,
    numChildren: 0,
    color: rndArr(PALETTE.plant)
  };
}
function branchNode(node, branchNum) {
  let nextNode = iterateNode(node);
  if (node.sucker >= 2 && rnd() <=  FRUIT_PROB) {
    nextNode = iterateNode(nextNode)
  }

  let suckerProb = SUCKER_PROB / Math.pow((node.sucker || 1), 3);
  let shouldBecomeSucker = node.depth == 0 && ((node.index > 3 && Math.random() < suckerProb) || node.index == 2) ;
  if (shouldBecomeSucker) {
    let suckerAngle = rnd(0.5, 1) * SUCKER_BRANCH_ANGLE;
    nextNode.depth = 0;
    let suckerDirection = fliprn(); 
    nextNode.angle = node.angle + suckerDirection * suckerAngle;
    node.angle = node.angle - suckerDirection * suckerAngle /2 ;
    nextNode.height = node.height;

    // nextNode.height = HEIGHT_PER_INDEX * 0.8;
    // node.height = HEIGHT_PER_INDEX * 0.8;
    nextNode.sucker = (node.sucker || 1) + 1;
    nextNode.thickness = node.thickness * DAVINCI;
    node.thickness = node.thickness * DAVINCI;
    nextNode.index = node.index +1;
    nextNode.color = "black"
  } else {
    let flip =  branchNum % 2 == 0;
    let myBranchAngle = BRANCH_ANGLES[node.depth] || BRANCH_ANGLES[0];
    nextNode.angle = flip ? node.angle + myBranchAngle : node.angle - myBranchAngle;
  }
  if (nextNode.depth == MAX_BRANCH_DEPTH) {
    let isFruit = rnd() <= FRUIT_PROB; 
    nextNode.produces = isFruit ? "fruit" : "leaf";
    if (isFruit) {
      nextNode.tomatoColor = PALETTE.tomato[floor(rnd(0,PALETTE.tomato.length))];
    }
    // if (isFruit) nextNode.color = "red"
  }
  // nextNode.angle = PI/4;
  return [nextNode];
}

function newProduce(branchNode, produceNumber) {
  let stem;
  if (produceNumber == "final") {
    stem = {
      angle: branchNode.angle,
      x: branchNode.x,
      y: branchNode.y,
      height: PRODUCE_INIT_SIZE['stem'] / 2,
      thickness: branchNode.thickness,
      color: branchNode.color
    };
  } else {
    const branchAngle = rn(0.95, 1.05) * BRANCH_ANGLES[2];
    let angle = produceNumber % 2 == 0 ? branchNode.angle +branchAngle : branchNode.angle - branchAngle;
    let stemStart = movev(cv(branchNode.x, branchNode.y), angle, branchNode.thickness / 2);
    stem = {
      x: stemStart.x,
      y: stemStart.y,
      angle: angle,
      thickness: branchNode.thickness / 2,
      height: PRODUCE_INIT_SIZE['stem'],
      color: branchNode.color
    };
  }

  let produceColor = "white";
  let leafOutlineColor = "black"
  let size =  PRODUCE_INIT_SIZE[branchNode.produces];
  if (branchNode.produces == "leaf" )  {
    produceColor =  rndArr(PALETTE.leaves);
    leafOutlineColor =  rndArr(PALETTE.leavesOutline);
    size = size * map(branchNode.thickness, INIT_THICKNESS * THICKNESS_JUMP_RATIO, MIN_THICKNESS, 1, 0.8);
  } else {
    produceColor = branchNode.tomatoColor || PALETTE.tomato[0];
    leafOutlineColor =  branchNode.tomatoColor || PALETTE.tomato[0];
    size = size * map(branchNode.thickness, INIT_THICKNESS * THICKNESS_JUMP_RATIO, MIN_THICKNESS, 1.1, 0.9);
  }
  
  let produceNode = {
    size: size,
    type: branchNode.produces,
    outline: leafOutlineColor,
    color: produceColor,
    stem: stem,
  };
  return produceNode;
}

function growProduce(produceNode) {
  let maxSize = PRODUCE_MAX_SIZES[produceNode.type](produceNode);
  let sizeStep = PRODUCE_STEPS[produceNode.type];
  if (produceNode.size < maxSize) {
    produceNode.size += sizeStep;
  }

  if (produceNode.type == "fruit") produceNode.stem.height = produceNode.size;
  if (produceNode.stem.height <= PRODUCE_MAX_SIZES['stem'](produceNode)) {
    produceNode.stem.height += STEM_LENGTH_STEP;
  }
    
}

//DRAWING FUNCTIONS

function branchToPoly(branch) {
  let l = [];
  let r = [];
  let rl = 0;
  for (let i = 0; i < branch.length; i++) {
    let n = branch[i];
    let lp = movev(cv(n.x, n.y), n.angle + PI / 2, 0.5 * n.thickness);
    l.push(lp);

    let rp = movev(cv(n.x, n.y), n.angle - PI / 2, 0.5 * n.thickness);
    r.unshift(rp);
    rl += 2 * n.y;
    if (i == 0 || i == branch.length - 1) rl += n.thickness;
  }
  return { bounds: [...l, ...r], lrStroke: { l: l, r: r }, size: rl };
}
function stemToPoly(stem) {
  let l = [];
  let r = [];
  let rl = 0;
  let stemStart = cv(stem.x, stem.y);
  let stemEnd = movev(stemStart, stem.angle, stem.height);
  let stemBranch = [stemStart, stemEnd];
  //TODO: MAKE THIS A SPECIAL KINDA "LEAF" that becomes narrow at the end
  for (let i = 0; i < stemBranch.length; i++) {
    let p = stemBranch[i];
    let lp = movev(cv(p.x, p.y), stem.angle + PI / 2, 0.5 * stem.thickness);
    l.push(lp);
    let rp = movev(cv(p.x, p.y), stem.angle - PI / 2, 0.5 * stem.thickness);
    r.unshift(rp);
    rl += 2 * p.y;
    if (i == 0 || i == stem.length - 1) rl += stem.thickness;
  }
  //noLoop();
  return { bounds: [...l, ...r], lrStroke: { l: l, r: r }, size: rl, stemEnd: stemEnd };
}
function leafToPoly(leafStart, produceNode) {
  let bounds = [];

  bounds.push(leafStart);

  let numSteps = 4;
  let maxWidth = produceNode.size ;
  let step = produceNode.size / numSteps;

  let lpoints =[]; 
  let rpoints = [];
  
  let currentPoint = leafStart;
  for (let i= 0; i< numSteps ; i++) {
    let x= i/numSteps;
    
    //let width = maxWidth * (1-x);

    //https://www.desmos.com/calculator/dobb44f84y
    let width = maxWidth * sin(PI*x/2) * (1-x);

    lpoints.push(movev(currentPoint, produceNode.stem.angle - PI/2, width));
    rpoints.unshift(movev(currentPoint, produceNode.stem.angle + PI/2, width));

    currentPoint = movev(currentPoint,  produceNode.stem.angle, step);
  }
  
  bounds.push(...lpoints);
  let leafEnd = movev(currentPoint, produceNode.stem.angle, step);
  bounds.push(leafEnd);
  bounds.push(...rpoints);

  return bounds;
}
function inBounds(node) {
  return node.x <= w && node.x > PADDING && node.y <= h && node.y > PADDING;
}

function setupPlants() {
  [branches1, produceNodes1] = createPlant(.2 + (Math.random()*.6));
  // [branches2, produceNodes2] = createPlant(4/5);
  // [branches3, produceNodes3] = createPlant(1/4);
}

window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout(scrolling);
  isScrolling = true;


      // // Set a timeout to run after scrolling ends
      // scrolling = setTimeout(function() {
  
      //   isScrolling = false;
      //   console.log(isScrolling)
      //   // Run the callback
    
      //   setupPlants();
    
      //   timeStart = millis();
      //   // console.log(time)
      //   ctx.globalAlpha = 1;
      // }, 500);
}, false);