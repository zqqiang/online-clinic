<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{ name: 'home' }">
          <span class="icon is-large has-text-info">
            <i class="fas fa-2x fa-home"></i>
          </span>
        </router-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" exact :to="{ name: 'home' }">
            <strong>Home</strong>
          </router-link>
        </div>
        <div class="navbar-end">
          <div v-if="!isAuthenticated" class="navbar-item">
            <div class="buttons">
              <router-link
                class="button is-primary"
                exact
                :to="{ name: 'login' }"
                >Sign in</router-link
              >
              <router-link
                class="button is-light"
                exact
                :to="{ name: 'register' }"
                >Sign up</router-link
              >
            </div>
          </div>
          <div v-if="isAuthenticated" class="navbar-item">
            {{ currentUser.username }}
          </div>
          <a v-if="isAuthenticated" class="navbar-item" @click="logout">
            <span class="icon">
              <i class="fas fa-2x fa-sign-out-alt"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        // this.$router.push({ name: "home" });
      });
    }
  }
};
</script>
