<template>
    <div>
        <p>Demo1</p>
        <p v-if="hours < 12">Good morning!</p>
        <p v-if="hours >= 12 && hours < 18">Good afternoon!</p>
        <p v-if="hours >= 18">Good evening!</p>
        <router-link to="/demos">Back</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Demo1',
        data: function() {
            return {
                hours: new Date().getHours(),
            }
        }
    }
</script>
