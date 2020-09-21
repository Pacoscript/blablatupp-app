<template>
  <b-modal
    id="modal-2"
    title="New workplace"
    hide-footer="true"
    v-model="modalShow"
  >
    <form class="assign-workplace-form">
      <div class="form-group">
        <label>Assign a workplace</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>
      <button
        v-on:click="assignWorkplace"
        type="submit"
        class="btn btn-primary"
      >
        Assign
      </button>
      <p class="errorMessage" v-show="error">{{ error }}</p>
    </form>
  </b-modal>
</template>

<script>
import logic from '../logic'
export default {
  name: 'AssingWorkplaceForm',
  data: () => {
    return {
      name: '',
      error: undefined,
      modalShow: false,
      workplaces: [],
      selected: null,
      options: []
    }
  },
  mounted: function() {
    try {
      logic.getWorkplaces().then(res => {
        this.options = res.map(workplace => {
            return {
                value: workplace._id,
                text: workplace.name
            }
        })
        this.workplaces = res
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    assignWorkplace: function() {
      try {
        logic
          .assignWorkplace(this.selected)
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

