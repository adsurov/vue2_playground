<template>
  <div class="home">
     <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="Select time"
    >
    </el-time-select>
    <h1>Current Weather in Paris</h1>
    <div v-if="currentWeather">
      <p>Temperature: {{ currentWeather.current.temp_c }}°C</p>
      <p>Condition: {{ currentWeather.current.condition.text }}</p>
      <img :src="currentWeather.current.condition.icon" :alt="currentWeather.current.condition.text">
    </div>
    <div v-else>
      Loading weather data...
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { mapActions, mapGetters, mapState } from 'vuex';

export default Vue.extend({
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      value: "",
    };
  },
  mounted() {
    this.getCurrentWeather('Paris');
  },
  computed: {
    ...mapState(['currentWeather']),
    ...mapGetters(['isLoading', 'hasError', 'currentWeather']),
  },
  methods: {
    ...mapActions(['getCurrentWeather']),
  }
});

</script>
