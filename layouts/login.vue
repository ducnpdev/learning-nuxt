<template>
  <div class="admin-layout">
    <nuxt />
  </div>
</template>

<script>
export default {
  middleware: "auth",
};
</script>

