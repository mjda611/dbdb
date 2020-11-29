<template>
  <div>
    <div class = "read-file">
      <h1>Your file to grade</h1>
      <b-button variant="primary" @click="buttonClick">Open</b-button>
    </div>

    <div class = "give-pass-or-nonpass">
      <div class="radio-select">
        <h1>Grading</h1>
          <label>Pass</label>
          <input type = "radio" name = "Pass" value = "pass" v-model = "pnp">
          <label>Non-pass</label>
          <input type = "radio" name = "Non-pass" value = "non-pass" v-model = "pnp"><br>
        </div>
        <div>Pass/Non-pass: <strong>{{ pnp }}</strong></div>
    </div>

    <div class = "give-numeric-score">
        <b-form-select v-model="number" class = "number-select">
          <b-form-select-option :value="null">Please select an option</b-form-select-option>
          <b-form-select-option value="1">1</b-form-select-option>
          <b-form-select-option value="2">2</b-form-select-option>
          <b-form-select-option value="3">3</b-form-select-option>
          <b-form-select-option value="4">4</b-form-select-option>
          <b-form-select-option value="5">5</b-form-select-option>
          <b-form-select-option value="6">6</b-form-select-option>
          <b-form-select-option value="7">7</b-form-select-option>
          <b-form-select-option value="8">8</b-form-select-option>
          <b-form-select-option value="9">9</b-form-select-option>
          <b-form-select-option value="10">10</b-form-select-option>
        </b-form-select>
      <div>Numeric-score: <strong>{{ number }}</strong></div>
    </div>

    <div class = "submission">
      <b-button variant="primary" @click="scoreSubmit">Submit</b-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Grade',
  data () {
    return {
      pnp: '',
      number: ''
    }
  },
  methods: {
    scoreSubmit () {
      const formData = new FormData()
      formData.append('pnp', this.pnp)
      formData.append('number', this.number)

      for (let key of formData.entries()) {
        console.log('${key}')
      }

      this.$http.post('http://localhost:3000/', formData, {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      }). then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
  .read-file {
    margin-top: 100px;
    text-align: center;
    margin-bottom: 100px;
  }

  .give-pass-or-nonpass {
    margin-top: 100px;
    text-align: center;
    margin-bottom: 10px;
  }

  .give-numeric-score {
    margin-top: 10px;
    text-align: center;
    margin-bottom: 100px;
  }

  .submission {
    margin-top: 100px;
    text-align: center;
    margin-bottom: 100px;
  }

</style>
