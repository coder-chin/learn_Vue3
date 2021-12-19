import { createApp } from 'vue'
import App from './02-compisitionAPI基础/03-自定义ref '

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