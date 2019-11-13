<template>
  <div class="side-nav">
    <flow-header></flow-header>
    <flow-title></flow-title>
    <flow-basic></flow-basic>
  </div>
</template>

<script>
import FlowHeader from './components/Header'
import FlowTitle from './components/Title'
import FlowBasic from './components/Basic'
export default {
  components: {
    FlowHeader,
    FlowTitle,
    FlowBasic
  },
  name: 'flow-demo'
}
</script>

<style lang="scss" scoped>
  .side-nav{
    padding: 15px;
  }
</style>
