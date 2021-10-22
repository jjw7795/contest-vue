<template>
  <div class="notice">
    <TitleSearch title="Q&A" />
    <div class="count-box">
      <p>총 1건</p>
    </div>
    <Table />
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
.table-box {
  width: 80%;
  margin: auto;

  border-top: 3px solid grey;
}
.table-box tr {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}
.table-box thead tr {
  font-size: 18px;
  font-weight: bold;
}
.table-box tbody tr > td:nth-child(2) {
  text-align: left;
  text-indent: 30px;
  font-size: 18px;
  font-weight: bold;
}

.page-box {
  width: 80%;
  margin: auto;
}
.nav {
  padding: 50px 0 30px 0;
  transform: translateX(50%);
  margin-left: -25%;
}
.nav a {
  margin-right: 5px;
}
</style>
