import dayjs from "dayjs"

export default function(app) {
  let formatString = 'YYYY-MM-DD HH:mm:ss'

  app.directive('format', {
    created(el, bindings) {
      if(bindings.value) {
        formatString = bindings.value
      }
    },
    mounted(el) {
      const textContext = el.innerText
      console.log(typeof textContext)
      let timeStamp = parseInt(textContext)
      if(textContext.length === 10) {
        timeStamp *= 1000
      }
      el.innerText = dayjs(timeStamp).format(formatString)
    }
  })
}