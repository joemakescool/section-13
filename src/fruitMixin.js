export const fruitMixin = {
    data: () => ({
        text: 'I am JOE :)!',
        fruits: ['mango', 'apple', 'lime', 'watermelon', 'peach'],
        filterText: ''
    }),

    computed: {
        filteredFruits() {
            return this.fruits.filter( (element)=> {
                return element.match(this.filterText);
            })
        }
    },

    created() {
        // eslint-disable-next-line no-console
        console.log('created in the mixin')
    }

};
