<template>
  <div class="home">
    <NavBar />
    {{ rations }}
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import logic from '../logic'

export default {
  name: 'Home',
  components: {
    NavBar,
  },
  data() {
    return {
      rations: [],
    }
  },
  methods: {},
  mounted: function() {
    try {
      logic.getMyRations().then(res => {
        this.rations = res
      })
    } catch (err) {
      console.log(err)
    }
  },
}
</script>
