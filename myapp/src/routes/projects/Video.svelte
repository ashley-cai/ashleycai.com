<script>
    export let src = ""
    export let title = ""
</script>

<div class="video-container">
    <div class = "section-label">{title}</div>
    <video class="video-loop" autoplay loop>
        <source src={src} type="video/mp4">
        <track kind="captions">
    </video>
</div>

<style>
    .section-label {
    text-align: center;        
    font-family: GTAmerica-Bold;
    font-size: .8em;
    margin: auto;
    padding-bottom: 4vh;
    }
.video-loop {
    display:block;
    margin:auto;
    max-height: 80vh;
}
.video-container {
    padding-top: 4vh;
    padding-bottom: 8vh;

}
</style>
