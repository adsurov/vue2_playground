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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>
