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
<TitleText title="ServiceNow: GenAI for Document Intelligence"></TitleText>

<WideImage imgSrc="{base}/imgs/servicenow/servicenow-cover2.png" imgAlt=""></WideImage>

<ContextSection>
    <div slot="myRole">
        Research<br>
        UI/UX Design <br>
        Interaction Design<br>
    </div>
    <div slot="context">
        6 weeks<br>
        Internship
    </div>
</ContextSection>

<ParagraphSection sectionLabel="OVERVIEW">
    <div slot="paragraph">
        Over the second half of my internship, I built a proof of concept for LLM capabilities in Document Intelligence, an app for extracting information from documents.
        <br>
        <br>
        Unfortunately due the confidential nature of the project, I cannot currently share details of my work publicly. 
        Please reach out if you'd like to hear about my process!
    </div>
</ParagraphSection>
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