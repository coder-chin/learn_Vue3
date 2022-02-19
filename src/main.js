import { createApp } from 'vue'
import "tailwindcss/tailwind.css";
import registerDirectives from './07_自定义指令/directives'
import App from './07_自定义指令/App'

const app = createApp(App)
registerDirectives(app)
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
