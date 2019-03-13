var card = new Vue({
  el: '#card',
  data: {
    checked: false,
    selected: [],
    chosenDino: '',
    single: '',
    message: '',
    dinos: ["Triceratops", "Velociraptor", "Tyrannosaurus"],
    periods: [
      { name: "Triassic", value: 1 },
      { name: "Jurassic", value: 2 },
      { name: "Cretaceous", value: 3 }
    ]
  },
  methods: {
    addDinos: function () {
      this.count += this.amount;
    }
  }
});