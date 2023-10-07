<template>
  <div class="text">
    <h1>{{ title }}</h1>
    <a :href="source"> Haz click para ir al foro</a><br>
    <img v-if="imageUrl" :src="imageUrl" alt="Noticia" />
    <p>{{ resume }}</p>
    <div class="news-content">
      <div v-html="newsBody"></div>
    </div>
    <h1>{{ fechabuena }}</h1>
    <div class="imageslindas" v-for="item in images" :key="item._id">
        <img v-if="images" :src="item"/>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "New",
  data() {
    return {
      title: "",
      imageUrl: "",
      newsBody: "",
      source: "",
      createdAt: "",
      fechabuena: "",
      images: [],
      imagesmala: "",
      resume: ""
    };
  },
  async mounted() {
    const newsId = this.$route.params.newsId;
    try {
      const response = await axios.get(
        `http://3.138.52.135:3000/news/${newsId}`
      );
      if (response.data.news) {
        this.title = response.data.news.title;
        this.imageUrl = response.data.news.imageUrl;
        this.source = response.data.news.source;
        this.newsBody = response.data.news.details.body;
        this.createdAt = response.data.news.createdAt;
        this.fechabuena = this.createdAt.split("T")[0];
        this.images = response.data.news.details.images;
        this.imagesmala = this.images.shift();
        this.resume = response.data.news.details.resume;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
};

</script>

<style scoped>
 .imageslindas{
    position: relative;
    display: inline-block;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
   
    
 }
 .text{
  position: relative;
  text-align: center;
 }
</style>
