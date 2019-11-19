<template>
    <div id="app">
        <h1>Filters and Mixins!</h1>
        <p>{{ text | toUpperCase | toLowerCase }}</p>
        <hr>
        <button v-on:click="fruits.push('raspberries')">Add New Item</button>
        <label>
            <input v-model="filterText" type="text">
        </label>
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit.id">{{ fruit }}</li>
        </ul>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Filters & Mixins</h1>
                    <!-- Exercise 1) -->
                    <!-- Build a local Filter which reverses the Text it is applied on -->
                    <p>{{ name | toReverse }}</p>
                    <p> {{ 'I am awesome!' | toReverse }}</p>

                    <!-- Exercise 2 -->
                    <!-- Build a global Filter which counts the length of a word and it appends it -->
                    <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                    <p>{{ name | lengthOfWord }}</p>

                    <!-- Exercise 3 -->
                    <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                    <p>{{ toReverseComputed }}</p>

                    <!-- Exercise 4 -->
                    <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                    <p>{{ reversedMe }}</p>
                    <p> {{ lengthAware }}</p>
                </div>
            </div>
        </div>


    </div>
</template>

<script>

    import {fruitMixin} from "@/fruitMixin";
    import { hello } from './mixmein'

    export default {
        name: 'app',

        mixins: [fruitMixin, hello],
      created() {
        // eslint-disable-next-line no-console
          console.log('created from App.vue')
      },

        data: () => ({
            text: 'I am JOE :)!',
            name: 'Joe :)!',
            lecture: 'From the lecture',
            nextLectures: 'I have done it!'

        }),

        filters: {
            toUpperCase(value) {
                return value.toUpperCase();
            },

            toReverse(value) {
                let toReverse = Array.from(value);
                toReverse = toReverse.reverse();
                return toReverse.join("")

            },

        },

        computed: {
            reversedMe() {
                return this.lecture.split("").reverse().join("");
            },

            lengthAware() {
                return this.nextLectures + 'hi';
            }
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
