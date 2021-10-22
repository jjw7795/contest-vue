<template>
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
</template>

<style lang="scss" scoped>
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
</style>
