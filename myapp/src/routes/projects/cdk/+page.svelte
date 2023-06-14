<script>
	import TitleText from "../TitleText.svelte";
	import WideImage from "../WideImage.svelte";
    import ContextSection from "../ContextSection.svelte";
	import ParagraphSection from "../ParagraphSection.svelte";
</script>

<div class="page-content">
<TitleText title="CDK Global: Remote Test Drive App"></TitleText>

<WideImage imgSrc="cdk-imgs/TestDrive-cover.png" imgAlt=""></WideImage>

<ContextSection>
    <div slot="myRole">
        Research<br>
        UI/UX Design<br>
        User Testing<br>
        Interaction Design<br>
        Animation
    </div>
    <div slot="context">
        2 weeks<br>
        Internship<br>
        Hackathon Project
    </div>
</ContextSection>

<ParagraphSection>
    
</ParagraphSection>

</div>

<style>
    .page-content {
        padding-top: 15vh;
        width: 90vw;
        margin: auto;
    }
</style>