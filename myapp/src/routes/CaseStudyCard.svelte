<script>
    export let imgSrc=""
    export let imgAlt=""
    export let title=""
    export let type=""
    export let year="2000"
    export let link=""
</script>

<div class="case-study-card">
    <a href = "{link}">
        <img class="case-study-img" src={imgSrc} alt={imgAlt}>
        <div class="case-study-labels">
            <div>{title}</div>
            <div>{type}</div>
            <div>{year}</div>
        </div>
    </a>
</div>

<style>
    a {
        color: var(--black);
        text-decoration: none;
    }
    .case-study-img {
        width: 90vw;
        height: 60vh;
        object-fit: cover;
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