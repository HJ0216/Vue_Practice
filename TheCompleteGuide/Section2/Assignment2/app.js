const app = Vue.createApp({
    data() {
        return {
            output: ''
            , enteredOutput: ''
        }
    },
    methods: {
        showAlert(){
            alert('Hello World!');
        }
        , updateOutput(event){
            this.output = event.target.value;
        }
        , confirmOuptput(event){
            this.enteredOutput = event.target.value;
        }
    },
});

app.mount('#assignment');