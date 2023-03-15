const { createApp } = Vue

createApp({
  data() {
    return {
      
        todos: [
            {
                text: "Subnautica",
                done: true,
            },
            {
                text: "Sekiro: Shadow Die Twice",
                done: true,
            },
            {
                text: "Wo-Long: Dinasty Fallen",
                done: false,
            },
            {
                text: "ELDEN RING",
                done: true,
            },
            {
                text: "Hogwarts Legacy",
                done: true,
            },
            {
                text: "Dying Light 2",
                done: false,
            },
        ],

        newTodo: {
            text: "",
            done: false,
        },
    }
  },

  methods: {
    deleteTodo(todoIndex) {

        // elimina l'elemento dall'array all'indice che ti do io
        this.todos.splice(todoIndex, 1);

    },

    addTodo() {

        if(this.newTodo.text == "" || this.newTodo.text == null) {

            console.log("Errore");

        } else {

            this.todos.push(this.newTodo);
            this.newTodo = {text: "", done: false};

        }

    },

    doneProperty(checkUncheck) {

        if (checkUncheck.done == true) {
            checkUncheck.done = false;
        } else {
            checkUncheck.done = true;
        };

    },
},
}).mount('#app')