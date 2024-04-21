const app = Vue.createApp({
    data(){
        return{
            enteredTask: ''
            , tasks: []
            , isListShow: true
        };
    },
    computed: {
        buttonCaption(){
            return this.isListShow ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.enteredTask);
        }
        , changeShowStatus(){
            this.isListShow = !this.isListShow;
        }
    },
});

app.mount('#assignment');

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