<script>
    import index from './index.svelte';
    import StickyNav from './StickyNav.svelte';
    import Intro from './Intro.svelte';
    import CaseStudyCard from './CaseStudyCard.svelte';
</script>

<StickyNav/>
<div id="body">
<Intro/>

<CaseStudyCard imgSrc="cdk/TestDrive-cover.png" imgAlt="" title="CDK GLOBAL INTERNSHIP" type="PRODUCT DESIGN" year="2022" />
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
</style>