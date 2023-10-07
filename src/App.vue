<template>
  <div id="app">
    <router-view />
    <Dropdown />
  </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';

export default {
  name: 'App',
  components: {
    Dropdown, 
  }
}
</script>

<style scoped>
.container{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 200px;
  transform: translate(-50%, -50%);
}
.content {
  padding: 20px;
}
</style>
