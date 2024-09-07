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

    <div id="editorial-container">
        <EditorialCard src="{ base }/imgs/editorial/powerdemandviz-small.mp4" alt="" title="HOW BOOMING ELECTRICITY DEMAND IS STALLING EFFORTS TO RETIRE COAL AND GAS" type="REPORTING, DESIGN, CODE" year="2024" publication="THE WALL STREET JOURNAL" description="Companies are redoing the math behind the green-energy transition amid the rise of AI data centers." link = "https://www.wsj.com/business/energy-oil/electricity-demand-coal-gas-retirement-charts-dd07029a"/>
        <EditorialCard src="{ base }/imgs/editorial/ailapoem-small.mp4" alt="" title="HOW A.I. SEES L.A." type="ART DIRECTION, DESIGN, DEVELOPMENT" year="2022" publication="LOS ANGELES TIMES" description="In this visual poem, we stitched together evocative texts about Los Angeles as a way of articulating our city’s bizarre beauty and uncanny oddities. Then we asked A.I. to imagine them. It’s as weird as you might imagine." link = "https://www.latimes.com/projects/los-angeles-poetry-midjourney-artifical-intelligence-literature/"/>
        <EditorialCard src="{ base }/imgs/editorial/songwriters-small.mp4" alt="" title="WOMEN ARE SUPERSTARS ON STAGE, BUT STILL RARELY GET TO WRITE SONGS" type="ART DIRECTION, DESIGN, DEVELOPMENT" publication="THE PUDDING" year="2023" description="Most hit songs are written by all men. How often has a top 5 hit been written by *only* women in the last 10 years? It’s likely rarer than you think." link ="https://pudding.cool/2023/07/songwriters/"/>
        <EditorialCard src="{ base }/imgs/editorial/breaking-small.mp4" alt="" title="BREAKING IS IN THE OLYMPICS—AND IT COMES WITH ITS OWN SECRET LANGUAGE" type="REPORTING, DESIGN, ANIMATION" year="2024" publication="THE WALL STREET JOURNAL" description="How breakers use hand signals and gestures to intimidate opponents and influence judges." link = "https://www.wsj.com/sports/olympics/breakdancing-intimidating-opponents-paris-2024-5c614c82"/>
        <EditorialCard src="{ base }/imgs/editorial/pathtoprofessorship-small.mp4" alt="" title="THE AVENUE TO ACADEMIA AT BROWN UNIVERSITY" type="REPORTING, DESIGN, DEVELOPMENT" year="2024" publication="BROWN DAILY HERALD" description="The Herald analyzed data about 1095 faculty in undergraduate-focused departments and spoke to faculty to make note of some of the most common and uncommon paths taken to a faculty appointment." link = "https://projects.browndailyherald.com/2024/03/05/avenue-to-academia-brown-university/"/>
        <EditorialCard src="{ base }/imgs/editorial/thayerst-small.mp4" alt="" title="THE EVOLUTION OF THAYER STREET" type="MAPPING, ART DIRECTION, DESIGN, DEVELOPMENT" year="2023" publication="BROWN DAILY HERALD" description="The Herald mapped business turnover on Thayer Street since 2000 through interactive timelines tracing year-by-year history of the street." link="https://projects.browndailyherald.com/2023/03/05/thayer-street-history/"/>
        <EditorialCard src="{ base }/imgs/editorial/repowerthewest-small.mp4" alt="" title="REPOWERING THE WEST" type="MAPPING, DESIGN, CODE, ANIMATION" year="2022" publication="LOS ANGELES TIMES" description="Clean energy projects are badly needed to fight climate change — but they can fuel intense opposition in the communities where they’re built. We’re spotlighting examples of that tension across the West, with an eye toward finding solutions." link = "https://www.latimes.com/projects/repowering-the-west/"/>
        <EditorialCard src="{ base }/imgs/editorial/aichangeart-small.mp4" alt="" title="HOW AI-GENERATED ART IS CHANGING THE CONCEPT OF ART ITSELF" type="RESEARCH, ART DIRECTION, DESIGN, DEVELOPMENT" year="2022" publication="LOS ANGELES TIMES" description="Artificial-intelligence generated artwork has made vast strides in recent years, but many artists don’t even consider it art. To some, it opens up vast new avenues of creative exploration, and to others, it threatens their livelihoods." link = "https://www.latimes.com/projects/artificial-intelligence-generated-art-ownership-bias-dall-e-midjourney/"/>
        <!-- <EditorialCard src="{ base }/imgs/editorial/percent.mp4" alt="" title="CLAIM OUR PERCENT" type="RESEARCH, DESIGN, DEVELOPMENT" year="2022" publication="PERSONAL PROJECT" description="I developed an interactive data visualization on labor history and guide to unionizing in the modern workplace." link="https://ashley-cai.github.io/claim-our-percent"/> -->
        <EditorialCard src="{ base }/imgs/editorial/illiteracy.mp4" alt="" title="DIASPORATIC TEXTS IN ILLITERACY" type="RESEARCH, DESIGN, DEVELOPMENT" year="2023" publication="PERSONAL PROJECT" description="I built an interactive experience about the guilt, struggle, and shame of being somewhat illiterate in Chinese." link = "https://ashley-cai.github.io/illiteracy-souvenirs"/>
        <EditorialCard src="{ base }/imgs/editorial/brownproperty-small.mp4" alt="" title="HOW BROWN'S CAMPUS AND PROPERTY HOLDINGS HAVE CHANGED, FROM 1770 TO TODAY" type="RESEARCH, ART DIRECTION, DESIGN, DEVELOPMENT" year="2022" publication="BROWN DAILY HERALD" description="Explore how Brown expanded from two lots between Waterman and George streets to a campus that spans the city of Providence." link="https://projects.browndailyherald.com/2022/12/13/brown-property-footprint/"/>
        <div class="other-contribs">
            <a href="{ base }/projects/editorial">
            <div class="other-contribs-div">OTHER CONTRIBUTIONS</div>        </a>

            <svg class="arrow-icon-contrib" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19.5L19.5 1M19.5 1H5M19.5 1V15" stroke="#B4BCCC"/>
            </svg>
        </div>
    </div>

    <div id="product-container">
        <CaseStudyCard imgSrc="{ base }/imgs/servicenow/servicenow-cover.png" imgAlt="" title="SERVICENOW" type="PRODUCT DESIGN" year="2023" link="{base}/projects/servicenow"/>
        <CaseStudyCard imgSrc="{ base }/imgs/cdk/TestDrive-cover.png" imgAlt="" title="CDK GLOBAL" type="PRODUCT DESIGN" year="2022" link="{base}/projects/cdk"/>
        <CaseStudyCard imgSrc="{ base }/imgs/hackatbrown/hack@browncover.png" imgAlt="" title="HACK@BROWN" type="VISUAL DESIGN" year="2022" link="{base}/projects/hackatbrown"/>
        <CaseStudyCard imgSrc="{ base }/imgs/flowerpower/uimockup-cover.jpeg" imgAlt="" title="FLOWER POWER" type="PRODUCT DESIGN" year="2020" link="{base}/projects/flowerpower"/>
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

    #editorial-container {
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
    
    .other-contribs {
        display: flex;
        /* justify-content: center; */
        flex-direction: row;
        align-items: center;
        float: right;
    }

    .other-contribs-div {
        color: var(--medium-gray) !important;
    }

    .arrow-icon-contrib {
        width: 12px;
        height: 12px;
        padding-left: .5vw;
    }
</style>