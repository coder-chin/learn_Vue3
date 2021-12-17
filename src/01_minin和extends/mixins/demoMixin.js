export default {
  data() {
    return {
      message: 'Hello Mixin'
    }
  },
  methods: {
    foo() {
      console.log('exe demomixin')
    }
  },
  created() {
    console.log('exe mixin created');
  }
}