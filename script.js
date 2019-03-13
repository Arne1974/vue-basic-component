var card = new Vue({
  el: '#card',
  data: {
    title: 'Dinosaurs',
    input: '',
    buttonText: 'Add Dinosaur',
    items: ["Velociraptor", "Triceratops", "Stegosaurus"]
  },
  computed: {
    buttonDisabled: function(){
      return this.input == "";
    }
  },
  watch: {
    input: _.debounce(function () {
      this.buttonText = this.input !== "" ? "Add " + this.input : "Add Dinosaur";
    }, 250)
  },
  methods: {
    addItem: function (e) {
      e.preventDefault();
      if (!this.input) return;

      this.items.push(this.input);
      this.input = '';
    }
  }
});