import { ref, onMounted, onUnmounted, reactive, toRefs } from "vue";

function useMousePosition() {
  // const x = ref(0);
  // const y = ref(0);
  // const updateMouse = (e) => {
  //   x.value = e.pageX;
  //   y.value = e.pageY;
  // };
  const data = reactive({
    x: 0,
    y: 0,
    updateMouse: (e) => {
      data.x = e.pageX;
      data.y = e.pageY;
    }
  });

  const refData = toRefs(data)
  onMounted(() => {
    document.addEventListener("click", data.updateMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", data.updateMouse);
  });
  return {
    // x, y
    ...refData
  }
}

export default useMousePosition