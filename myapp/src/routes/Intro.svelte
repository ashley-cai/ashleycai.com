<script>
	import {onMount} from 'svelte'
    import {base} from '$app/paths';
    // import Letterize from "letterizejs"

    let letters;
    onMount(() => {
        console.log("test")

        let introText = document.querySelector(".sentence"); // Get reference to the h1
        let text = introText.textContent.split("");                 // Get the text content into an array

        let result = ""; // Will hold output

        // Loop over the array
        let i = 0
        text.forEach(function(char){
            result += (char === "") ? "" : '<span class="transition" style=position:"relative"; left:0px; top:0px;" id="'+i+'" onmouseenter=jump(this)>' + char + "</span>";
            i++;
        });

        introText.innerHTML = result;  // Reset the h1's content

        let introText2 = document.querySelector(".sentence2"); // Get reference to the h1
        text = introText2.textContent.split("");                 // Get the text content into an array

         result = ""; // Will hold output

        // Loop over the array
        i = 0
        text.forEach(function(char){
            result += (char === "") ? "" : '<span class="transition" style=position:"relative"; left:0px; top:0px;" id="'+i+'" onmouseenter=jump(this)>' + char + "</span>";
            i++;
        });

        introText2.innerHTML = result;
    })

</script>

<div class="intro-section">
    
    <div class="hero intro-text">
        <div class="sentence">Ashley is an experience and information designer studying computer science, graphic design, and policy at Brown|RISD. She is fascinated by language, journalism, and the texture of the color green.</div><div class="sentence2">Currently at ServiceNow, previously at The Los Angeles Times.</div>
        <script src="{base}/js/dance.js" defer></script>
    </div>
    
</div>

<style>

    :global(.transition){
    transition: top 500ms, left 500ms !important; }


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

    :global(.n7) {
        top: 0px;
        left: 0px; 
    }
    
</style>