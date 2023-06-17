<script>
    import index from './index.svelte';
    import StickyNav from './StickyNav.svelte';
    import Intro from './Intro.svelte';
    import CaseStudyCard from './CaseStudyCard.svelte';
	import {onMount} from 'svelte'
	import EditorialCard from './EditorialCard.svelte';
    import PlayContainer from './PlayContainer.svelte';
    import Plants from './Plants.svelte';
    import { base } from '$app/paths';

    
    onMount(() => {
        // change highlighting for sticky nav section

        ScrollTrigger.create({
            trigger: '#product-container',
            toggleClass: {targets: "#product-nav", className: 'current-section'},
            start: 'top center',
            end: 'bottom bottom',
            onLeaveBack: 'reverse',
        })

        ScrollTrigger.create({
            trigger: '#editorial-container',
            toggleClass: {targets: "#editorial-nav", className: 'current-section'},
            start: 'top center',
            // end: 'bottom bottom',
            onLeaveBack: 'reverse',
        })

        ScrollTrigger.create({
            trigger: '#play-container',
            toggleClass: {targets: "#play-nav", className: 'current-section'},
            start: 'top center',
            // end: 'bottom bottom',
            onLeaveBack: 'reverse',
        })

        //scroll to with sticky nav
        const productNav = document.querySelector('#product-nav');
        const editorialNav = document.querySelector('#editorial-nav');
        const playNav = document.querySelector('#play-nav');

        productNav.addEventListener('click', () => {
        gsap.to(window, {
            duration: .4,
            scrollTo: {y: "#product-container", offsetY: 100}
        });
        });

        editorialNav.addEventListener('click', () => {
        gsap.to(window, {
            duration: .4,
            scrollTo: {y: "#editorial-container", offsetY: 100}
        });
        });

        playNav.addEventListener('click', () => {
        gsap.to(window, {
            duration: .4,
            scrollTo: {y: "#play-container", offsetY: 100}
        });
        });
    })

</script>

<Plants/>
<StickyNav/>
<div id="body">
<Intro/>

    <div id="product-container">
        <CaseStudyCard imgSrc="{ base }/imgs/cdk/TestDrive-cover.png" imgAlt="" title="CDK GLOBAL INTERNSHIP" type="PRODUCT DESIGN" year="2022" link="{base}/projects/cdk"/>
        <CaseStudyCard imgSrc="{ base }/imgs/hack@brown/hack@browncover.png" imgAlt="" title="HACK@BROWN" type="VISUAL AND WEB DESIGN" year="2022" />
        <CaseStudyCard imgSrc="{ base }/imgs/flowerpower/uimockup-cover.jpeg" imgAlt="" title="FLOWER POWER" type="PRODUCT DESIGN" year="2020" />
    </div>

    <div id="editorial-container">
        <EditorialCard src="{ base }/imgs/editorial/repowerthewest-small.mp4" alt="" title="REPOWERING THE WEST" type="MAPPING, DESIGN, CODE, ANIMATION" year="2022" publication="LOS ANGELES TIMES" description="Clean energy projects are badly needed to fight climate change — but they can fuel intense opposition in the communities where they’re built. We’re spotlighting examples of that tension across the West, with an eye toward finding solutions." link = "https://www.latimes.com/projects/repowering-the-west/"/>
        <EditorialCard src="{ base }/imgs/editorial/ailapoem-small.mp4" alt="" title="HOW A.I. SEES L.A." type="ART DIRECTION, DESIGN, DEVELOPMENT" year="2022" publication="LOS ANGELES TIMES" description="In this visual poem, we stitched together evocative texts about Los Angeles as a way of articulating our city’s bizarre beauty and uncanny oddities. Then we asked A.I. to imagine them. It’s as weird as you might imagine." link = "https://www.latimes.com/projects/los-angeles-poetry-midjourney-artifical-intelligence-literature/"/>
        <EditorialCard src="{ base }/imgs/editorial/brownproperty-small.mp4" alt="" title="THE EVOLUTION OF THAYER STREET" type="MAPPING, ART DIRECTION, DESIGN, DEVELOPMENT" year="2023" publication="BROWN DAILY HERALD" description="The Herald mapped business turnover on Thayer Street since 2000 through interactive timelines tracing year-by-year history of the street." link="https://projects.browndailyherald.com/2023/03/05/thayer-street-history/"/>
        <EditorialCard src="{ base }/imgs/editorial/thayerst-small.mp4" alt="" title="HOW BROWN'S CAMPUS AND PROPERTY HOLDINGS HAVE CHANGED, FROM 1770 TO TODAY" type="RESEARCH, ART DIRECTION, DESIGN, DEVELOPMENT" year="2022" publication="BROWN DAILY HERALD" description="Explore how Brown expanded from two lots between Waterman and George streets to a campus that spans the city of Providence." link="https://projects.browndailyherald.com/2022/12/13/brown-property-footprint/"/>
        <EditorialCard src="{ base }/imgs/editorial/aichangeart-small.mp4" alt="" title="HOW AI-GENERATED ART IS CHANGING THE CONCEPT OF ART ITSELF" type="RESEARCH, ART DIRECTION, DESIGN, DEVELOPMENT" year="2022" publication="LOS ANGELES TIMES" description="Artificial-intelligence generated artwork has made vast strides in recent years, but many artists don’t even consider it art. To some, it opens up vast new avenues of creative exploration, and to others, it threatens their livelihoods." link = "https://www.latimes.com/projects/artificial-intelligence-generated-art-ownership-bias-dall-e-midjourney/"/>
    </div>
<!-- 
    <div id="play-container">
        <PlayContainer imgSrc="imgs/editorial/repoweringthewest"/>
    </div> -->

</div>

<style>
    #body {
        width: 90vw;
        margin: auto;
        margin-top: 20vh;
        font-size: 1em;
    }

    #product-container {
        padding-bottom: 30vh;
    }

    :global(canvas) {
        pointer-events: none;
    }
</style>