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
            <div class="case-study-label-text">{title}</div>
            <div class="case-study-label-text">{type}</div>
            <div class="case-study-label-text">{year}</div>
        </div>
    </a>
</div>

<style>
    .case-study-card {
        padding-bottom: 15vw;
    }
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
        display:flex;
        justify-content:space-between;
        font-size: 1em;
    }
    @media (max-width: 800px) {
        .case-study-label-text {
            font-size: .8em;
        }
    }
</style>