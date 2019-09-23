new Vue({
  el: '#app',
  data: {
    modifiers: {
      p1Attack: -8,
      p1SpecialAttack: -10,
      p1Heal: 14,
      p2Attack: -9
    },
    p1Health: 100,
    p2Health: 100,
    log: [],
    isGameOver: false,
  },
  methods: {
    startNewGame: function() {
      this.p1Health = 100;
      this.p2Health = 100;
      this.log = [];
      this.isGameOver = false;
    },
    round: function(action) {
      if (action === 'attack') {
        this.p1Attack();
      } else if (action === 'specialAttack') {
        this.p1SpecialAttack();
      } else {
        this.p1Heal();
      }
      this.p2Attack();
      
      if (this.p1Health <= 0 || this.p2Health <= 0) {
        this.endGame();
      }
    },
    p1Attack: function() {
      let healthDelta = Math.round(this.modifiers.p1Attack * Math.random());
      this.p2Health += healthDelta;
      this.log.unshift('PLAYER HITS MONSTER FOR ' + -healthDelta);
    },
    p1SpecialAttack: function() {
      let healthDelta = Math.round(this.modifiers.p1SpecialAttack * Math.random());
      this.p2Health += healthDelta;
      this.log.unshift('PLAYER HITS MONSTER FOR ' + -healthDelta);
    },
    p1Heal: function() {
      let healthDelta = Math.round(this.modifiers.p1Heal * Math.random());
      this.p1Health += healthDelta;
      if (this.p1Health > 100) {
        this.p1Health = 100;
      }
      this.log.unshift('PLAYER HEALS HIMSELF FOR ' + healthDelta);
    },
    p2Attack: function() {
      let healthDelta = Math.round(this.modifiers.p2Attack * Math.random());
      this.p1Health += healthDelta;
      this.log.unshift('MONSTER HITS PLAYER FOR ' + -healthDelta);
    },
    giveUp: function() {
      this.startNewGame();
    },
    endGame: function() {
      this.isGameOver = true;
      const doStartNew = confirm('Game is over. Start a new one?');
      if (doStartNew) {
        this.startNewGame();
      }
    }
  },
});