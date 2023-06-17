<script>
        import index from './index.svelte';
        import { base } from '$app/paths';

</script>

<div id="nav">
    <div class="nav" id="name">
    <a href="/"><div>ASHLEY CAI</div></a>
    <svg class="symbol" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.73751 16.7861C7.66719 11.6492 6.35083 10.3328 1.21391 9.26249C0.928697 9.20294 0.928697 8.79706 1.21391 8.73751C6.35083 7.66719 7.66719 6.35083 8.73751 1.21391C8.79706 0.928697 9.20294 0.928697 9.26249 1.21391C10.3328 6.35083 11.6492 7.66719 16.7861 8.73751C17.0713 8.79706 17.0713 9.20294 16.7861 9.26249C11.6492 10.3328 10.3328 11.6492 9.26249 16.7861C9.20294 17.0713 8.79706 17.0713 8.73751 16.7861Z" fill="#C7F565" stroke="black" stroke-miterlimit="10"/>
        </svg>
    </div>
        
    <a href="{base}/info"><div id="info" class="nav">INFO</div></a>
</div>

<slot />

<style> 

a {
    color: var(--black);
    text-decoration: none;
}

#nav {
    top:0;
    position:fixed;
    width: 100%;
    height: 16vh;
    position:fixed;
    background-color: var(--light-gray);
    --mask: linear-gradient(to bottom, 
      rgba(0,0,0, 1) 0,   rgba(0,0,0, 1) 60%, 
      rgba(0,0,0, 0) 95%, rgba(0,0,0, 0) 0
  ) 100% 50% / 100% 100% repeat-x;
  -webkit-mask: var(--mask); 
  mask: var(--mask);
}
.nav {
    position: fixed;
    top: 4vh;
    font-family: GTAmerica-Bold;
    font-size: .8em;
}
#name {
    left: 5vw;
    display: flex;
    justify-content: center;
  align-items: center;
 }
 .symbol {
    margin-left: .5vw;
 }

 #info {
    right: 5vw;
 }

 :global(html) {
        font-family: "GTAmerica";
        background-color:  var(--light-gray);
    }
 
</style>