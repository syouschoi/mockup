<template>
  <div class="step1">
    <h2>Step1 주소 선택하기 화면 ^^</h2>
    <form>
      <div class="item">
        <label for="userName">이름 </label>
        <input type="text" maxlength="20" id="userName" v-model="userName" />
      </div>
      <div class="item">
        <label for="userAddr">주소 </label>
        <input type="text" maxlength="60" id="userAddr" v-model="userAddr" />
      </div>
      <div class="item button">
        <button type="button" @click="next">다음</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Step1UserSetting",
  data: () => ({}),
  computed: {
    userName: {
      get() {
        return this.$store.state.info.userName;
      },
      set(val) {
        this.SET_INFO({ userName: val });
      }
    },
    userAddr: {
      get() {
        return this.$store.state.info.userAddr;
      },
      set(val) {
        this.SET_INFO({ userAddr: val });
      }
    }
  },
  methods: {
    ...mapActions(["SET_INFO"]),
    next() {
      this.$emit("switch", "Step2InfoSetting");
    }
  }
};
</script>

<style>
.step1 {
  min-height: 300px;
  background-color: burlywood;
}
.item {
  padding: 5px 0;
}
.button {
  padding-top: 50px;
}
</style>
