<template>
  <div class="notice">
    <h1>공지사항</h1>

    <div class="input-box">
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        class="form-control"
        @keyup.enter="apply"
      />
      <button class="btn" @click="apply">
        <span class="material-icons"> search </span>
      </button>
    </div>

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
export default {
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    isMatch(page) {
      if (page) {
        return false;
      } else {
      }
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
h1 {
  padding: 50px;
  text-align: center;
}
.input-box {
  display: flex;
  width: 50%;
  text-align: center;
  margin: auto;
}
.form-control {
  outline: none;
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
.btn {
  width: 50px;
  height: 50px;
  background-color: $primary;
}
.material-icons {
  vertical-align: middle;
}
.page-box {
  width: 80%;
  margin: auto;
}
.nav {
  padding: 50px 0 30px 0;
}
</style>
