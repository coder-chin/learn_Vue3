import { createApp } from 'vue'
import App from './06_组件化开发/事件总线/App.vue'

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
