<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/Hub" class="nav-link">
        <img src="https://www.ufro.cl/index.php/normas-corporativas/30-logo-ufro-azul-horizontal/file" alt="Logo" />
      </router-link>
    </div>

    <div class="links">
      <router-link to="/events" class="nav-link">Eventos</router-link>
      <router-link to="/news" class="nav-link">Noticias</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style scoped>
.navbar {
  background-color: rgb(179, 179, 179);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo img {
  max-height: 100px;
}

.links{
  display: flex;
  justify-content: space-between;
}
.nav-link {
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>
