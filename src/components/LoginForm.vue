<template>
  <form class="login-form">
    <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input
        class="form-control"
        id="userNameInput"
        aria-describedby="emailHelp"
        v-model="username"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="passwordInput"
        v-model="password"
      />
    </div>
    <button v-on:click="submitLogin" type="submit" class="btn btn-primary">
      Submit
    </button>
    <p class="errorMessage" v-show="error">{{ error }}</p>
  </form>
</template>

<script>
import logic from '../logic'
export default {
  name: 'LoginForm',
  data: () => {
    return {
      username: '',
      password: '',
      error: undefined,
    }
  },
  methods: {
    submitLogin: function() {
      try {
        logic
          .login(this.username, this.password)
          .then(() => {
            this.$router.push({ path: 'home' })
          })
          .catch(error => {
            this.error = error.message
          })
      } catch (err) {
        this.error(err.message)
      }
    },
  },
}
</script>
