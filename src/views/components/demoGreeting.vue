<template>
  <div>
    <p>Greeting</p>
    <p v-if="hours < 12">Good morning!</p>
    <p v-if="hours >= 12 && hours < 18">Good afternoon!</p>
    <p v-if="hours >= 18">Good evening!</p>

    <button @click="showText = !showText">Click to toggle the visibility of the text below.</button>
    <p
      v-show="showText"
      class="showTextDemo"
    >This is shown or hidden.</p>

    <p><router-link to="/demos">Back</router-link></p>
  </div>
</template>

<script>
    export default {
        name: 'DemoGreeting',
        data: function() {
            return {
                hours: new Date().getHours(),
                showText: true,
            }
        }
    }
</script>

<style>
  .showTextDemo {
    /* v-show will NOT override this setting */
    /* display: none; */
  }
</style>