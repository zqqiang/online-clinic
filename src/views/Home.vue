<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">clinic</h1>
        <p>Online clinic demo.</p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
