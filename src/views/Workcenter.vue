<template>
  <div class="home">
    <NavBar />
    <div class="workCenterInfo mx-auto">
      <b-card
        title="My workplace"
        img-src="https://www.savills-aguirrenewman.es/_images/oficinas-01.jpg"
        img-alt="Image"
        img-top
        class="mb-2"
      >
        <b-row
          >Name:
          {{ workplaceInfo.name }}</b-row
        >
        <b-row
          >Address:
         {{ workplaceInfo.address }}</b-row
        >
        <b-row
          >City:
          {{ workplaceInfo.city }}</b-row
        >
        <b-button v-b-modal.modal-1>Create workplace</b-button>
        <b-button v-b-modal.modal-2>Assign workplace</b-button>
      </b-card>
    </div>
    <WorkplaceForm />
    <AssignWorkplaceForm />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import logic from '../logic'
import WorkplaceForm from '@/components/NewWorkplaceForm.vue'
import AssignWorkplaceForm from '@/components/AssignWorkplaceForm.vue'

export default {
  name: 'Workcenter',
  components: {
    NavBar,
    WorkplaceForm,
    AssignWorkplaceForm,
  },
  data() {
    return {
      rations: [],
      workplaceInfo: [],
      userInfo: [],
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
        return res
      })
      .then(res => {
        return logic.getWorkplaceInfo(res.workCenter._id).then(res => res)
      }).then(res =>{
       this.workplaceInfo = res
      })
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style>
.workCenterInfo {
  margin: auto;
  margin-top: 30px;
  width: 350px;
}
</style>
