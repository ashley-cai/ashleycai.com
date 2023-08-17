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
            trigger: '#product-container',
            toggleClass: {targets: "#product-nav-mobile", className: 'current-section-mobile'},
            start: 'top center',
            end: 'bottom bottom',
            onLeaveBack: 'reverse',
        })

        ScrollTrigger.create({
            trigger: '#editorial-container',
            toggleClass: {targets: "#editorial-nav", className: 'current-section'},
            start: 'top center',
            end: 'bottom bottom',
            onLeaveBack: 'reverse',
        })

        ScrollTrigger.create({
            trigger: '#editorial-container',
            toggleClass: {targets: "#editorial-nav-mobile", className: 'current-section-mobile'},
            start: 'top center',
            end: 'bottom bottom',
            onLeaveBack: 'reverse',
        })

        ScrollTrigger.create({
            trigger: '#play-container',
            toggleClass: {targets: "#play-nav", className: 'current-section'},
            start: 'top center',
            end: 'bottom bottom',
            onLeaveBack: 'reverse',
        })

        ScrollTrigger.create({
            trigger: '#play-container',
            toggleClass: {targets: "#play-nav-mobile", className: 'current-section-mobile'},
            start: 'top center',
            end: 'bottom bottom',
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js" integrity="sha512-3RlxD1bW34eFKPwj9gUXEWtdSMC59QqIqHnD8O/NoTwSJhgxRizdcFVQhUMFyTp5RwLTDL0Lbcqtl8b7bFAzog==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<Intro/>

    <div id="product-container">
        <CaseStudyCard imgSrc="{ base }/imgs/cdk/TestDrive-cover.png" imgAlt="" title="CDK GLOBAL" type="PRODUCT DESIGN" year="2022" link="{base}/projects/cdk"/>
        <CaseStudyCard imgSrc="{ base }/imgs/hackatbrown/hack@browncover.png" imgAlt="" title="HACK@BROWN" type="VISUAL DESIGN" year="2022" link="{base}/projects/hackatbrown"/>
        <CaseStudyCard imgSrc="{ base }/imgs/flowerpower/uimockup-cover.jpeg" imgAlt="" title="FLOWER POWER" type="PRODUCT DESIGN" year="2020" link="{base}/projects/flowerpower"/>

    </div>

    <div id="editorial-container">
        <EditorialCard src="{ base }/imgs/editorial/repowerthewest-small.mp4" alt="" title="REPOWERING THE WEST" type="MAPPING, DESIGN, CODE, ANIMATION" year="2022" publication="LOS ANGELES TIMES" description="Clean energy projects are badly needed to fight climate change — but they can fuel intense opposition in the communities where they’re built. We’re spotlighting examples of that tension across the West, with an eye toward finding solutions." link = "https://www.latimes.com/projects/repowering-the-west/"/>
        <EditorialCard src="{ base }/imgs/editorial/ailapoem-small.mp4" alt="" title="HOW A.I. SEES L.A." type="ART DIRECTION, DESIGN, DEVELOPMENT" year="2022" publication="LOS ANGELES TIMES" description="In this visual poem, we stitched together evocative texts about Los Angeles as a way of articulating our city’s bizarre beauty and uncanny oddities. Then we asked A.I. to imagine them. It’s as weird as you might imagine." link = "https://www.latimes.com/projects/los-angeles-poetry-midjourney-artifical-intelligence-literature/"/>
        <EditorialCard src="{ base }/imgs/editorial/songwriters-small.mp4" alt="" title="WOMEN ARE SUPERSTARS ON STAGE, BUT STILL RARELY GET TO WRITE SONGS" type="ART DIRECTION, DESIGN, DEVELOPMENT" publication="THE PUDDING" year="2023" description="Most hit songs are written by all men. How often has a top 5 hit been written by *only* women in the last 10 years? It’s likely rarer than you think." link ="https://pudding.cool/2023/07/songwriters/"/>
        <EditorialCard src="{ base }/imgs/editorial/thayerst-small.mp4" alt="" title="THE EVOLUTION OF THAYER STREET" type="MAPPING, ART DIRECTION, DESIGN, DEVELOPMENT" year="2023" publication="BROWN DAILY HERALD" description="The Herald mapped business turnover on Thayer Street since 2000 through interactive timelines tracing year-by-year history of the street." link="https://projects.browndailyherald.com/2023/03/05/thayer-street-history/"/>
        <EditorialCard src="{ base }/imgs/editorial/brownproperty-small.mp4" alt="" title="HOW BROWN'S CAMPUS AND PROPERTY HOLDINGS HAVE CHANGED, FROM 1770 TO TODAY" type="RESEARCH, ART DIRECTION, DESIGN, DEVELOPMENT" year="2022" publication="BROWN DAILY HERALD" description="Explore how Brown expanded from two lots between Waterman and George streets to a campus that spans the city of Providence." link="https://projects.browndailyherald.com/2022/12/13/brown-property-footprint/"/>
        <EditorialCard src="{ base }/imgs/editorial/aichangeart-small.mp4" alt="" title="HOW AI-GENERATED ART IS CHANGING THE CONCEPT OF ART ITSELF" type="RESEARCH, ART DIRECTION, DESIGN, DEVELOPMENT" year="2022" publication="LOS ANGELES TIMES" description="Artificial-intelligence generated artwork has made vast strides in recent years, but many artists don’t even consider it art. To some, it opens up vast new avenues of creative exploration, and to others, it threatens their livelihoods." link = "https://www.latimes.com/projects/artificial-intelligence-generated-art-ownership-bias-dall-e-midjourney/"/>
        <EditorialCard src="{ base }/imgs/editorial/percent.mp4" alt="" title="CLAIM OUR PERCENT" type="RESEARCH, DESIGN, DEVELOPMENT" year="2022" publication="PERSONAL PROJECT" description="I developed an interactive data visualization on labor history and guide to unionizing in the modern workplace." link="https://ashley-cai.github.io/claim-our-percent"/>
        <EditorialCard src="{ base }/imgs/editorial/illiteracy.mp4" alt="" title="DIASPORATIC TEXTS IN ILLITERACY" type="RESEARCH, DESIGN, DEVELOPMENT" year="2023" publication="PERSONAL PROJECT" description="I built an interactive experience about the guilt, struggle, and shame of being somewhat illiterate in Chinese." link = "https://ashley-cai.github.io/illiteracy-souvenirs"/>
    </div>

    <div id="play-container">
        <PlayContainer/>
    </div>

    <div class="footer">Site developed with love and Svelte. <br> Heavily inspired by <a href = "https://taliacotton.com/">Talia Cotton</a> and <a href="https://softnet.works/">Bhavik Singh</a>. </div>

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

    .footer {
        margin-top: 20vh;
        text-align: center;
    }

    :global(a:hover) {
        color: var(--black) !important;
        text-shadow: 0 0 5px var(--light-green);
    }
    
    a {
        text-decoration: none !important;
        color: var(--black);
    }

    #play-container{
        min-height: 300vh;
    }
</style>