<template>
  <div class="notice">
   
   <TitleSearch title="공지사항"/>
    <div class="count-box">
      <p>총 1건</p>
    </div>
    <div class="table-box">
      <table>
        <colgroup>
          <col style="width: 100px" />
          <col style="width: 600px" />
          <col style="width: 200px" />
          <col style="width: 100px" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>ㅎㅎ</td>
            <td>2021</td>
            <td>5</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="page-box">
      <ul class="nav nav-pills">
        <li v-for="page in pages" :key="page" class="nav-item">
          <a
            @click="p"
            href="#"
            active-class="active"
            :class="{ active: isMatch(page) }"
            class="nav-link"
            >{{ page }}</a
          >
        </li>
        <!-- <li>
          <a href="#" class="nav-link">2</a>
        </li>
        <li>
          <a href="#" class="nav-link">3</a>
        </li>
        <li>
          <a href="#" class="nav-link">4</a>
        </li>
        <li>
          <a href="#" class="nav-link">5</a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import TitleSearch from "~/components/TitleSearch";


export default {
  components:{
    TitleSearch
  },
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    isMatch(page, e) {
      if (page) {
        return true;
      } else {
      }
    },
    p(e) {
      e.preventDefault();
      console.log(e.target.textContent);
    },
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
