<template>
  <HelloWorld msg="Introducción al Compostaje mediante el juego" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
html {
  min-height: 100%; 
}

body {
  min-height: 100%; 
  background: linear-gradient(180deg, rgba(153,194,108,1) 0%, rgba(99,150,92,1) 35%, rgba(8,93,51,1) 100%); 
}
#app {
  font-family: Encode Sans;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
