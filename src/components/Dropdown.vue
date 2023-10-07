<template>
    <div class="dropdown-container">
      <button @click="toggleDropdown" class="dropdown-button">
        ▼
      </button>
      <transition name="slide-fade">
        <div v-if="isOpen" class="dropdown-content">
          <router-link to="/events" class="dropdown-text color">Lista de Eventos</router-link>
          <router-link to="/hub" class="dropdown-text">Pagina Principal</router-link>
          <router-link to="/news" class="dropdown-text">Lista de Noticias</router-link>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
    .dropdown-button {
      background-color: rgba(0, 78, 224, 0.76); 
      color: white; 
      padding: 10px 15px; 
      border: none; 
      border-radius: 30px; 
      cursor: pointer; 
      font-size: 16px; 
      transition: background-color 0.3s; 
      position: absolute;
      top: 110px;
      right: 90%;
    }

    .dropdown-button:hover {
      background-color: rgba(0, 50, 143, 0.89); 
    }

  .dropdown-content {
    position: absolute;
    top: 150px;
    right: 85%;
    border-radius: 20px;
    height: 190px;
    width: 200px;
    background-color: rgba(0, 50, 143, 0.884);
    display: grid;
    grid-template-columns: repeat(1fr,4);
  }

  .dropdown-text{
    color: white;
    font-size: 18px;
    font-family: 'Arial', sans-serif; 
    font-weight: bold;
    padding: 10px;
    text-align: center;
  }
  
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-3%);
  }
  .slide-fade-enter-to,
  .slide-fade-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  