<template>
  <div class="app">
    <aside>
        Sideter
    </aside>
  </div>
</template>

<style Lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: #000000;
  color: aliceblue;
  
  transition: 0.2s ease-out;

  @media (max-width: 768px) {
    position: relative;
    z-index: 99;
  }
}

</style>