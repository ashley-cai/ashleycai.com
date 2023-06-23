
<script>
    export let imgSrc=""
    export let imgAlt=""
</script>

<img loading="lazy" class="wide-img" src={imgSrc} alt={imgAlt}>

<style>
    .wide-img {
        padding-top: 2vh;
        padding-bottom: 4vh;
        width: 90vw;
        height: 70vh;
        object-fit: cover;
    }
</style>
