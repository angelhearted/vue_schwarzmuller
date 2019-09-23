new Vue({
    el: '#exercise',
    data: {
        value: '',
    },
    methods: {
        showAlert: function() {
            window.alert('Alert! Alert! Someone has clicked the Alert button!');
        },
        storeKey: function(event) {
            this.value = event.target.value;
        },
    }
});