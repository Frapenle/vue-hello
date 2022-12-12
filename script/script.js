
const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Vue 3 is awesome',
            imgOne: 'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80'
        }
    }
}).mount('#app')