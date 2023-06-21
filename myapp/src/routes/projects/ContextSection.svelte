

<script>
</script>

<div class="context-section-container">
    <div class="my-role-container">
        <div class="section-label">
            MY ROLE
        </div>
            <slot name="myRole"></slot>
    </div>

    <div class="context-container">
        <div class="section-label">
            CONTEXT
        </div>
            <slot name="context"></slot>
    </div>
</div>

<style>
    @media (max-width: 800px) {
        .context-section-container {
            width: 90vw !important;
        }
    }
    .context-section-container {
        display: flex;
        flex-direction: row;
        padding-top: 4vh;
        width: 50vw;
        margin: auto;
    }

    @media (max-width: 800px) {
        .section-label {
        width: 40vw !important;
        }  
    }
    .section-label {
        font-family: GTAmerica-Bold;
        font-size: .8em;
        margin-top: .2vh;
        width: 10vw;
    }

    @media (max-width: 800px) {
        .my-role-container {
            flex-direction: column !important;
        }
    }
    .my-role-container {
        display: flex;
        flex-direction: row;
        margin-right: 4vw;
    }

    @media (max-width: 800px) {
        .context-container {
            flex-direction: column !important;
        }
    }
    .context-container {
        display: flex;
        flex-direction: row;
    }
</style>