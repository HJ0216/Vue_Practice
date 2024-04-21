const app = Vue.createApp({
  data() {
    return {
       enteredGoal: ''
       , goals: [] 
      };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredGoal);
    }
    , removeGoal(index){
      this.goals.splice(index, 1);
      // 배열 데이터 조작
    }
  },
});

app.mount('#user-goals');
