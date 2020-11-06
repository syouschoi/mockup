<template>
  <component @switch="switchComponent" v-bind:is="currentComponent"></component>
</template>

<script>
const loadComponent = name => () => import(`@/components/${name}`);
export default {
  name: "Mockup",
  data: () => ({
    currentComponent: "Step1UserSetting"
  }),
  components: {
    Step1UserSetting: loadComponent("Step1UserSetting"),
    Step2InfoSetting: loadComponent("Step2InfoSetting")
  },
  methods: {
    switchComponent(compName) {
      this.currentComponent = compName;
    }
  }
};
</script>

<style></style>
