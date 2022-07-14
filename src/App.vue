<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App!!!" />
    <div>
      <span>{{count}}</span>
      <button @click="handleClick">点击加1</button>
      <div>{{result}}</div>
    </div>
    <Test :pTest="'pTest123'"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
  },
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    result() {
      return `结果是：${this.count}`;
    },
  },
  watch: {
    count(val){
      if(val > 3) {
        alert(`已经超过${val}啦`);
      }
    }
  },
  methods: {
    handleClick() {
      this.count += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
