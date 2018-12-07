<template>
  <div class="child1">
    <p>This is Child 1</p>
    <router-link to="/demoChild1/demoChild2"><h4>Demo Child 2</h4></router-link>
    <router-view/>
    <p><router-link to="/">Hide Child 1</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'DemoChild1'
}
</script>

<style scoped>
  .child1 {
    background-color: beige;
    width: 80%;
    margin: 0 auto;
  }
</style>
