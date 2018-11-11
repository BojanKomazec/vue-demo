<template>
  <div>
    <p>Ajax - JSON - List of items</p>
    <ul class="js-items">
      <li v-if="!items.length">Sorry, there are no items.</li>
      <li
        v-for="item in items"
        :class="{ 'is-blue': item.includes('beer') }">{{ item }}</li>
    </ul>
    <router-link to="/demos">Back</router-link>
  </div>
</template>

<script>
    export default {
        name: 'DemoAjaxList',
        data: function() {
            return {
                items: []
            }
        },
        created() {
            console.log('DemoAjaxList created.');
            // can also use e.g. /ergast.com/api/f1/drivers.json (but then change data.map predicate)
            fetch('https://api.punkapi.com/v2/beers')
            .then((res) => res.json())
            .then((data) => {
                console.log(`JSON.stringify(data) = ${JSON.stringify(data)}`);
                // this.items = data.items;
                this.items = data.map(item => item.name + ' (beer)');
                console.log(`JSON.stringify(data.items) = ${JSON.stringify(data.items)}`);
            });
        }
    }
</script>

<style scoped>
.is-blue {
    color: blue;
}
</style>
