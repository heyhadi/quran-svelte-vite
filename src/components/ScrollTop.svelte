<script>
    import {Icon} from "sveltestrap";
    export let showOnPx = 150;
    let hidden = true;
  
    function goTop() {
      document.body.scrollIntoView();
    }
  
    function scrollContainer() {
      return document.documentElement || document.body;
    }
  
    function handleOnScroll() {
      if (!scrollContainer()) {
        return;
      }
  
      if (scrollContainer().scrollTop > showOnPx) {
        hidden = false;
      } else {
        hidden = true;
      }
    }
  </script>
  
  <style>
    .back-to-top {
      opacity: 1;
      transition: opacity 0.5s, visibility 0.5s;
      position: fixed;
      z-index: 99;
      right: 20px;
      user-select: none;
      bottom: 20px;
      font-size: 40px;
      color: #0c50b6;
      /* background-color: black; */
    }
  
    .back-to-top.hidden {
      opacity: 0;
      visibility: hidden;
    }
  </style>
  
  <svelte:window on:scroll={handleOnScroll} />
  
  <div class="back-to-top" on:click={goTop} class:hidden on:keypress><i class="fa-solid fa-circle-arrow-up"></i></div>
  