<template>
  <div>
    <p>Demos</p>
    <p><router-link to="/">[ Back to main page ]</router-link></p>
    <p><router-link to="/demoGreeting">Demo Greeting</router-link></p>
    <p><router-link to="/demo2">Demo2</router-link></p>
    <p><router-link to="/demoAjaxList">Demo Ajax List</router-link></p>
    <p><router-link to="/demoEventBinding">Demo Event Binding</router-link></p>
    <p><router-link to="/demoOneWayDataBinding">One Way Data Binding</router-link></p>
  </div>
</template>

<script>
    export default {
        name: 'Demos',
    }
</script>
