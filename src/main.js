import { createApp } from 'vue'
import "tailwindcss/tailwind.css";
import App from "./06_组件化开发/provide和inject的使用v3/App.vue";

const app = createApp(App)
app.mount("#app");

// 全局混入
// app.mixin({
//   data() {
//     return {
//       message: "Hello Mixin",
//     };
//   },
//   methods: {
//     foo() {
//       console.log("exe demomixin");
//     },
//   },
//   created() {
//     console.log("exe mixin created");
//   },
// });
