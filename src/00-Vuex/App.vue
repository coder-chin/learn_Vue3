<template>
  <div>

  </div>
</template>

<script>
import InspireCloud from '@byteinspire/js-sdk'
export default {
  data() {
    return {
      name: 'qhy'
    }
  },
  setup () {
    const myServiceId = 'qc6gzw'
    // 创建轻服务实例
    const inspirecloud = new InspireCloud({
      serviceId: myServiceId
    });
    inspirecloud.run('sendMessageAPI', {
      phoneNumber: '18567718779'
    }).then(res => {
      console.log(res);
    });

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>