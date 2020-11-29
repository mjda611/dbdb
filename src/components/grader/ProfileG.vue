<template>
  <div>
    <b-table stacked :items="items"></b-table>
  </div>
</template>

<script>
export default {
  name: 'ProfileG',
  data () {
    return {
      items: [
        { ID: 'database',
          NAME: 'jane',
          BIRTH: '2000.7.11',
          PHONE: '010-1111-2222',
          ROLE: 'Grader'}
      ]
    }
  }
}
</script>
