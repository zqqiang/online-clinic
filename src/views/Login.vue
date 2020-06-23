<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-one-third">
          <h1 class="title has-text-centered">Sign in</h1>
          <h2 class="subtitle has-text-centered">
            <router-link :to="{ name: 'register' }"
              >Need an account?</router-link
            >
          </h2>
        </div>
      </div>
      <div class="columns is-mobile is-centered">
        <div class="column is-one-third">
          <div v-if="errors" class="notification is-danger">
            <!-- <button class="delete"></button> -->
            {{ errors }}
          </div>
          <form @submit.prevent="onSubmit(email, password)">
            <div class="field">
              <div class="control has-icons-left">
                <input
                  class="input"
                  type="email"
                  placeholder="Email"
                  v-model="email"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button class="button is-primary">Sign in</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch(LOGIN, { email, password })
        .then(() => this.$router.push({ name: "home" }));
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
