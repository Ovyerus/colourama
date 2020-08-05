<template>
  <main :style="{ background: bg }" @click.self="toggleVis">
    <transition name="fade">
      <aside v-if="state.showControls">
        <slider v-model="state.rgb.r" label="R" />
        <slider v-model="state.rgb.g" label="G" />
        <slider v-model="state.rgb.b" label="B" />
        <code>{{ bg }}</code>

        <p>Click the background to show or hide controls.</p>
      </aside>
    </transition>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const state = reactive({
      rgb: { r: 255, g: 0, b: 0 },
      showControls: true,
    });
    const bg = computed(() => {
      const { r, g, b } = state.rgb;

      return `rgb(${r}, ${g}, ${b})`;
    });

    const toggleVis = () => (state.showControls = !state.showControls);

    return { state, bg, toggleVis };
  },
});
</script>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  padding: 20px;
}

aside {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.75);
}

code {
  font: inherit;
  font-weight: 800;
  margin-bottom: 10px;
}

p {
  margin: 0;
  padding: 0;
}
</style>
