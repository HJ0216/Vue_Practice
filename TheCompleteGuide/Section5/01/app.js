const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;

      console.dir(this.$refs.userText);
    },
  },
  beforeCreate(){
    console.log('1. beforeCreate()');
  },
  created(){
    console.log('2. created()');
  },
  beforeMount() {
    console.log('3. beforeMount()');
  },
  mounted() {
    console.log('4. mounted()');
  },
  beforeUpdate() {
    console.log('5. beforeUpdate()');
  },
  updated(){
    console.log('6. updated()');
  },
  beforeUnmount() {
    console.log('7. beforeUnmount()');
  },
  unmounted() {
    console.log('8. unmounted()');
  },
});

app.mount('#app');
setTimeout(function(){
  app.unmount();
}, 5000);

const app2 = Vue.createApp({
  template: `
    <p>{{favoriteMeal}}</p>
  `, 
  data(){
    return{
      favoriteMeal: 'Pizza'
    }
  }
});

app2.mount('#app2');