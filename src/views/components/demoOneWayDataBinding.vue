<template>
  <div>
    <!-- <button type="button|submit|reset"> -->
    <!-- https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-bind-style.md -->

    <!-- Lint error: Unexpected 'v-bind' before ':'. [vue/v-bind-style] -->
    <button v-bind:type="buttonType">Button1</button>
    <button :type="buttonType">Button2</button>
    <button :disabled="isDisabled">Button3</button>
  </div>
</template>

<script>
export default {
  name: 'DemoOneWayDataBinding',
  data: function() {
    return {
      buttonType: 'submit',
      isDisabled: true,
    }
  }
}
</script>

<style>

</style>
 
