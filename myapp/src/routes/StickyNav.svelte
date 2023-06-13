<script>

</script>

<div class="sticky-nav">
    <div class="nav-item" id="product-nav">PRODUCT</div>
    <div class="nav-item" id="editorial-nav">EDITORIAL</div>
    <div class="nav-item" id="play-nav">PLAY</div>
</div>

<style>

    :global(.current-section) {
        color: var(--black) !important;
        /* font-family: GTAmerica-Bold; */
        text-shadow: 0 0 5px var(--light-green);
    }
    .sticky-nav {
        display: flex;
        position: fixed;
        top: 4vh;
        font-size: .8em;
        left: 50%;
        transform: translate(-50%, 0);
    }

    .nav-item {
        padding-left: 1vw;
        padding-right: 1vw;
        color: var(--medium-gray);
        cursor: pointer;
    }
</style>