<template>
    <section id="check">
       <Header />
      <div class="inner check">
        <h2>접수확인</h2>
        
    

        <div class="check_info common">
     
          
          <table >
            <tr>
              <th> &#183 이름</th>
              <td><input type="text"></td>
            </tr>
            <tr>
               <th>&#183 휴대폰</th>
              <td><input type="text"></td>
            </tr>
            <tr>
               <th>&#183 비밀번호</th>
              <td>
                
                <input type="text"></td>
            </tr>
           
          </table>

          <div class="check_button">
            <button>확인</button>
            <button>취소</button>
          </div>

          <p> * 공모전 기간종료시에는 확인만 가능하며 수정할 수 없습니다 </p>
        
        </div>

    
      </div>
    </section>
</template>
<script>
import Header from "~/components/Header";
export default {
   components: {
    Header,
  },
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
#check {
}

.common {
  margin: auto;
  width: 80%;
}
.check {
  background-color: #fff;
  width:1200px;
  margin:auto
}

.check h2 {
  padding: 70px 0 50px 0;
  font-size: 70px;
  text-align:center;
  color:$primary;
  font-weight: bold;
}
.check h3 {
  font-size: 18px;
  font-weight: bold;
}



.check_info table {
  width: 100%;
  border-top: 1px solid #333;
  border-bottom: 1px solid #ddd;
}
.check_info table tr {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
.check_info table th {
  background-color: #eee;
  font-weight: bold;
  text-indent: 10px;
}


.check_info table input,
.check_info table button {
  height: 40px;
  width: 90%;
  border: 1px solid #ddd;
  
  outline: 0;
  margin-left: 50%;
  transform: translateX(-50%);
}

.check_info th {
  vertical-align: middle;
}
.check_button {
    width: 100%;
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid #888;
}

.check_button button {
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: rgb(200, 199, 199);
    color: #000;
    margin-right:5px
}
.check_button button:hover {
  background-color:$primary;
  color:#fff
}
.check_info p {
    padding: 20px;
}
</style>