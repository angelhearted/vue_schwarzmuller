new Vue({
  el: '#exercise',
  data: {
    effectClass: '',
    delay: 500,
    class3: '',
    class4A: '',
    class4B: '',
    width5: '',
    style6: { width: '0%' },
    interval: '',
  },
  computed: {
    class4flag: function() {
      return this.class4B.toLowerCase() === 'true'
    }
  },
  methods: {
    startEffect: function() {
      setInterval(() => this.effectClass = this.effectClass === 'highlight' ? 'shrink' : 'highlight', this.delay);
    },
    startProgress: function() {
      const vm = this;
      this.interval = setInterval(() => {
        vm.style6.width = parseInt(vm.style6.width) + 10 + '%';
        if (vm.style6.width === '100%') {
          clearInterval(vm.interval);
        }
      }, vm.delay);
    }
  }
});
