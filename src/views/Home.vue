<template>
  <div class="home">
    <NavBar />
    <div class="userInfo">
      <b-container>
        <b-row>
          <b-col v-if="userInfo !== undefined">
            <b-avatar size="6rem" variant="info"></b-avatar>

            <b-row>Name: {{ userInfo.name }}</b-row>
            <b-row
              >Work Center:
              {{
                userInfo.workCenter === null
                  ? 'Work Center no asignado'
                  : userInfo.workCenter
              }}</b-row
            >
            <b-row
              >Number of rations to sold: {{ userInfo.createdRations }}</b-row
            >
            <b-row>Number or rations sold: {{ userInfo.soldRations }}</b-row>
            <b-row>Number of rations buyed: {{ userInfo.buyedRations }}</b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
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
      userInfo: undefined,
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
    try {
      logic.getUserInfo().then(res => {
        this.userInfo = res
      })
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style>
.userInfo {
  border: 1px solid grey;
  width: 350px;
  margin: auto;
  margin-top: 30px;
}

.userInfo .container {
  margin: 10px;
}
</style>
