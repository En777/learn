<template>
  <div>
    <input type="text">
    <VerifyButton :send="sendSms"></VerifyButton>
  </div>
</template>

<script>
import VerifyButton from '@/components/VerifyButton'

const delay = require('delay')

export default {
  components: {
    VerifyButton
  },
  methods: {
    sendSms () {
      // ajax
      return delay(500)
    }
  }
}
</script>

<style>
</style>
