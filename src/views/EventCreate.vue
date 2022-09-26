<template>
  <div>
    <h1>Created an Event, {{userName}}</h1>
    <p>This event was created by {{user.id}}</p>
    <!-- <p>This are {{cartLength}} categories.</p> --->
    <ul>
      <li v-for="cat in categories" :key="cat">{{cat}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['user','categories'])
}
</script>