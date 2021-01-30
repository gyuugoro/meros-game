<template>
  <v-app>
    <transition mode="out-in" name="route">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.route-enter-active,
.route-leave-active {
  transition: opacity, 0.5s;
}

.route-enter,
.route-leave-to {
  opacity: 0;
}

.route-enter-to,
.route-leave {
  opacity: 1;
}
</style>