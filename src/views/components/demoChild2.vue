<template>
  <div class="child2">
    <p>This is Child 2</p>
    <p><router-link to="/demoChild1">Hide Child 2</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'DemoChild2'
}
</script>

<style scoped>
  .child2 {
    background-color:cadetblue;
    width: 80%;
    margin: 0 auto;
  }
</style>
