<template>
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image container is-128x128">
          <img :src="profile.image" class="is-rounded" />
        </figure>
        <h1 class="title">{{ profile.username }}</h1>
        <h2 class="subtitle">{{ profile.bio }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE } from "@/store/actions.type";

export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch(FETCH_PROFILE, this.$route.params);
  },
  computed: {
    ...mapGetters(["currentUser", "profile", "isAuthenticated"])
  },
  watch: {
    $route(to) {
      this.$store.dispatch(FETCH_PROFILE, to.params);
    }
  }
};
</script>
