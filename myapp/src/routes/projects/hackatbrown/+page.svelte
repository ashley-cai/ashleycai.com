<script>
    import TitleText from "../TitleText.svelte";
	import WideImage from "../WideImage.svelte";
    import ContextSection from "../ContextSection.svelte";
	import ParagraphSection from "../ParagraphSection.svelte";
	import InlineImage from "../InlineImage.svelte";
	import Video from "../Video.svelte";
    import { base } from '$app/paths';
    
</script>

<div class="page-content">
<TitleText title="Hack@Brown: A Hackathon for Everyone"></TitleText>

<WideImage imgSrc="{base}/imgs/hackatbrown/hack@browncover.png" imgAlt=""></WideImage>

<ContextSection>
    <div slot="myRole">
        Design Co-lead<br>
        Visual Design <br>
        Experience Design<br>
        3D Modeling
    </div>
    <div slot="context">
        4 months<br>
        Club Project
    </div>
</ContextSection>

<ParagraphSection sectionLabel="OVERVIEW">
    <div slot="paragraph">
        Hack@Brown is the annual hackathon run by students at Brown University and Rhode Island School of Design. Through a friendly and joyful visual identity, we want to welcome newcomers and emphasize accessibility. We wanted our branding to align with our values:
        <br>
        <br>
        <div class="indented">
            Outreach toward first-time hackers and historically underrepresented minorities in the technology industry.<br>
            Logistics to make the event accessible to all, regardless of physical ability.<br>
            A branding language that goes against the grain of tech design (often slanted toward the masculine) in order to communicate approachability and inclusion.
        </div>
    </div>
</ParagraphSection>

<ParagraphSection sectionLabel="PROBLEM">
    <div slot="paragraph">
        How can we create a culture of inclusivity to encourage even those who never coded before to join Hack@Brown?
    </div>
</ParagraphSection>

<ParagraphSection sectionLabel="SOLUTION">
    <div slot="paragraph">
        The hackathon theme “Greenhouse” emphasizes growth and encourages anyone with a willingness to learn to participate. 3D visuals also immerse the participant in a fun and "hands-on" startup environment.
    </div>
</ParagraphSection>

<InlineImage classes="height-img" imgSrc="{base}/imgs/hackatbrown/h@b style guide.png" imgAlt=""> </InlineImage>

<ParagraphSection sectionLabel="GRAPHICS">
    <div slot="paragraph">
        The primary way in which we differentiated our brand from the ones before it was through creating imagery in three dimensions. We, like the entirety of the tech community, have played with isometric illustrations for some time now, but we decided that it was time to make a clean break from simple gradients, geometric shapes, and “human” illustrations. We aimed to push a boundary in tech’s design standard. Instead of trying to create an organic aesthetic, we moved in the opposite direction: We used Cinema4D to model inorganic scenes in unexpected ways.
    </div>
</ParagraphSection>

<InlineImage classes="object-img" imgSrc="{base}/imgs/hackatbrown/happy-plant.png" imgAlt=""> </InlineImage>

<ParagraphSection sectionLabel="CHALLENGES">
    <div slot="paragraph">
        The use of 3D renderings presented new challenges in our web design. We wanted to build an immersive and interactive experience — a lofty goal for a team with no prior experience in 3D modeling or Blender. In particular, we learned the necessity of maintaining consistency among lighting settings, camera perspectives, and material settings.
    </div>
</ParagraphSection>

<InlineImage classes="object-img" imgSrc="{base}/imgs/hackatbrown/worm.png" imgAlt=""> </InlineImage>

<ParagraphSection sectionLabel="DELIVERABLES">
    <div slot="paragraph">
        7 designers, including myself, were responsible for designing the registration pages and dashboard, marketing graphics, and merch.
    </div>
</ParagraphSection>

<Video src="{base}/imgs/hackatbrown/greenhouse.mp4"></Video>

</div>


<style>
    :global(.object-img) {
        object-fit: contain !important;
    }

    :global(.height-img) {
        max-height: 100% !important;
    }

    .page-content {
        padding-top: 10vh;
        width: 90vw;
        margin: auto;
    }
    .indented {
        padding-left: 2vw;
    }
    .gif {
        width: 30vw;
        display: block;
        margin: auto;
        padding-bottom: 12vh;
    }
    .interactive-prototype {
        position:relative;
        display: block;
        margin:auto;
        width:300px;
        max-width: 90vw;
        height:700px;
        border: 0;
    }
</style>