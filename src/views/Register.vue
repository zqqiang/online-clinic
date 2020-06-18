<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-one-third">
          <h1 class="title has-text-centered">Sign up</h1>
          <h2 class="subtitle has-text-centered">
            <router-link :to="{ name: 'login' }">Have an account?</router-link>
          </h2>
        </div>
      </div>
      <div class="columns is-mobile is-centered">
        <div class="column is-one-third">
          <!-- <ul v-if="errors" class="error-messages">
        <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
          </ul>-->
          <!-- <form @submit.prevent="onSubmit"> -->
          <div class="field">
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="Username"
                v-model="username"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
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
              <input class="input" type="password" placeholder="Password" />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <a class="button is-primary">Submit</a>
            </p>
            <p class="control">
              <a class="button is-light">Cancel</a>
            </p>
          </div>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(REGISTER, {
          email: this.email,
          password: this.password,
          username: this.username
        })
        .then(() => this.$router.push({ name: "home" }));
    }
  }
};
</script>
