<template>
    <ChatModal />
</template>

<script lang="ts">
import ChatModal from '@/components/chat/chat-modal.vue';
import { Options, Vue } from 'vue-class-component';

@Options({ components: { ChatModal } })
export default class Chat extends Vue {
}
</script>

