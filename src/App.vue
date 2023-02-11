<template>
  <main>
    <ChatModal />
  </main>
</template>

<script>
import ChatModal from '@/components/modals/chat-modal.vue';

export default {
  name: 'App',
  components: {
    ChatModal
  }
}
</script>

<style lang="scss">
@import '@/css/main';
</style>
