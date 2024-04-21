const app = Vue.createApp({
    data(){
        return{
            number: 0
        }
    }
    , watch:{
        result(){
            setTimeout(() => {
                this.number = 0;
            }, 3000);
        }
    }
    , computed:{
        result(){
            if(this.number == 37){
                return this.number;
            }
            else if(this.number < 37){
                return 'Not there yet';
            }
            else{
                return 'Too much!';
            }
        }
    }
    , methods: {
        increaseNumber(num){
            this.number = this.number + num;
        }
    }
});

app.mount('#assignment');

/*
* computed
계산된 값을 얻어야 하고, 의존하는 데이터가 변경될 때만 재계산이 필요할 때
data, computed, methods 등의 속성 이름이 고유해야 합니다. 
이들 간에 이름 충돌이 발생하면 예상치 못한 동작이나 오류가 발생할 수 있습니다.

* watch
데이터의 변화를 감지하고 그에 따라 비동기 작업을 수행하거나, 복잡한 로직을 실행해야 할 때
해당 data, methods가 변경될 때, 후속 처리


두 기능의 주된 차이는 computed는 계산된 값을 캐싱하는 반면, 
watch는 데이터의 변화에 반응하여 임의의 코드를 실행한다는 것입니다.
*/