<template>
  <Header />
  <div class="notice">
    <TitleSearch title="Q&A" />
    <div class="count-box">
      <p>총 3건</p>
    </div>
    <Table primary="분류" />
    <Pagination :pages="pages" />
  </div>
</template>
<script>
import Header from "~/components/Header";
import TitleSearch from "~/components/TitleSearch";
import Table from "~/components/Table";
import Pagination from "~/components/Pagination";

export default {
  components: {
    TitleSearch,
    Table,
    Pagination,
    Header,
  },
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~/scss/main";
.notice {
  background-color: #fff;
  width: 1200px;
  margin: auto;
}

.count-box {
  padding: 50px 0 20px 0;
  width: 80%;
  margin: auto;
}
.count-box p {
  text-align: right;
}
</style>
