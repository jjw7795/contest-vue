<template>
  <div class="notice">
    <TitleSearch title="공지사항" />
    <div class="count-box">
      <p>총 1건</p>
    </div>

    <Table primary="번호" />
    <Pagination :pages="pages" />
  </div>
</template>

<script>
import TitleSearch from "~/components/TitleSearch";
import Table from "~/components/Table";
import Pagination from "~/components/Pagination";

export default {
  components: {
    TitleSearch,
    Table,
    Pagination,
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
