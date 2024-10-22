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
<TitleText title="CDK Global: Remote Test Drive Booking App"></TitleText>

<WideImage imgSrc="{base}/imgs/cdk/TestDrive-cover.png" imgAlt=""></WideImage>

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

<ParagraphSection sectionLabel="OVERVIEW">
    <div slot="paragraph">
        During my summer at CDK Global, I organized the 4 other design interns to form a design-only hackathon team, where we designed a remote test drive booking experience in response to the COVID-19 pandemic and existing pain points in the car purchasing process.
    </div>
</ParagraphSection>

<ParagraphSection sectionLabel="QUESTIONS">
    <div slot="paragraph">
        We brainstormed some initial questions to get a better grasp on the problems at hand. <br>
        <div class="indented">
        “What are some existing problems in the auto industry? <br>
        “Who is purchasing cars during the pandemic and where? <br>
        “How can we build a tool to address the COVID-19 Pandemic? <br>
        “What are some pain points in the car buying process?”
        </div>
    </div>
</ParagraphSection>

<InlineImage imgSrc="{base}/imgs/cdk/Design-Process-Flow.png" imgAlt=""> </InlineImage>

<ParagraphSection sectionLabel="FOCUS">
    <div slot="paragraph">
        Based on internal company studies, we discovered two main things:<br>
        <div class="indented">
        1. Test driving the car is one of the main customer needs before purchase. However, the pandemic made test driving much more difficult.<br>
        2. Customers do not enjoy the in-person car purchasing process, and companies were shifting to streamlined online car purchasing experiences even before the pandemic.<br>
        </div>
    </div>
</ParagraphSection>

<ParagraphSection sectionLabel="RESEARCH">
    <div slot="paragraph">
        We decided to build a solution to the temporary issue of in-person test driving that also served as a proof of concept for an entirely digital experience of purchasing a car.
    </div>
</ParagraphSection>

<InlineImage imgSrc="{base}/imgs/cdk/CompetitiveAnalysis.png" imgAlt="" caption="A small snapshot of the collaborative Miro board we used to compile research."> </InlineImage>

<ParagraphSection sectionLabel="PERSONAS">
    <div slot="paragraph">
        We synthesized 5 personas from the research we conducted to understand the needs of car buyers better.
    </div>
</ParagraphSection>

<InlineImage imgSrc="{base}/imgs/cdk/Customer.png" imgAlt="" caption="Several of the personas we created to help create a suitable solution."> </InlineImage>

<ParagraphSection sectionLabel="IDEATION">
    <div slot="paragraph">
        From an ideation session grounded in our research, we decided to create a progressive web application focusing on natural language, micro-interactions, and clear information communication.
    </div>
</ParagraphSection>

<ParagraphSection sectionLabel="PROTOTYPES">
    <div slot="paragraph">
        We translated our lo-fi wireframes into mid-fidelity screens using the company's new design system. This design system had not yet been used for a mobile application, so we designed micro-interactions and UI Patterns that would aid the Radial Design System in translating to mobile.
    </div>
</ParagraphSection>

<WideImage imgSrc="{base}/imgs/cdk/Mid-Fidelity.png" imgAlt=""></WideImage>

<ParagraphSection sectionLabel="PROTOTYPES">
    <div slot="paragraph">
        With a simple Invision prototype, we conducted 4 usability tests and received some valuable input:<br>
        <div class="indented">
        We did not provide the user with enough information why they were going through certain steps<br>
        We backloaded too much information gathering beyond the existing flow without making the expectations clear<br>
        The bright blue of the background was rather jarring<br>
        </div>
    </div>
</ParagraphSection>

<ParagraphSection sectionLabel="VALIDATION">
    <div slot="paragraph">
        We also received validation for our idea:<br>
        <div class="indented">
        “I like how it was very simple, there’s not a lot of text and it’s exactly what I needed to know and do”<br>
        “I’m surprised how straightforward that was, I think this would be useful”<br>
        “I like that better than going to the dealership, actually”<br>
        </div>
    </div>
</ParagraphSection>

<ParagraphSection sectionLabel="GOALS">
    <div slot="paragraph">
        Provide the user with more clear information.<br>
        Move backloaded steps such as asking for a Driver’s License and Car Insurance to the beginning of the flow.<br>
        Pick a more neutral background color while still sticking to the design system.<br>
    </div>
</ParagraphSection>

<Video preload="none" src="{base}/imgs/cdk/media1.mp4" title="HIGH FIDELITY PROTOTYPE"></Video>

<ParagraphSection sectionLabel="REFLECTION">
    <div slot="paragraph">
        Though we didn't win the hackathon, our project is now being considered for actual implementation in CDK's vast line of products. We also received feedback from peers that they were glad to see a project that used the design system to center user enjoyment, and that they hoped it would help shift the company's design culture to a perspective that’s a bit more playful.<br>
        <br>
        It was interesting to realize what unanticipated roadblocks we ran into. The largest tackling point was balancing the ease of use for the user while ensuring that there was not too much unreliability for the dealership. If this project were to continue, we would conduct further usability testing to see how much friction would be healthy to ensure commitment on the user end.
    </div>
</ParagraphSection>

<img loading="lazy" class="gif" src="{base}/imgs/cdk/car-confirmation-1-min.gif">

</div>


<style>
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
</style>