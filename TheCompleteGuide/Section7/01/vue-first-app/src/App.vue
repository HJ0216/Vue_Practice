<template>
<section>
  <h2>Friend List</h2>
  <ul>
    <friend-contact></friend-contact>
    <friend-contact></friend-contact>
  </ul>
</section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data(){
    return{
      friends: [
        {
          id: '1'
          , name: 'HJ'
          , phone: '010-2345-6789'
          , email: 'HJ@email.com'
        }
        , {
          id: '2'
          , name: 'KH'
          , phone: '010-9876-5432'
          , email: 'KH@email.com'
        }
      ]
    };
  }
};
</script>