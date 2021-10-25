<template>
  <div class="wrapper">
    <AdHeader />
    <AdList title="접수목록" />
  </div>
</template>

<script>
import AdHeader from "~/components/AdHeader";
import AdList from "~/components/AdList";
export default {
  components: {
    AdHeader,
    AdList,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  min-width: 1200px;
  overflow-x: auto;
}
</style>
