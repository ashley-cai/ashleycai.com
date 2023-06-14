
<script>
    export let imgSrc=""
    export let imgAlt=""
</script>

<img class="wide-img" src={imgSrc} alt={imgAlt}>

<style>
    .wide-img {
        width: 90vw;
        height: 60vh;
        object-fit: cover;
    }
</style>
