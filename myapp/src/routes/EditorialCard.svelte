<script>
    export let src=""
    export let alt=""
    export let title=""
    export let type=""
    export let year="2000"
    export let description=""
    export let publication=""
    export let link = ""
</script>

<div class="editorial-card">
    <div class="editorial-label-container">

        <a href={link} target="_blank">
            <div class="editorial-card-title-container">
                <div class="editorial-card-title">{title}                 
                    <svg class="arrow-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 19.5L19.5 1M19.5 1H5M19.5 1V15" stroke="black"/>
                </svg></div>

            </div>
        </a>
            
        <div class="editorial-card-pub">{publication}</div>
        <div class="editorial-card-description">{description}</div>
        <div class="editorial-card-type">{type}</div>
    </div>
    <video class="editorial-video-loop" autoplay muted loop>
        <source src={src} type="video/mp4">
        <track kind="captions">
    </video>
</div>

<style>
    @media (max-width: 800px) {
        .editorial-card {
            flex-direction: column;
            max-height: 80vh !important;
        }
    }
    .editorial-card {
        display: flex;
        max-height: 20vw;
        margin-bottom: 16vh;
    }

    .arrow-icon {
        width: 16px;
        height: 16px;
        padding-left: .5vw;
    }


    .editorial-card-title-container {
        display: flex;
        /* justify-content: center; */
        flex-direction: row;
        align-items: center;
    }

    @media (max-width: 800px) {
        .editorial-label-container {
            width: 90vw !important;
        }
    }
    .editorial-label-container {
        /* text-align:justify;
        text-align-last:justify; */
        padding-top: .5vw;
        width: 40vw;
    }
    .editorial-card-pub {
        font-size: 1em;
        margin-top: 5px;
    }
    .editorial-card-title {
        font-size: 1.4em;
        color: var(--black);
    }
    a {
        text-decoration: none !important;
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

    @media (max-width: 800px) {
        .editorial-video-loop {
            width: 90vw !important;
            max-height:50vw !important;
            margin-top: 4vh;
        }
    }
    .editorial-video-loop {
        display: block;
        max-height:20vw;
        /* widows:10vw; */
        object-fit: cover;
        width: auto;
        margin-left: auto;
    }

    


</style>