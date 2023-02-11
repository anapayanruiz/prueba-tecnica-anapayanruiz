<template>
  <ChatModal />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ChatModal from './components/chat/chat-modal.vue';

@Options({ components: { ChatModal }})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import '@/css/main';
</style>
