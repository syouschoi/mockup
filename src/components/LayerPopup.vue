<template>
  <div class="popup" :class="animationClass">
    <span>{{ message }}</span>
  </div>
</template>

<script>
import bus from "@/utils/bus";
// let popupTimer;
export default {
  data: () => ({
    open: false,
    message: ""
  }),
  computed: {
    animationClass() {
      return this.open ? "show" : null;
    }
  },
  methods: {
    showPopup(message) {
      this.message = message;
      this.open = true;
      // clearTimeout(popupTimer);
      // popupTimer = setTimeout(this.hidePopup, 2000);
    },
    hidePopup() {
      this.open = false;
    }
  },
  created() {
    bus.$on("show:popup", this.showPopup);
    bus.$on("hide:popup", this.hidePopup);
  },
  beforeDestroy() {
    bus.$off("show:popup", this.showPopup);
    bus.$off("hide:popup", this.hidePopup);
  }
};
</script>

<style scoped>
.popup {
  position: fixed;
  width: 400px;
  height: 56px;
  background-color: #22252e;
  border-radius: 2px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  color: white;
  bottom: -120px;
  margin-left: -200px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 750ms ease-out;
}
.popup.show {
  transform: translateY(-150px);
  transition: transform 500ms ease-in-out;
}
</style>
