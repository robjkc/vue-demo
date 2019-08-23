<template>
  <div>
    <b-button @click="handleClick">Click Me!</b-button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Counter extends Vue {
  @Prop()
  counter!: number;

  mounted() {
    this.counter = 0;
  }

  handleClick() {
    this.counter += 1;
  }
}
</script>
