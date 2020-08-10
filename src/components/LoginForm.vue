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
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitLogin: function() {
      console.log(this.username, this.password)
    },
  },
}
</script>
