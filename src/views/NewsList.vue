<template>
  <AppNavbar />
  <div class="container">
    <div class="row" v-for="(rowItems, index) in gridNews" :key="index">
      <div class="image-box" v-for="item in rowItems" :key="item._id">
        <router-link :to="'/news/' + item.newsId">
          <img :src="item.imageUrl" :alt="item.title" />
        </router-link>
        <div class="image-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppNavbar from '@/components/AppNavbar.vue'; 

export default {
  name: 'NewsList',
  data() {
    return {
      news: []
    };
  },
  computed: {
    gridNews() {
      const gridSize = 4;
      const grid = [];
      for (let i = 0; i < this.news.length; i += gridSize) {
        grid.push(this.news.slice(i, i + gridSize));
      }
      return grid;
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://3.138.52.135:3000/news');
      if (response.data.news && response.data.news.length > 0) {
        this.news = response.data.news;
      }
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  },
  components: {
    AppNavbar,
  }
}
</script>

<style scoped>
.image-box img {
  max-width: 100%; 
  width: 100%;    
  height: auto;     
  display: block;   
  margin: 0 auto;   
}
.image-box {
  max-height: 250px;
  width: 23%;        
  margin: 1%;        
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;    
}


.image-title {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
