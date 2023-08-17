<script>
        import { base } from '$app/paths';
</script>

<div>
    <section id="photos">
        <img src="{base}/imgs/play/grapes.png">
      <iframe src="https://www.youtube.com/embed/AEryQFXzebs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <img src="{base}/imgs/play/frogust.png">
      <iframe src="https://www.youtube.com/embed/vpgozSUUgf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      <img src="{base}/imgs/play/aquariumbackpack.png">
      <img src="{base}/imgs/play/azula.png">
      <img src="{base}/imgs/play/birthday_city.png">
      <img src="{base}/imgs/play/doodle.png">
      <img src="{base}/imgs/play/exhale.png">
      <img src="{base}/imgs/play/fish-hand.png">
      <img src="{base}/imgs/play/green.jpg">
      <img src="{base}/imgs/play/halle.PNG">
      <img src="{base}/imgs/play/hulahoop.png">
      <img src="{base}/imgs/play/jane!.png">
      <img src="{base}/imgs/play/klimtenergy.png">
      <img src="{base}/imgs/play/light2.jpg">
      <img src="{base}/imgs/play/loreolympus.png">
      <img src="{base}/imgs/play/mermaid.jpg">
      <img src="{base}/imgs/play/mermay.png">
      <img src="{base}/imgs/play/mm.png">
      <img src="{base}/imgs/play/mulan.png">
      <img src="{base}/imgs/play/sharpblossoms.png">
      <img src="{base}/imgs/play/sketchie.png">
      <a target = "_blank" href = "https://www.webtoons.com/en/challenge/heart-shaped-spaces-h/list?title_no=428396"><img src="{base}/imgs/play/spaces.jpg"></a>
      <img src="{base}/imgs/play/treesdaisies.png">
      <img src="{base}/imgs/play/underlights.jpg">

    </section>
  </div>

<style>
    div {
    max-width: 1200px;
    margin: 0 auto;
    }

    #photos {
    margin-top: 40vh;
    line-height: 0;
    -webkit-column-count: 3;
    -webkit-column-gap: 10px;
    -moz-column-count: 3;
    -moz-column-gap: 10px;
    column-count: 3;
    column-gap: 10px;
    }

    #photos img {
    width: 100%;
    height: auto !important;
    margin-bottom: 10px;
    }

    #photos iframe {
    width: 100%;
    height: 40vh !important;
    margin-bottom: 10px;
    }

    @media (max-width: 1200px) {
    #photos {
        column-count: 3;
    }
    }

    @media (max-width: 980px) {
    #photos {
        column-count: 2;
    }
    }

    @media (max-width: 640px) {
    #photos {
        column-count: 1;
    }
    }

</style>