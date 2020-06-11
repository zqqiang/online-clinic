<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >clinic</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>
