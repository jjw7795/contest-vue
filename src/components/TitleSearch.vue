<template>
  <div>
    <h1>{{ title }}</h1>

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
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "" },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";
h1 {
  padding: 70px 0 50px 0;
  text-align: center;
  color: $primary;
  font-weight: bold;
  font-size: 70px;
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

.btn {
  width: 50px;
  height: 50px;
  background-color: $primary;
}
.material-icons {
  vertical-align: middle;
  font-weight: bold;
}
</style>
