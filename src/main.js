import { createApp } from 'vue'
import "tailwindcss/tailwind.css";
import App from "./tailwind/App.vue";

const app = createApp(App)

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

app.mount('#app')
