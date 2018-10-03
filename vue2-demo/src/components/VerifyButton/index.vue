<!--
  短信验证码组件
  不同状态下显示不同文本、自动倒计时等
  灵活性：外部可以控制ajax交互（组件主动检测是否发送成功）
-->

<template>
  <button
    class="VerifyButton"
    type="button"
    @click="handleClick"
    :disabled="isPending || disabled"
  >{{isPending ? pendingTextInner : text}}</button>
</template>

<script>
export default {
  name: 'VerifyButton',
  props: {
    text: {
      default: '发送验证码'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    send: {
      type: Function,
      required: true
    },
    timeout: {
      type: Number,
      default: 10
    },
    pendingText: {
      default: '重新发送'
    }
  },
  data () {
    return {
      isPending: false,
      pendingSeconds: 0
    }
  },
  computed: {
    pendingTextInner () {
      const time = this.timeout - this.pendingSeconds
      return this.pendingText + `(${time})`
    }
  },
  methods: {
    handleClick () {
      if (this.isPending) return

      this.isPending = true

      Promise.resolve()
        .then(() => {
          return this.send()
        })
        .catch((error) => {
          this.resetTimer()
          throw error
        })
        .then((res) => {
          this.pendingSeconds = 0
          this.startTimer()

          console.log('发送成功') // or Toast
        })
    },
    startTimer () {
      if (this.pendingSeconds > this.timeout) {
        this.resetTimer()
        return
      }

      setTimeout(() => {
        this.pendingSeconds++
        this.startTimer()
      }, 1000)
    },
    resetTimer () {
      this.isPending = false
      this.pendingSeconds = 0
    }
  }
}
</script>

<style>
</style>
