<template>
  <div>
    <!-- <button type="button|submit|reset"> -->
    <!-- https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-bind-style.md -->

    <!-- One-way Data Binding demo -->

    <!-- Lint error: Unexpected 'v-bind' before ':'. [vue/v-bind-style] -->
    <button v-bind:type="buttonType">Button1</button>
    <button :type="buttonType">Button2</button>
    <button :disabled="isDisabled">Button3</button>

    <!-- Reactivity demo-->

    <p>{{ seconds }} seconds have elapsed since you opened the page.</p>
    <p :class="reactivityDemo1Class">Background color changes every second</p>

    <!-- Two-way Data Binding Demo -->

    <!-- input tag's value attribute contains its text value -->
    <input
      :value="inputText1"
      type="text">
    <p>inputText1: {{ inputText1 }}</p>
    <input
      v-model="inputText2"
      type="text">
    <p>inputText2: {{ inputText2 }}</p>

    <p><router-link to="/demos">Back</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'DemoOneWayDataBinding',
  data: function() {
    return {
      buttonType: 'submit',
      isDisabled: true,
      seconds: 0,
      reactivityDemo1Class: 'bg-white',
      inputText1: 'initial value',
      inputText2: 'initial value'
    }
  },
  // runs when the app is initiated.
  created() {
    setInterval(() => {
      this.seconds++;
      if (this.reactivityDemo1Class === 'bg-white') {
        this.reactivityDemo1Class = 'bg-yellow';
      } else {
        this.reactivityDemo1Class = 'bg-white';
      }
    }, 1000);
  }
}
</script>

<style scoped>
  p.bg-white {
    background-color: white;
  }
  p.bg-yellow {
    background-color: yellow;
  }
</style>
 
