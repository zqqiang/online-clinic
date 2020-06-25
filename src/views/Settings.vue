<template>
  <div>Settings View</div>
</template>

<script>
import { mapGetters } from "vuex";
// import { LOGOUT, UPDATE_USER } from "@/store/actions.type";

export default {
  name: "Settings",
  computed: {
    ...mapGetters(["currentUser"])
  }
};
</script>
