<script>
	import {onMount} from 'svelte'
    import {base} from '$app/paths';
    // import Letterize from "letterizejs"

    let letters;
    onMount(() => {
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
        <div class="sentence">Ashley is a designer and developer studying computer science, graphic design, and policy at Brown|RISD. She is fascinated by language, journalism, and the texture of the color green.</div><div class="sentence2">Currently freelancing at the Pudding. Previously at ServiceNow and The Los Angeles Times.</div>
        <script src="{base}/js/dance.js" defer></script>
        <div class="link-container">
            <a class="link" href="mailto:ashley.lcai@gmail.com" target="_blank">Email</a> 
            <a class="link " href="https://linkedin.com/in/ashley-cai" target="_blank">Linkedin</a> 
            <a class="link " href="https://github.com/ashley-cai" target="_blank">Github</a>
            <a class="link " href="https://www.browndailyherald.com/staff/ashley-cai" target="_blank">Writing</a>
        </div>
    </div>
    
</div>

<style>

    :global(.transition){
    transition: top 500ms, left 500ms !important; }


    .intro-section {
        height: 80vh;
    }

    @media (max-width: 800px) {
        .intro-text {
            font-size: 1.5em !important;
        }
    }
    .intro-text {
        display: block;
        font-size: 1.8em;
        width: 90vw;
        max-width: 800px;
        white-space: pre-line;
    }

    .sentence {
        margin-bottom: 4vh;
    }

    .link-container {
        margin-top: 8vh;
    }

    .link {
        color: var(--medium-gray);
        text-decoration: none;
        margin-right: 4vw;
    }

    
</style>