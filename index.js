// Declarative rendering

let app = new Vue({
  el: "#app1",
  data: {
    message: "Hello Vue!",
  },
});

let app2 = new Vue({
  el: "#app2",
  data: {
    message: "Vous avez affiché cette page le " + new Date().toLocaleString(),
  },
});

// Conditionnals and Loops

let app3 = new Vue({
  el: "#app3",
  data: {
    seen: true,
  },
});

let app4 = new Vue({
  el: "#app4",
  data: {
    todos: [
      { text: "Apprendre JS" },
      { text: "Apprendre Vue" },
      { text: "Créer une app cool" },
    ],
  },
});

// Handling user input

let app5 = new Vue({
  el: "#app5",
  data: {
    message: "Hello Vue.js !",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});

let app6 = new Vue({
  el: "#app6",
  data: {
    message: "",
  },
});

// Composing with components

//Definit un nouveau composant appelé todo-item
Vue.component("todo-item", {
  // Le composant todo-item accepte maintenant une
  // « prop » qui est comme un attribut personnalisé.
  // Cette prop est appelée todo.
  props: ["todo"],
  template: "<li>{{todo.text}}</li>",
});

// let App = new Vue({
//   el: "#app",
// });

let app7 = new Vue({
  el: "#app7",
  data: {
    groceryList: [
      { id: 0, text: "Légumes" },
      { id: 1, text: "Fromage" },
      { id: 2, text: "Pizza" },
    ],
  },
});
