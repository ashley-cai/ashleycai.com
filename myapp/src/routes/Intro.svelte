<script>
	import {onMount} from 'svelte'
    import Letterize from "letterizejs"

    onMount(() => {
        var letters = new Letterize({
            targets: ".intro-text",
            wrapper: "span"
            });
	})
</script>



<div class="intro-section">
    
    <div class="intro-text">
    Ashley is an experience and information designer studying computer science, graphic design, and policy at Brown|RISD. 
    <br>
    She is fascinated by language, journalism, and the texture of the color green.
    <br>
    <br>
    Currently at ServiceNow, previously at The Los Angeles Times.
    </div>

</div>

<style>
    .intro-section {
        height: 100vh;
    }
</style>