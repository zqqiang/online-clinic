<template>
  <div>Profile View</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["currentUser", "profile", "isAuthenticated"])
  }
};
</script>
