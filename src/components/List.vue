<template>
    <div id="app">
        <h1>Filters and Mixins!</h1>
        <hr>
        <label>
            <input v-model="filterText" type="text">
        </label>
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit.id">{{ fruit }}</li>
        </ul>

    </div>
</template>

<script>
    import { fruitMixin } from '@/fruitMixin'

    export default {
        mixins: [fruitMixin],
        created() {
            // eslint-disable-next-line no-console
            console.log('list created hook')
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

