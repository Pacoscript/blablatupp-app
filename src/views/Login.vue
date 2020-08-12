<template>
  <div class="login">
    <TopBar />
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    TopBar,
  },
}
</script>
