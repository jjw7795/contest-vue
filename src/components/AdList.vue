<template>
  <!-- main(개별 컨턴츠 넣는곳) -->
  <main id="notice" class="main">
    <h1>{{ title }}</h1>

    <section class="search-form">
      <h1 style="display: none">강좌검색 폼</h1>
      <form action="">
        <fieldset>
          <select class="option" name="f">
            <option value="제목">제목</option>
            <option value="작성자">작성자</option>
          </select>

          <input type="text" name="q" value="" />
          <input type="submit" value="검색" />

          <!-- <datalist id="name">

                <option value="번호"></option>
                <option value="작성자"></option>
                <option value="제목"></option>
                
            </datalist> -->
        </fieldset>
      </form>
    </section>

    <table class="notice-list">
      <colgroup>
        <col style="width: 50px" />
        <col style="width: 100px" />
        <col style="width: 200px" />
        <col style="width: auto" />
        <col style="width: 100px" />
        <col style="width: 200px" />
        <col style="width: 200px" />
        <col style="width: 120px" />
      </colgroup>

      <thead>
        <tr>
          <th><input class="overall-checkbox" type="checkbox" /></th>
          <th>번호</th>
          <th>작성자</th>
          <th>글 제목</th>
          <th>조회수</th>
          <th>이메일</th>
          <th>작성일</th>
          <th>게시물관리</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" /></td>
          <td></td>
          <td></td>
          <td>.</td>
          <td></td>
          <td></td>

          <td></td>
          <td>
            <a class="link-button" href="detail.html"></a>
            <input class="trigger-button" type="button" value="글수정" />
            <input type="button" class="del-button" value="글삭제" />
          </td>
        </tr>

        <tr>
          <td><input type="checkbox" /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <a class="link-button" href="detail.html"></a>
            <input class="trigger-button" type="button" value="글수정" />

            <input type="button" class="del-button" value="글삭제" />
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <input type="button" value="글수정" />
            <input type="button" class="del-button" value="글삭제" />
          </td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <input type="button" value="글수정" />
            <input type="button" class="del-button" value="글삭제" />
          </td>
        </tr>

        <tr class="del-all">
          <td colspan="8">
            <input type="submit" class="del-button-all" value="일괄삭제" />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="write-box">
      <a href="../notice/reg.html">글쓰기</a>
    </div>

    <div class="number-list">
      <ul>
        <!-- <span class="number" onclick="alert('이전 없습니다')">
                <i class="xi-long-arrow-left"></i
              ></span> -->
        <span class="number prev"> <i class="xi-angle-left"></i></span>

        <li><a href="" class="number number2">1</a></li>
        <li><a href="" class="number">2</a></li>
        <li><a href="" class="number">3</a></li>
        <li><a href="" class="number">4</a></li>
        <li><a href="" class="number">5</a></li>

        <span class="next"> <i class="xi-angle-right"></i></span>
      </ul>
    </div>
  </main>
  <!-- //main(개별 컨턴츠 넣는곳) -->
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  padding: 40px 50px;
  background-color: #fff;
}
.main h1 {
  font-size: 30px;
  --border-bottom: 10px solid #30baa1;
  display: inline-block;
  margin: 20px 0;
  color: #30baa1;
  font-weight: bold;
}
table {
  width: 100%;
  border-top: 2px solid #30baa1;
  border-collapse: collapse;
}

table td,
table th {
  border: 1px solid #bbb;
  text-align: center;
  font-weight: bold;
}
table td:first-child,
table th:first-child {
  background: #f4fbfa;
  vertical-align: middle;
}

table thead tr {
  height: 70px;
  line-height: 70px;
}

table tr td > input {
  margin: 2px;
  width: 100px;
}

table tr td:nth-child(4) {
  text-align: left;
  text-indent: 10px;
}

table .del-all > td {
  text-align: left;
  background: #30baa1;
  position: sticky;
}

table .del-all input {
  cursor: pointer;
}

.write-box {
  padding: 30px 10px;
  text-align: right;
}

.write-box a {
  display: inline-block;

  width: 90px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  color: #fff;
  background: #30baa1;
  font-size: 20px;
  font-weight: bold;

  transition: color 2s, background-color 2s, border-radius 2s;
}
.write-box a:hover {
  color: #30baa1;
  border-radius: 8px;
  background: #fff;
  border-bottom: 3px solid #30baa1;
  --transform: rotate(360deg);
}
.number-list {
  text-align: center;
}

.number-list li {
  display: inline-block;
}
.number-list .number {
  font-size: 20px;
  font-weight: bold;
  color: #30baa1;
  border: 1px solid #30baa1;
  padding: 5px;
  text-decoration: none;
}

.number-list .number2 {
  border: 1px solid #fff;
  color: #fff;
  background: #30baa1;
}

.number-list .prev,
.number-list .next {
  cursor: pointer;
}

.search-form {
  margin: 0 0 20px 0;
  text-align: right;
}
.search-form input {
  padding: 5px 10px;
  outline: none;
  height: 40px;
  font-size: 17px;
  vertical-align: middle;
}
.search-form .option {
  width: 100px;
  height: 40px;
  outline: none;
  vertical-align: middle;
  text-indent: 10px;
  font-size: 16px;
  margin-right: 5px;
}
.search-form input[type="text"] {
  width: 300px;
  margin-right: 5px;
}
.search-form input[type="submit"] {
  background: #30baa1;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.notice-list > tbody input[type="button"] {
  cursor: pointer;
}
</style>
