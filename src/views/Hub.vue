  <template>
    <AppNavbar />
    <div>
      <h1 class="text">Landing Page</h1>
    </div>
  </template>
  
  <script>
  import AppNavbar from '@/components/AppNavbar.vue';

  export default {
    name: 'NewsDetail',
    components: {
      AppNavbar,
    }
  }
  </script>
  
  <style scoped>
    .text{
      position: relative;
      text-align: center;
      top: 250px;
    }
  </style>
  