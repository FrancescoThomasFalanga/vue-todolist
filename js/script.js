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
    }
  },

  methods: {
    deleteTodo(todoIndex) {

        // elimina l'elemento dall'array all'indice che ti do io
        this.todos.splice(todoIndex, 1);

    },
},
}).mount('#app')