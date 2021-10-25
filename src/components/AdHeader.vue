<template>
  <header class="header">
    <h1 class="logo">
      <a href="#">관리자 메뉴얼</a>
    </h1>
    <nav class="gnb">
      <ul>
        <li>
          <a href="#"><i class="xi-calendar-list"></i>접수 관리</a>
        </li>
        <li>
          <a href="#"><i class="xi-calendar-list"></i>공지 관리</a>
        </li>
        <li>
          <a href="#"><i class="xi-calendar-list"></i>QnA 관리</a>
        </li>
      </ul>
    </nav>

    <!-- <div class="header-util">
          <span class="admin">황병준님</span>
          <a class="logout-btn" href="#">로그아웃</a>
        </div> -->
  </header>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigations: [
        {
          name: "접수관리",
          href: "/admin",
        },
        {
          name: "공지사항 관리",
          href: "/admin/notice",
        },
        {
          name: "QnA 관리",
          href: "/admin/question",
        },
      ],
    };
  },

  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

/* layout */

/* header */
.header {
  display: flex;
  height: 90px;
  border-bottom: 1px solid #ddd;
  background: #30baa1;
  border-bottom: 1px solid #30baa1;
  overflow: hidden;
}
.header .logo > a {
  display: block;
  width: 300px;
  height: 90px;
  font-size: 40px;
  line-height: 90px;
  color: #fff;
  font-weight: bold;
  margin-left: 30px;
  border-right: 1px solid #ddd;
  text-decoration: none;
}
.header .gnb > ul {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.header .gnb > ul li > a {
  position: relative;
  display: block;
  height: 90px;
  line-height: 90px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  padding: 0 20px;
  border-right: 1px solid #ddd;
  text-decoration: none;
}
.header .gnb > ul li > a:hover,
.header .gnb > ul li > a.active {
  color: #30baa1;
  background-color: #fff;
}
.header .gnb > ul li > a > i {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 32px;
  color: #fff;
}
.header .gnb > ul li > a:hover > i,
.header .gnb > ul li > a.active > i {
  color: #30baa1;
}

.header-util {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 30px;
}
.header-util .admin {
  color: #fff;
  font-weight: bold;
  margin-right: 20px;
}
.header-util .logout-btn {
  display: block;
  padding: 8px;
  background: #f9f9f9;
  font-size: 14px;
}

/*body*/
.body {
  display: flex;
  flex: 1;
}

/*aside*/
.aside {
  display: flex;
  flex: none;
  width: 250px;
  background: #fff;
  border-right: 1px solid #ddd;
}
.snb {
  width: 100%;
}
.snb ul.dep1 > li {
  border-bottom: 1px solid #ddd;
}

.snb ul.dep1 > li > a {
  position: relative;
  display: block;
  padding: 16px;
  font-size: 17px;
  font-weight: bold;
}
.snb ul.dep1 > li > a > i {
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 22px;
  transform: translateY(-50%); /*transition: 0.2s all;*/
}
.snb ul.dep2 {
  display: none;
}
.snb ul.dep1 > li.active > a > i {
  transform: translateY(-50%) rotate(90deg);
}
.snb ul.dep1 > li.active .dep2 {
  display: block;
}
.snb ul.dep2 > li {
  border-top: 1px solid #ddd;
}
.snb ul.dep2 > li > a {
  display: block;
  font-size: 16px;
  padding: 16px 24px;
}
.snb ul.dep2 > li:last-child {
  padding-bottom: 0;
}

/* main */
.main {
  flex: 1;
  padding: 40px 50px;
}

/* footer */
.footer {
  flex-basis: 45px;
  line-height: 45px;
  text-align: center;
  background: #f7f7f7;
  border-top: 1px solid #ddd;
}
</style>
