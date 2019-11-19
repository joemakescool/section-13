import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowerCase', value => value.toLowerCase());

Vue.mixin({
    created() {
        // eslint-disable-next-line no-console
        console.log('global mixin created!')
    }
});

Vue.filter('lengthOfWord', (value) => {
        let length = value.length;
        return `${value} (${length})`
    }
);


Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
