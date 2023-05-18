<script>
	import {onMount} from 'svelte'
    import Letterize from "letterizejs"

    let letters;

    onMount(() => {
        letters = new Letterize({
            targets: ".intro-text",
            wrapper: "span"
            });
        
        for (let i of letters.listAll){
            i.innerHTML = i.innerHTML.replace(/&nbsp;/g, " ");
        }
	})
</script>

<div class="intro-section">
    
    <div class="intro-text">
        <div class="sentence">Ashley is an experience and information designer studying computer science, graphic design, and policy at Brown|RISD. She is fascinated by language, journalism, and the texture of the color green.</div><div class="sentence">Currently at ServiceNow, previously at The Los Angeles Times.</div>
    </div>

</div>

<style>
    .intro-section {
        height: 100vh;
    }
    .intro-text {
        display: block;
        font-size: 1.6em;
        width: 90vw;
        max-width: 720px;
        white-space: pre-line;
    }
    .sentence {
        margin-bottom: 2vw;
    }

    /* @media screen and (max-width: 599px) h1 br {
        content: " ";
    } */
    
</style>