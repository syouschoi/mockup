<template>
  <div class="step2">
    <h2>Step2 기본 정보 입력화면 *^^*</h2>
    <form>
      <div class="item">
        <label for="userMoney">꿔간돈 </label>
        <input
          type="number"
          maxlength="20"
          id="userMoney"
          v-model="userMoney"
        />
      </div>
      <div class="item">
        <label for="userAnotherAddr">받아낼 주소 </label>
        <input
          type="text"
          maxlength="60"
          id="userAnotherAddr"
          v-model="userAnotherAddr"
        />
      </div>
      <div class="item button">
        <button type="button" @click="prev">이전</button>
        <button type="button" @click="complete">완료</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Step2InfoSetting",
  data: () => ({}),
  computed: {
    userMoney: {
      get() {
        return this.$store.state.info.userMoney;
      },
      set(val) {
        this.SET_INFO({ userMoney: val });
      }
    },
    userAnotherAddr: {
      get() {
        return this.$store.state.info.userAnotherAddr;
      },
      set(val) {
        this.SET_INFO({ userAnotherAddr: val });
      }
    }
  },
  methods: {
    ...mapActions(["SET_INFO"]),
    prev() {
      this.$emit("switch", "Step1UserSetting");
    },
    complete() {
      console.log("ㅊㅋㅊㅋ");
    }
  }
};
</script>

<style>
.step2 {
  min-height: 300px;
  background-color: chocolate;
}
.item {
  padding: 5px 0;
}
.button {
  padding-top: 50px;
}
</style>
