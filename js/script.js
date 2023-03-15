const { createApp } = Vue

createApp({
  data() {
    return {
      
        todos: [
            {
                text: "",
                done: true,
            },
            {
                text: "",
                done: true,
            },
            {
                text: "",
                done: true,
            },
            {
                text: "",
                done: true,
            },
            {
                text: "",
                done: true,
            },
            {
                text: "",
                done: true,
            },
        ],

    }
  }
}).mount('#app')