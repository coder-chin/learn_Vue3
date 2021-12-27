import { createApp } from 'vue'
import App from './基础案例/App.vue'

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
