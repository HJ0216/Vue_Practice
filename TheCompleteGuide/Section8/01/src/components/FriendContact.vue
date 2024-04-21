<template>
  <li>
    <h2>{{ name }} {{friendFavorite === '1' ? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
// props: [
//   'name'
//   , 'phoneNumber'
//   , 'emailAddress'
//   , 'isFavorite'
// ],
  props: {
    name: {
      type: String
      , required: false
    }
    , phoneNumber: {
      type: String
      , required: false
    }
    , emailAddress: {
      type: String
      , required: false
    }
    , isFavorite: {
      type: String
      , required: false
      , default: '0'
      , validator: function(value){
        return value === '1' || value === '0';
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false
      , friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      }
      , friendFavorite: this.isFavorite
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
    , toggleFavorite(){
      if(this.friendFavorite === '1'){
        this.friendFavorite = '0';
      } else {
        this.friendFavorite = '1';
      }
    }
  }
};
</script>