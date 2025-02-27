<script lang="ts">
      import { onMount } from 'svelte';
      import index from './index.svelte';

      let resetPlants: () => void;

    onMount(() => {
    const canvas = document.getElementById('mossCanvas');
    console.log(canvas)
    const ctx = canvas.getContext('2d');
    const mossSize = 5; // Size of the "pixel"
    const growthRate = 0.001; // Growth rate (probability of growing each frame)

    // Resize canvas to fill the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Directions for branching out
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1], // Left, Right, Up, Down
      [-1, -1], [1, -1], [-1, 1], [1, 1] // Diagonal directions
    ];

    // Grid to track moss growth
    let mossGrid = [];

    // Different shades of green for moss
    const greenShades = [
      "#7AA039", "#A1B340", "#B2DC50"
    ];

    // Initialize the moss grid
    function initMossGrid() {
      const cols = Math.floor(canvas.width / mossSize);
      const rows = Math.floor(canvas.height / mossSize);
      for (let i = 0; i < rows; i++) {
        mossGrid[i] = [];
        for (let j = 0; j < cols; j++) {
          mossGrid[i][j] = false; // No moss initially
        }
      }
    }

    // Draw moss on the grid at (x, y) with a random green shade
    function drawMoss(x, y) {
      const randomGreen = greenShades[Math.floor(Math.random() * greenShades.length)];
      ctx.fillStyle = randomGreen;
      ctx.fillRect(x * mossSize, y * mossSize, mossSize, mossSize);
        if (y < mossGrid.length && x < mossGrid[0].length){
        mossGrid[y][x] = true;
        }
    }

    // Growth queue (this holds the points where the moss is currently present)
    let growthQueue = [];

    // Simulate moss growth and branching from the hovered/clicked position
    function growMoss() {
      const newGrowthQueue = [];

      // For each point in the queue, attempt to branch out
      growthQueue.forEach(point => {
        directions.forEach(([dx, dy]) => {
          const newX = point.x + dx;
          const newY = point.y + dy;

          // Check bounds and if the point is already mossy
          if (newY < mossGrid.length && newX < mossGrid[0].length){
            if (newX >= 0 && newX < canvas.width / mossSize && newY >= 0 && newY < canvas.height / mossSize && !mossGrid[newY][newX]) {
                if (Math.random() < growthRate) {
                drawMoss(newX, newY);
                newGrowthQueue.push({ x: newX, y: newY });
                }
            }
        }
        });
      });

      // Add newly grown points to the growth queue for the next frame
      growthQueue.push(...newGrowthQueue);
    }

    // Mouse hover or click event listener to trigger moss growth
    canvas.addEventListener('mousemove', function(e) {
      const x = Math.floor(e.clientX / mossSize);
      const y = Math.floor(e.clientY / mossSize);
      if (!mossGrid[y][x]) { // Only start growth if that pixel doesn't have moss
        drawMoss(x, y);
        growthQueue.push({ x, y }); // Add this point to the growth queue
      }
    });

    canvas.addEventListener('click', function(e) {
      const x = Math.floor(e.clientX / mossSize);
      const y = Math.floor(e.clientY / mossSize);
      if (!mossGrid[y][x]) { // Only start growth if that pixel doesn't have moss
        drawMoss(x, y);
        growthQueue.push({ x, y }); // Add this point to the growth queue
      }
    });

    // Add random growth to keep the moss expanding
    function addRandomGrowth() {
      const randomX = Math.floor(Math.random() * (canvas.width / mossSize));
      const randomY = Math.floor(Math.random() * (canvas.height / mossSize));
        if (randomY < mossGrid.length && randomX < mossGrid[0].length){
            if (!mossGrid[randomY][randomX]) {
                drawMoss(randomX, randomY);
                growthQueue.push({ x: randomX, y: randomY });
            }
        }
    }

    // Animation loop
    function animate() {
      growMoss();
      if (Math.floor(Math.random() * 200) == 42){
        addRandomGrowth(); // Keep adding random growth
        }
      requestAnimationFrame(animate); // Continue growing moss each frame
    }

    resetPlants = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        growthQueue = [];
        initMossGrid();
    }

    // Initialize the grid and start the animation
    initMossGrid();
    animate(); // Start the animation loop
});



</script>

<div class="mossContainer">
    <canvas id="mossCanvas"></canvas>
</div>

<div class="info-container">
    <div class="info">
        Ashley Cai studies computer science,<hr class="hr-mobile"> graphic design, and policy at Brown|RISD.<hr class="hr-mobile">
        <hr class="hr-desktop">
        She loves data viz, language, the color green,<hr class="hr-mobile"> and updating her website(slowly). 
        <hr class="hr-desktop"> <hr class="hr-mobile">
        Reach out via email any time!
        <hr class="hr-desktop"><hr class="hr-mobile">
        <br>
        <hr class="hr-desktop"><hr class="hr-mobile">
        <a class="links" target="_blank" href="https://docs.google.com/document/d/1pW_UON6NHvl6m8OzInDWrDWGuJSLm0G6A6uxG9lSbbQ/edit?tab=t.0">cv</a> 
        <a class="links" target="_blank" href="mailto:ashley.lcai@gmail.com">email</a> 
        <a class="links" target="_blank" href="https://www.figma.com/design/az7mx903frtov9ZkSJBpZx/Inspiration-COLLECTIONS?node-id=0-1&t=YQ3daqOwNCIBXpOn-1">collections</a>
        <a class="links" on:click={resetPlants} href="">mow lawn</a>
        <hr class="hr-desktop"><hr class="hr-mobile">
    </div>
    <div class="work-experience">
        Previously @
        <br> 
        Wall Street Journal
        <br> 
        The Pudding
        <br> 
        ServiceNow
        <br> 
        The Los Angeles Times
    </div>
</div>

<style>
    .hr-desktop {
        height: 1px;
        color: #848484;
        background: #848484;
        width: 92vw;
        font-size: 0;
        border: 0;
    }

    .hr-mobile {
        height: 0;
        font-size: 0;
        border: 0;
        display: none;
    }

    .links{
        margin-right: 1em;
        color: black;
        pointer-events:all;
    }
    
    .info-container {
        top: 0;
        left: 0;
        position: absolute;
        display: flex;
        flex-direction: row;
        width: 100vw;
        pointer-events: none;
        justify-content: space-between;
        margin-top: 4vh;
    }

    .info {
        width: 64vw;
        font-family: 'GTAmerica';
        margin: 4vw;
        margin-top: 0;
        margin-right: 0;
        min-width: 580px;
    }

    @media (max-width: 830px) {
        .hr-desktop {
            height: 0px;
        }
        .info-container {
            flex-direction: column;
            margin-left: 4vw;
            font-size: 1em;
            width: 92vw;
        }
        .info {
            min-width: auto;
            margin:0;
            width: auto;
        }
        .work-experience {
            display: none;
        }

        .hr-mobile {
            height: 1px;
            color: #848484;
            background: #848484;
            width: 92vw;
            font-size: 0;
            border: 0;
            display: block;
        }
    }

    @media (max-width: 600px) {
        .info-container {
            font-size: .92em;
            width: 84vw;
            margin-left: 8vw;
        }
        .hr-mobile {
            width: 80vw;
        }
        .hr-mobile {
            width: 84vw;
        }
    }

    

    .info:after {
        mix-blend-mode: difference;
        /* not working */
    }

    .work-experience {
        margin: 4vw;
        margin-left: 0;
        margin-top: 0;
        width: 20vw;
        text-align: right;
        font-family: 'GTAmerica';
        line-height: 1.23em;
        min-width: 165px;
    }

    :global(body) {
        margin: 0;
        padding: 0;
    }
    
    :global(html) {
      background-color: #B2B2B2;
    }
  </style>