<template>
  <div>
    <h1>Welcome to Vue-demo!</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({})
export default class Home extends Vue {}
</script>
