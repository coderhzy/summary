<template>
  <p>state A</p>
</template>

<script>
export default {
  mounted() {
    console.log("A mounted");
  },
  destroyed() {
    console.log("A destroyed");
  },
};
</script>

<style></style>
