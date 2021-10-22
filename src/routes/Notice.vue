<template>
  <div class="notice">
    <TitleSearch title="공지사항" />
    <div class="count-box">
      <p>총 1건 {{ h }}</p>
    </div>

    <Table primary="번호" />
    <Pagination :pages="pages" />
  </div>
</template>

<script>
import TitleSearch from "~/components/TitleSearch";
import Table from "~/components/Table";
import Pagination from "~/components/Pagination";
import axios from "axios";

export default {
  components: {
    TitleSearch,
    Table,
    Pagination,
  },
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
      h: "",
      member: {
        id: "1",
        name: "jinwoo",
      },
    };
  },
  mounted() {
    axios.get("http://localhost:8090/aaa").then((res) => {
      console.log(res.data);
      this.h = res.data;
    });
    axios
      .post("http://localhost:8090/post", JSON.stringify(this.member))
      .then((res) => {
        console.log(res.data);
      });
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
