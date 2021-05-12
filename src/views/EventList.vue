<template>
    <h1>Evet List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
</template>
<script>
import EventCard from '@/components/EventCard.vue';
import axios from 'axios';
export default {
    components:{
        EventCard
    },

    data() {
        return{
            events: []
        }

    },

    created() {
        axios
        .get('http://127.0.0.1:3000/events/')
        .then(response => {
            this.events = response.data
        })
        .catch(error => {
            console.log('There was an error(s)'+ error.response); 
        })
    }
}
</script>