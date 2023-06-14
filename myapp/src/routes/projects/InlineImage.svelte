<script>
    export let imgSrc=""
    export let imgAlt=""
    export let caption = ""
    import index from "../index.svelte";

</script>

<div class="inline-img-container">
    <img class="wide-img" src={imgSrc} alt={imgAlt}>
    <div class="img-caption">{caption}</div>
</div>

<style>
    .wide-img {
        width: 50vw;
        max-height: 40vh;
        object-fit: cover;
    }
    .inline-img-container {
        padding-top: 4vh;
        padding-bottom: 4vh;
        margin: auto;
        width: 50vw;
    }
    .img-caption {
        color: var(--medium-gray);
    }
</style>
