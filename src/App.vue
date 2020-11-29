<template>
  <div>

    <HeaderS />
    <router-view/>
  </div>
</template>

<script>
import HeaderS from '@/components/submitter/HeaderS'

export default {
  name: 'App',

  components: {
    HeaderS
  }
}
</script>

<style>

</style>
