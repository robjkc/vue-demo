<template>
  <div>
    <ul>
      <li
        v-for="shoppingItem in shoppingItems"
        v-bind:key="shoppingItem.name"
      >{{ shoppingItem.name }} {{shoppingItem.price}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class GroceryList extends Vue {
  data() {
    return {
      messages: ["Milk", "Eggs", "Toast"],
      shoppingItems: [
        { name: "Milk", price: "$2.50" },
        { name: "Eggs", price: "$1.50" },
        { name: "Bread", price: "$3.00" }
      ]
    };
  }
}
</script>
