<template>
  <label class="slider">
    <span>{{ label }}</span>
    <input
      :value="value"
      type="range"
      min="0"
      max="255"
      @input="$emit('input', $event.target.value)"
    />
    <input
      :value="value"
      type="number"
      min="0"
      max="255"
      @change="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    value: Number,
    label: String,
  },
});
</script>

<style scoped>
.slider {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

input[type="number"] {
  margin: 0;
  padding: 0;
  color: inherit;
  font: inherit;
  outline: none;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  border: solid 1px rgba(0, 0, 0, 0.5);
  background: #fff;
  border-radius: 4px;
}

input[type="number"]::-moz-focus-inner {
  border: 0;
  padding: 0;
}

input[type="range"] {
  margin: 0 10px;
}
</style>
