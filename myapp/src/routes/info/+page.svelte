
<script>
    import { base } from '$app/paths';
	import WideImage from '../projects/WideImage.svelte';
</script>

<div class="page-content">

    <div class="info-container">
        <img class="info-img" src="{base}/imgs/info/ashley.jpg" alt="">

        <div class="info-text">
            Hello! I'm Ashley.
            <br>
            I'm a designer with a penchant for code and fun little interactions.
            <br><br>
            I currently study computer science and public policy at Brown University and Graphic Design at the Rhode Island School of Design.
            <br><br>
            In the past, I've worked at:
            <br>
            <div class="indented">
                ServiceNow<br>
                The Los Angeles Times<br>
                The Brown Daily Herald<br>
                CDK Global<br>
                HqO<br>
                Heroes Jobs
            </div>
            <br>
            Outside of work, my brain tends to be occupied by friendships, stories, dance, and languages.
            <br><br>
            I'm always looking for energizing collaborations and new short stories to read, so feel free to reach out!
            <br>
            <br>
            <a class="link" target="_blank" href="https://docs.google.com/document/d/1pW_UON6NHvl6m8OzInDWrDWGuJSLm0G6A6uxG9lSbbQ/edit">
            Download Resume 
            <svg class="arrow-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19.5L19.5 1M19.5 1H5M19.5 1V15" stroke="black"/>
            </svg>
        </a>
        </div>
    </div>

</div>


<style>
    .link {
        text-decoration: none !important;
        color: var(--black);
    }

    @media (max-width: 800px) {
        .info-container {
        flex-direction: column !important;
        }
    }
    .info-container {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 800px) {
        .info-img {
            width: 90vw !important;
        }
    }
    .info-img {
        width: 40vw;
        height: 80vh;
        object-fit: cover;
    }
    .page-content {
        padding-top: 12vh;
        width: 90vw;
        margin: auto;
    }

    @media (max-width: 800px) {
        .info-text {
            width: 90vw !important;
            padding-left: 0vw !important;
            padding-top: 4vh;
            padding-bottom: 20vh;
        }
    }
    .info-text {
        font-size: 1.2em;
        width: 50vw;
        margin: auto;
        padding-left: 4vw;
        max-width: 800px;
    }
    .indented {
        padding-left: 2vw;
    }
    .arrow-icon {
        width: 16px;
        height: 16px;
        padding-left: .5vw;
    }
</style>