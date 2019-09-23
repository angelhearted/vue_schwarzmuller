const done = 'done';

new Vue({
    el: '#exercise',
    data: {
        value: 0,
        result: '',
        delay: 5000
    },
    watch: {
        value: function(value) {
            if (value >= 37) {
                this.result = done;
            }
        },
        result: function(value) {
            if (value == done) {
                const vm = this;
                setTimeout(() => vm.result = '', vm.delay);
            }
        }
    }
});