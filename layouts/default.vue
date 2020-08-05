<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
:root {
  font-family: Recursive, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s cubic-bezier(0.15, 1, 0.5, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
