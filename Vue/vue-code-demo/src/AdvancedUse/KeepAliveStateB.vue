<template>
  <p>state B</p>
</template>

<script>
export default {
  mounted() {
    console.log("B mounted");
  },
  destroyed() {
    console.log("B destroyed");
  },
};
</script>

<style></style>
