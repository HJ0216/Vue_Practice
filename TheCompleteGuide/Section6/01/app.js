const app = Vue.createApp({
    data(){
        return{
            friends: [
                {
                    id: '1'
                    , name: 'hello'
                    , phone: '010-1111-2222'
                    , email: 'hello@email.com'
                }
                , {
                    id: '2'
                    , name: 'vue'
                    , phone: '010-1111-3333'
                    , email: 'vue@email.com'
                }
            ]
            , detailsAreVisible: false
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.component('friend-contact',{
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">
            {{detailsAreVisible ? 'Hide' : 'Show'}} Details
        </button>
        <ul v-show="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `
    , data(){
        return {
            friend: {
                id: '1'
                , name: 'hello'
                , phone: '010-1111-2222'
                , email: 'hello@email.com'
            }
            , detailsAreVisible: false
        };
    }
    , methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');