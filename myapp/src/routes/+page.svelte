<script>
    import index from './index.svelte';
    import StickyNav from './StickyNav.svelte';
    import Intro from './Intro.svelte';
    import CaseStudyCard from './CaseStudyCard.svelte';
	import {onMount} from 'svelte'
	import JournalismCard from './JournalismCard.svelte';
    import PlayContainer from './PlayContainer.svelte';
    import Plants from './Plants.svelte';
    
    onMount(() => {
        // change highlighting for sticky nav section

        ScrollTrigger.create({
            trigger: '#product-container',
            toggleClass: {targets: "#product-nav", className: 'current-section'},
            start: 'top center',
            end: 'bottom bottom',
            onLeaveBack: 'reverse',
            // markers: true,
        })

        ScrollTrigger.create({
            trigger: '#journalism-container',
            toggleClass: {targets: "#journalism-nav", className: 'current-section'},
            start: 'top center',
            // end: 'bottom bottom',
            onLeaveBack: 'reverse',
            // markers: true,
        })

        //scroll to with sticky nav
        const productNav = document.querySelector('#product-nav');
        const journalismNav = document.querySelector('#journalism-nav');
        const playNav = document.querySelector('#play-nav');

        productNav.addEventListener('click', () => {
        gsap.to(window, {
            duration: .4,
            scrollTo: {y: "#product-container", offsetY: 100}
        });
        });

        journalismNav.addEventListener('click', () => {
        gsap.to(window, {
            duration: .4,
            scrollTo: {y: "#journalism-container", offsetY: 100}
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
        <CaseStudyCard imgSrc="cdk/TestDrive-cover.png" imgAlt="" title="CDK GLOBAL INTERNSHIP" type="PRODUCT DESIGN" year="2022" />
        <CaseStudyCard imgSrc="cdk/TestDrive-cover.png" imgAlt="" title="CDK GLOBAL INTERNSHIP" type="PRODUCT DESIGN" year="2022" />
        <CaseStudyCard imgSrc="cdk/TestDrive-cover.png" imgAlt="" title="CDK GLOBAL INTERNSHIP" type="PRODUCT DESIGN" year="2022" />
    </div>

    <div id="journalism-container">
        <JournalismCard img1Src="cdk/TestDrive-cover.png" img1Alt="" title="REPOWERING THE WEST" type="MAPPING, DESIGN, CODE, ANIMATION" year="2022" description="Clean energy projects are badly needed to fight climate change — but they can fuel intense opposition in the communities where they’re built. We’re spotlighting examples of that tension across the West, with an eye toward finding solutions." />
        <JournalismCard img1Src="cdk/TestDrive-cover.png" img1Alt="" title="REPOWERING THE WEST" type="MAPPING, DESIGN, CODE, ANIMATION" year="2022" description="Clean energy projects are badly needed to fight climate change — but they can fuel intense opposition in the communities where they’re built. We’re spotlighting examples of that tension across the West, with an eye toward finding solutions." />
        <JournalismCard img1Src="cdk/TestDrive-cover.png" img1Alt="" title="REPOWERING THE WEST" type="MAPPING, DESIGN, CODE, ANIMATION" year="2022" description="Clean energy projects are badly needed to fight climate change — but they can fuel intense opposition in the communities where they’re built. We’re spotlighting examples of that tension across the West, with an eye toward finding solutions." />
    </div>

    <div id="play-container">
        <PlayContainer imgSrc="cdk/TestDrive-cover.png"/>
    </div>

</div>

<style>
    :global(html) {
        font-family: "GTAmerica";
        background-color:  var(--light-gray);
    }

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