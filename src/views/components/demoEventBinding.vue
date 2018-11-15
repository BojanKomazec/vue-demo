<template>
  <div>
    <!-- <button v-on:click="counter1++">Click to increase counter1</button> -->
    <button @click="counter1++">Click to increase counter1</button>
    <p>You've clicked the button {{ counter1 }} times.</p>
    <button 
      id="button2" 
      @click="increaseCounter2">Click to increase counter2</button>
    <p>You've clicked the button {{ counter2 }} times.</p>
    <router-link to="/demos">Back</router-link>
  </div>
</template>

<script>
  export default {
    name: 'DemoEventBinding',
    data: function() {
      return {
        counter1: 0,
        counter2: 0,
      }
    },
    methods: {
      /**
       * Using function has a benefit of getting the event via its argument.
       * From the event we can detect which HTML element fired it (if the same event handler is bound to multiple 
       * elements).
       */
      increaseCounter2(e) {
        this.counter2++;
        console.log(`Id of the element which fired the click event = ${e.currentTarget.id}`);
      }
    }
  }
</script>