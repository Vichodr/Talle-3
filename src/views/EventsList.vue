<template>
  <AppNavbar />
  <div class="container">
    <div class="row" v-for="(rowItems, index) in gridNews" :key="index">
      <div class="image-box" v-for="item in rowItems" :key="item._id">
        <div class="text-left">{{ item.day }}&nbsp;{{ item.month }}</div>
        <div class="text-left">{{ item.year }}</div>
        <a :href="item.source" class="text-center">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import axios from "axios";

export default {
  name: 'EventsList',
  components: {
    AppNavbar,
  },
  data() {
    return {
      events: []
    };
  },
  computed: {
    gridNews() {
      const gridSize = 1;
      const grid = [];
      for (let i = 0; i < this.events.length; i += gridSize) {
        grid.push(this.events.slice(i, i + gridSize));
      }
      return grid;
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://3.138.52.135:3000/events');
      if (response.data.events && response.data.events.length > 0) {
        this.events = response.data.events;
      }
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  },
}
</script>

<style scoped>
.container{
  align-content: center;
  position: relative;
  left: 15%;
}
.image-box {
  margin-top: 50px;
  width: 700px; 
  height: 100px; 
  background-color: rgb(0, 49, 143);
  border-radius: 20px;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
}

.text-left {
  position: relative;
  top: 20px;
  margin-top: 5px;
  margin-left: 20px;  
  color: white;
}
.text-center {
  position: relative;
  margin-bottom: 20px;
  color: white;
  bottom: 20px;
  font-size: 16px;
  font-weight: bold;
}

</style>