<template>
  <b-modal
    id="modal-1"
    title="New workplace"
    hide-footer="true"
    v-model="modalShow"
  >
    <form class="workplace-form">
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" id="name" v-model="name" />
      </div>
      <div class="form-group">
        <label>Address</label>
        <input class="form-control" id="address" v-model="address" />
      </div>
      <div class="form-group">
        <label>City</label>
        <input class="form-control" id="city" v-model="city" />
      </div>
      <button
        v-on:click="submitWorkplace"
        type="submit"
        class="btn btn-primary"
      >
        Create
      </button>
      <p class="errorMessage" v-show="error">{{ error }}</p>
    </form>
  </b-modal>
</template>

<script>
import logic from '../logic'
export default {
  name: 'WorkplaceForm',
  data: () => {
    return {
      name: '',
      address: '',
      city: '',
      error: undefined,
      modalShow: false,
    }
  },
  methods: {
    submitWorkplace: function() {
      try {
        logic
          .createWorkplace(this.name, this.address, this.city)
          .then(() => {
            this.$router.push({ path: 'workcenter' })
          })
          .then(() => (this.modalShow = false))
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
