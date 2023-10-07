<template>
  <AppNavbar />
  <div>
    <New/>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue'; 
import New from '@/components/New.vue';

export default {
  name: 'NewsDetail',
  components: {
    AppNavbar,
    New
  }
}
</script>

<style scoped>
</style>
