<script>
    export let imgSrc=""
    export let imgAlt=""
    export let caption = ""
    export let classes=""
    import index from "../index.svelte";

</script>

<div class="inline-img-container">
    <img class="inline-img {classes}" src={imgSrc} alt={imgAlt}>
    <div class="img-caption">{caption}</div>
</div>

<style>

    @media (max-width: 800px) {
        .inline-img {
            width: 90vw !important;
        }  
    }
    .wide-img {
        width: 50vw;
        max-height: 40vh;
        object-fit: cover;
    }

    @media (max-width: 800px) {
        .inline-img-container {
            width: 90vw !important;
        }  
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
