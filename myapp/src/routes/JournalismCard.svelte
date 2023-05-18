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

<div class="journalism-card">
    <div class="journalism-label-container">
        <div class="journalism-card-title">{title}</div>
        <div class="journalism-card-description">{description}</div>
        <div class="journalism-card-type">{type}</div>
    </div>
    <img class="journalism-img1" src={img1Src} alt={img1Alt}>
</div>

<style>
    .journalism-card {
        display: flex;
    }

    .journalism-label-container {
        /* text-align:justify;
        text-align-last:justify; */
        padding-top: .5vw;
        padding-bottom: 15vw;
        width: 40vw;
    }
    .journalism-card-title {
        font-size: 1.4em;
    }
    .journalism-card-description {
        font-size: 1em;
        margin-top: 5px;
    }
    .journalism-card-type {
        font-family: 'IBMPlexMono';
        color: var(--medium-gray);
        font-size: 1em;
        margin-top: 5px;
    }

    .journalism-img1 {
        display: block;
        max-height:20vw;
        width: auto;
        margin-left: auto;
    }


</style>