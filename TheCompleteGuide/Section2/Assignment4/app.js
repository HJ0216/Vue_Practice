const app = Vue.createApp({
    data(){
        return{
            inputClass: ''
            , isShown: true
            , inputColor: ''
            , bgColor: ''
        };
    }
    , computed:{
        paragraphClass(){
            return{
                user1: this.inputClass === 'user1'
                , user2: this.inputClass === 'user2'
                , visible: this.isShown
                , hidden: !this.isShown
            }
        }
    }
    , methods: {
        changeShownStatus(){
            this.isShown = !this.isShown;
        }
        , changeBackgroundColor(){
            this.bgColor = this.inputColor;
        }
    }
});

app.mount('#assignment');