<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect 
      label="Select a category" 
      :options="categories" 
      v-model="event.category" 
      class="field"
      @blur="v$.event.category.$touch()"/>
      <template v-if="v$.event.category.$error">
        <p v-if="!v$.event.category.required.$invliad">Category is required.</p>
      </template>
    

      <h3>Name & describe your event</h3>
      <div class="field">
        <BaseInput 
        type="text" 
        placeholder="Title"
        label="Title" 
        v-model:value="event.title"
        @blur="v$.event.title.$touch()"
       />
        <template v-if="v$.event.title.$error">
          <p v-if="v$.event.title.required.$invalid">Title is required.</p>
        </template>  

      </div>
      <div class="field">
        <BaseInput type="text" placeholder="Description" label="Description" v-model:value="event.description"/>
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <BaseInput type="text" placeholder="Location" label="Location" v-model:value="event.location"/>
      </div>

      <h3>When is your event?</h3>

      <div class="field">
        <label>Date</label>
        <input type="date" v-model="event.date" placeholder="Select a date"/>
      </div>

      <div class="field">
        <BaseSelect label="Select a time" :options="times" v-model="event.time" class="field"/>
      </div>

      <!-- <input type="submit" class="button -fill-gradient" value="Submit"/> -->
      <BaseButton type="submit" buttonClass="-fill-gradient">Submit</BaseButton>
    </form>
  </div>
</template>
<script>
import NProgress from 'nprogress';
import { mapState } from 'vuex';
import BaseInput from '@/components/BaseInput.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
      const times = [];
      for (let i = 1; i <= 24; i++) {
          times.push(i + ":00");
      }
      return {
          times,
          event: this.createFreshEventObject()
      };
  },
  validations() {
    return {
      event: {
        category: {required},
        title: {required},
        description: {required},
        location: {required},
        date: {required},
        time: {required}

      }
    }
  },
  methods: {
      createEvent() {
          NProgress.start();
          this.$store.dispatch("event/createEvent", this.event).then(() => {
              this.$router.push({
                  name: "event-show",
                  params: { id: this.event.id }
              });
              this.event = this.createFreshEventObject();
          }).catch(() => {
              NProgress.done();
          });
      },
      createFreshEventObject() {
          const user = this.$store.state.user.user;
          const id = Math.floor(Math.random() * 10000000);
          return {
              id: id,
              user: this.$store.state.user,
              category: "",
              organizer: user,
              title: "",
              description: "",
              location: "",
              date: "",
              time: "",
              attendees: []
          };
      }
  },
  computed: {
      ...mapState(["categories"])
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseButton
}
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>