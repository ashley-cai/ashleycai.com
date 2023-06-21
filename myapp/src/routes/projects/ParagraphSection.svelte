<script>
    export let sectionLabel=""
</script>

<div class="paragraph-container">
    <div class="section-label">{sectionLabel}</div>
    <div class="paragraph">
        <slot class="paragraph" name="paragraph"></slot>
    </div>
</div>

<style>
    .section-label {
        font-family: GTAmerica-Bold;
        font-size: .8em;
        margin-top: .2vh;
        width: 8vw;
    }


    @media (max-width: 800px) {
        .paragraph {
            width: 90vw !important;
            padding-left: 0vw !important;
        }
    }
    .paragraph {
        padding-left: 2vw;
        width: 42vw;
        float:right;
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 800px) {
        .paragraph-container {
            flex-direction: column !important;
            width: 90vw !important;
        }
    }
    .paragraph-container {
        display: flex;
        flex-direction: row;
        width: 50vw;
        margin: auto;
        margin-top: 8vh;
        margin-bottom: 8vh;

    }
</style>