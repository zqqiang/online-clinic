<template>
  <section class="section">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="column is-one-third">
          <form>
            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  placeholder="Username"
                  v-model="currentUser.username"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div class="field">
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="email"
                  v-model="currentUser.email"
                  placeholder="Email"
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
                  v-model="currentUser.password"
                  placeholder="Password"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <a @click="updateSettings" class="button is-primary"
                  >Update Setting</a
                >
              </p>
              <p class="control">
                <a @click="cancel" class="button is-light">Cancel</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_USER } from "@/store/actions.type";

export default {
  name: "Settings",
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    updateSettings() {
      this.$store.dispatch(UPDATE_USER, this.currentUser).then(() => {
        this.$router.push({ name: "home" });
      });
    },
    cancel() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
