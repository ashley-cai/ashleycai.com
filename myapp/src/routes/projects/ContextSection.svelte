

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
    .context-section-container {
        display: flex;
        flex-direction: row;
        padding-top: 4vh;
        width: 50vw;
        margin: auto;
    }

    .section-label {
        font-family: GTAmerica-Bold;
        font-size: .8em;
        margin-top: .2vh;
        width: 8vw;
    }

    .my-role-container {
        display: flex;
        flex-direction: row;
        margin-right: 8vw;
    }

    .context-container {
        display: flex;
        flex-direction: row;
    }
</style>