<template>
  <Header />
  <Visual />
  <Info />
</template>

<script>
import Header from "~/components/Header";

import Visual from "~/components/Visual";
import Info from "~/components/Info";

export default {
  components: {
    Visual,
    Info,
    Header,
  },
};
</script>
