<template>
   <div id="apply">
      <div class="inner apply">
        <h2>작품접수</h2>
        
        <div class="apply_agree common">
          <h3>개인정보 수집 &#183 이용안내</h3>
          <div class="apply_collect">
개인정보 보호법([제정 2011.3.2.] 법률 제10465호])에 따라 아래의
          개인정보 수집 및 활용 동의절차를 거치셔야 공모 접수가 가능합니다.<br />
          <br />
          <span> 1. 개인정보 수집ㆍ이용 목적</span><br />

          본 공모전을 운영하는 헌혈실천운동본부가 수집한 참가자의 개인정보는
          공모전 응모에 따른 본인 확인 및 개인식별, 질문 등에 대한 답변처리,
          개인별 공지사항 전달, 시상, 상금 지급, 작품 저작권 등록 등 참가자
          관리와 차기 공모전 개최 안내 / 뉴스레터 수신을 위해 개인정보수집 및
          이용됨을 아래와 같이 확인 부탁드립니다.
          <br />
          <br />
          <span> 2. 수집하는 개인정보 항목</span>
          <br />

          1) 필수항목 : 성명, 이메일, 연락처(휴대전화), 주소, 생년월일 등 기재
          내용

          <br />
          <br />
          <span> 3. 개인정보 수집 방법 </span>
          <br />
          1）공모전 홈페이지를 통한 참가등록 시 입력된 개인정보를 통하여 관련
          정보를 수집하고 있습니다.
          <br />
          <br />
          <span> 4. 개인정보 보유 및 이용기간</span> <br />

          개인 정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이
          파기합니다. * 보존사유 : 참가자 및 수상자 안내, 차기 공모 안내,
          뉴스레터 수신 * 보존기간 : 공모전 종료 후 1년 이내
          <br />
          <br />
          <span>5. 권리</span><br />

          본인은 개인정보 보호법에 의해 개인정보 수집 동의를 거부할 권리가
          있으며, 개인정보수집 동의 거부 시에는 공모 참가 신청과 작품 지원이
          불가능 합니다.
          </div>
          <div class="apply_check">
<input type="checkbox" v-model="checked" id="agree">
<label for="agree">동의함</label>
          </div>
          


        </div>

        <div class="apply_info common">
          <h3>개인정보</h3>
          
          <table >
            <tr>
              <th> &#183 이름</th>
              <td><input type="text"></td>
            </tr>
            <tr>
               <th>&#183 생년월일</th>
              <td><input type="text"></td>
            </tr>
            <tr>
               <th>&#183 휴대폰</th>
              <td>
                <select name="" id="">
                  <option value="선택">선택</option>
                    <option value="010">010</option>
                </select>
                <input type="text">
                <input type="text">
              </td>
            </tr>

            <tr class="address">
               <th rowspan="3" valign="middle">&#183 주소</th>
              <td ><input type="text" id="postcode" placeholder="우편번호">
                 <input @click="addressPost" type="button" value="우편번호 찾기"></td>
            </tr>
              <tr>
           
              <td ><input type="text" id="address" placeholder="주소"></td>
            </tr> 
            <tr>
              
              <td ><input type="text" id="detailAddress" placeholder="상세주소">
              <input type="text" id="extraAddress" placeholder="참고항목"></td>
            </tr>
           
           
            <tr>
               <th>&#183 이메일</th>
              <td><input type="text">@<input class="email02" type="text" :value="select">
              <select name="email" id="email" v-model="select">
                <option selected value="직접입력">직접입력</option>
                <option value="naver.com">naver.com</option>
                <option value="daum.com">daum.com</option>
                
              </select>
              </td>
            </tr>
            <tr>
               <th>&#183 비밀번호</th>
              <td><input type="text"></td>
            </tr>
            <tr>
               <th>&#183 비밀번호 확인</th>
              <td><input type="text"></td>
            </tr>

          </table>

        </div>

        <div class=" apply_upload common">
          <h3>작품 엎로드</h3>
          <table>
            <tr>
              <th> &#183작품파일</th>
              <td><input type="file"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
           checked:false,
           select:''
        }
    },
    methods:{
        addressPost(){
              new daum.Postcode({
            oncomplete: function(data) {
             
                
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("extraAddress").value = extraAddr;
                
                } else {
                    document.getElementById("extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('postcode').value = data.zonecode;
                document.getElementById("address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("detailAddress").focus();
            }
        }).open();
      }
    }
}
</script>

<style lang="scss" scoped>

@import "~/scss/main";
#apply {
}

.common {
  margin: auto;
  width: 80%;
}
.apply {
  background-color: #fff;
  width:1200px;
  margin: auto
}

.apply h2 {
   padding: 70px 0 50px 0;
  font-size: 70px;
  text-align: center;
  color: $primary;
  font-weight: bold;
}
.apply h3 {
  font-size: 18px;
  font-weight: bold;
}
.apply_agree {
}
.apply_agree h3 {
  padding-bottom: 20px;
}
.apply_collect {
  border: 1px solid #000;
  padding: 30px;
}
.apply_check {
  text-align: end;
  margin-top: 20px;
}

.apply_agree span {
  color: #111;
  font-weight: bold;
}
.apply_info {
}
.apply_info h3 {
  padding: 20px 0 20px 0;
}
.apply_info table {
  width: 100%;
  border-top: 1px solid #333;
  border-bottom: 1px solid #ddd;
}
.apply_info table tr {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
th {
      text-indent: 10px;
}
.apply_info table th {
  background-color: #eee;
  font-weight: bold;
  
}
.apply_info table input,
.apply_info table select,
.apply_info table button {
  height: 40px;
  border: 1px solid #ddd;
  margin-left: 5px;
  outline: 0;
  line-height: 40px;
   
}

.address th {
  vertical-align: middle;

}
.address input[type="button"] {
  cursor: pointer;
}

#address,
#detailAddress {
  width: 60%;
}
.apply_upload {
  padding-bottom: 10px;
}
.apply_upload h3 {
  padding: 20px 0 20px 0;
}
.apply_upload table {
  width: 100%;
  border-top: 1px solid #333;
  border-bottom: 1px solid #ddd;
}

.apply_upload table tr {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}
.apply_upload table th {
  background-color: #eee;
  font-weight: bold;
}
.apply_upload table input {
  height: 40px;
  border: 1px solid #ddd;
  margin-left: 5px;
  outline: 0;
}

</style>