const app = Vue.createApp({
    data() {
        return {
            userName: 'Vue'
            , userAge: 10
            , randomNumber: Math.random()
            , imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
        }
    },
    methods: {
        calculateAge(){
            return this.userAge + 5;
        }
    },
});

app.mount('#assignment');