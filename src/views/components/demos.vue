<template>
  <div>
    <p>Demos</p>
    <p><router-link to="/">[ Back to main page ]</router-link></p>
    <p><router-link to="/demoGreeting">Demo Greeting</router-link></p>
    <p><router-link to="/demo2">Demo2</router-link></p>
    <p><router-link to="/demoAjaxList">Demo Ajax List</router-link></p>
  </div>
</template>

<script>
    export default {
        name: 'Demos',
    }
</script>
