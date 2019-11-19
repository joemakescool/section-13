export const hello = {
    computed: {

        toReverseComputed () {
            return this.name.split('').reverse().join('')
        }
    }
};
