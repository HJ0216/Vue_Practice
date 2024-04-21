/*
data
* 컴포넌트의 상태를 저장하는 반응형 데이터 객체
* 여기에 저장된 데이터는 Vue 인스턴스가 관리하는 DOM에 바인딩되어, 데이터가 변경될 때 자동으로 화면이 갱신

watch
* Vue 인스턴스의 데이터 또는 계산된 속성을 관찰하고, 이 값이 변경될 때마다 특정한 동작을 실행하는 사용자 정의 반응 함수
* 복잡한 로직을 수행하거나, 비동기적인 연산(예: API 요청)을 실행할 때 유용

computed
* 데이터를 기반으로 하는 계산된 값을 정의하는 곳
* 계산된 속성은 종속 대상을 따라 저장(캐시)되며, 종속 대상이 변경될 때만 함수를 실행
  * method는 종속 대상이 아닌 경우에도 실행됨
* 간결하고 선언적인 방식으로 복잡한 계산 로직을 표현할 수 있으며, 성능상의 이점도 제공

methods
* 사용자의 입력이나 이벤트에 반응하여 실행되어야 하는 로직을 포함

*/

const app = Vue.createApp({
    data() {
      return {
        counter: 0
        , name: ''
        , lastName: ''
        , confirmedName: ''
      };
    },
    watch:{
        counter(value){
            if(value > 50){
                const that = this;
                setTimeout(function(){
                    that.counter = 0;
                }, 500);
            }
        }
        // setTimeout 함수 내부에서 this가 가리키는 것이 당신이 기대하는 Vue 컴포넌트의 인스턴스가 아닙니다. 
        // 대신에, setTimeout 함수가 실행될 때 this는 전역 객체(브라우저 환경에서는 window, Node.js 환경에서는 global)를 가리키게 됩니다. 
        // 따라서 this.counter = 0;라는 코드는 에러를 발생시키거나, 예상치 못한 결과를 초래할 수 있습니다.
        // 화살표 함수는 자신을 포함하고 있는 외부 스코프의 this를 그대로 사용
        // setTimeout(() => {this.counter = 0;}, 2000);
    },
    computed:{
        greetingName(){
            console.log("Is it called?");
            return this.name + " Hello";
        }
    },
    methods: {
        increase(num){
            this.counter = this.counter + num;
        }
        , decrease(num){
            this.counter = this.counter - num;
        }
        , setName(event, greeting){
            this.name = event.target.value + " " + greeting;
        }
        , submitForm(event){
            // event.preventDefault();
            alert('Submitted!');
        }
        , confirmInput(){
            this.confirmedName = this.name;
        }
        , resetInput(){
            this.name = '';
        }
        , getGreetingName(){
            console.log("Called");
            return this.name + " Hello";
        }
    },
  });
  
  app.mount('#events');
  