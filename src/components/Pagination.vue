<template>
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
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pages: Number,
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
.page-box {
  width: 100%;
  margin: auto;
}
.nav {
  display: flex;
  justify-content: center;
  padding: 50px 0 30px 0;
}
.nav a {
  margin-right: 5px;
}
</style>
