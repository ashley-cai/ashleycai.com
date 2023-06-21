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
<TitleText title="Flower Power: Smart Home Energy App"></TitleText>

<WideImage imgSrc="{base}/imgs/flowerpower/uimockup-cover.jpeg" imgAlt=""></WideImage>

<ContextSection>
    <div slot="myRole">
        User Research<br>
        UX Design<br>
        Visual Design
    </div>
    <div slot="context">
        2 weeks<br>
        Personal Project
    </div>
</ContextSection>

<ParagraphSection sectionLabel="OVERVIEW">
    <div slot="paragraph">
        A smart home app that gamifies and emphasizes energy conservation. The more energy saved, the faster your garden grows!
    </div>
</ParagraphSection>

<ParagraphSection sectionLabel="PROBLEM">
    <div slot="paragraph">
        According to the U.S. Energy Administration, 20% of energy used in the US in residential homes is wasted. The majority of electricity is still produced with coal and natural gas powered plants, and energy use by all sectors have drastically increased each year for the past 60 years.
    </div>
</ParagraphSection>

<ParagraphSection sectionLabel="GOAL">
    <div slot="paragraph">
        I wanted to focus on residential consumers and create a solution to encourage reducing electricity use.
    </div>
</ParagraphSection>

<InlineImage imgSrc="{base}/imgs/flowerpower/design-process.png" imgAlt=""> </InlineImage>

<ParagraphSection sectionLabel="USER RESEARCH">
    <div slot="paragraph">
        I reached out to a group of potential users ranging from ages 18 to 55 to better understand how people approached energy use in their homes.<br>
        <br>
        These are a few of the questions I asked in a survey and in interviews:<br>
        <div class="indented">
            How often do you think about climate change?<br>
            How often do you think about your energy usage?<br>
            What steps do you take in your personal life that are environmentally conscious?<br>
            How often do you unplug your appliances when you’re not using them?<br>
            Walk me through how you consider your home energy usage.<br>
            Do you have trouble controlling the cost of your energy and utility bill and why?
        </div>
    </div>
</ParagraphSection>

<InlineImage imgSrc="{base}/imgs/flowerpower/survey-1.png" imgAlt=""> </InlineImage>
<InlineImage imgSrc="{base}/imgs/flowerpower/survey-2.png" imgAlt=""> </InlineImage>

<ParagraphSection sectionLabel="KEY INSIGHTS">
    <div slot="paragraph">
            The majority of people think about climate change more than their energy bill.<br>
            People don’t associate their electricity use with emissions.<br>
            People don’t realize that idle appliances use electricity and don’t know where the majority of their electricity is used. For instance, many leave their chargers in the walls and their desktops plugged in.<br>
            Most people also don’t track their energy usage in a detailed way -- not necessarily out of laziness, but rather a lack of knowledge and emphasis that society stresses on energy waste.    
        <br>
        <br>
        With these insights, I built a persona to better guide what kind of product could best help my target users.
    </div>
</ParagraphSection>

<InlineImage imgSrc="{base}/imgs/flowerpower/persona.png" imgAlt="" caption=""> </InlineImage>

<ParagraphSection sectionLabel="IDEATION">
    <div slot="paragraph">
        I made a list of needs I heard from survey respondents and ranked them in order of importance.<br>
        <br>
        <div class="indented">
        1. Ways to remotely cut down on energy use<br>
        2. Regular reminders about energy use<br>
        3. Way to track their energy use<br>
        4. Breakdown of energy in the house<br>
        5. Energy use trends<br>
        6. Place to see their energy bill as the month progresses
        </div>
    </div>
</ParagraphSection>

<InlineImage imgSrc="{base}/imgs/flowerpower/sketch.png" imgAlt="" caption=""> </InlineImage>

<ParagraphSection sectionLabel="PROTOTYPES">
    <div slot="paragraph">
        I settled on a gamified, smart home energy tracking app.<br>
        <br>
        <div class="indented">
        1. I wanted to create something that matched the low commitment needs of a busy user, so I harnessed the addictiveness of farming games and collecting rare digital items.<br>
        2. Since users lacked knowledge about electricity's environmental impact and how energy is used in their own homes, I wanted to design something that would also educate and repeatedly encourage users to lower their energy use.    
        </div>
    </div>
</ParagraphSection>

<WideImage imgSrc="{base}/imgs/flowerpower/low-fid-wireframe.png" imgAlt=""></WideImage>

<ParagraphSection sectionLabel="USER TESTING">
    <div slot="paragraph">
        I reached out to several potential users and had them run through a low-fidelity interactive wireframe. I synthesized their feedback and I focused on several places for improvement.
        <br>
        <br>
        <div class="indented">
        The energy tracking screens are too separated from the gamified elements.<br>
        Add patterns to increase readability and accessibility for color-blindness.<br>
        Rearrange the information so it’s easier to identify sources of power.<br>
        There are too many ways to categorize data: pick one and stick to it.<br>
        Visualize the data rather than displaying it through text.<br>
        Scrolling through lists is a hassle.<br>
        Show a clearer distinction between below and above the users daily energy budget.<br>
        There are too many screens before the user can actually use the app. Try teaching the user features as they look for those features.
        </div>
    </div>
</ParagraphSection>

<iframe title="" class="interactive-prototype" src="https://xd.adobe.com/embed/dd6c8189-f5b0-407d-542f-f724b81170ce-ab5d/"></iframe>

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