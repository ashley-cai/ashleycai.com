<script>
    export let img1Src=""
    export let img1Alt=""
    export let img2Src=""
    export let img2Alt=""
    export let img3Src=""
    export let img3Alt=""
    export let title=""
    export let type=""
    export let year="2000"
    export let description=""
</script>

<div class="editorial-card">
    <div class="editorial-label-container">
        <div class="editorial-card-title">{title}</div>
        <div class="editorial-card-description">{description}</div>
        <div class="editorial-card-type">{type}</div>
    </div>
    <img class="editorial-img1" src={img1Src} alt={img1Alt}>
</div>

<style>
    .editorial-card {
        display: flex;
    }

    .editorial-label-container {
        /* text-align:justify;
        text-align-last:justify; */
        padding-top: .5vw;
        padding-bottom: 15vw;
        width: 40vw;
    }
    .editorial-card-title {
        font-size: 1.4em;
    }
    .editorial-card-description {
        font-size: 1em;
        margin-top: 5px;
    }
    .editorial-card-type {
        font-family: 'IBMPlexMono';
        color: var(--medium-gray);
        font-size: 1em;
        margin-top: 5px;
    }

    .editorial-img1 {
        display: block;
        max-height:20vw;
        width: auto;
        margin-left: auto;
    }


</style>