/* eslint-disable */

<template>
  <div>
    <div id = "app">
      <table class = "table">
        <thead>
          <tr>
            <td><strong>Original No</strong></td>
            <td><strong>Period</strong></td>
            <td><strong>Pass/Non-pass</strong></td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(task, k) in tasks" :key="k">
            <td>
              <input type="text" v-model="task.original_no">
            </td>

            <td>
              <input type="text" v-model="task.period">
            </td>

            <td>
              <input type = "text" v-model="task.pass">
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  app: new Vue({
    el: '#app',
    data: {
      tasks: [{
        original_no: '',
        period: '',
        pass: ''
      }]
    }
  })
}
</script>

<Style>

</Style>
