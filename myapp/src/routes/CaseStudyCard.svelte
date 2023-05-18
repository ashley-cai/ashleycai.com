<script>
    export let imgSrc=""
    export let imgAlt=""
    export let title=""
    export let type=""
    export let year="2000"
</script>

<div class="case-study-card">
    <img class="case-study-img" src={imgSrc} alt={imgAlt}>
    <div class="case-study-labels">
        <div>{title}</div>
        <div>{type}</div>
        <div>{year}</div>
    </div>
</div>

<style>
    .case-study-img {
        width: 90vw;
    }
    .case-study-labels {
        /* text-align:justify;
        text-align-last:justify; */
        padding-top: .5vw;
        padding-bottom: 15vw;
        display:flex;
        justify-content:space-between;
        font-size: 1em;
    }
</style>