<template>
  <body v-if="messages.length > 0" class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
    <div class="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
      <div v-for="message, index in messages" :key="index" class="flex flex-col flex-grow p-4 border-b border-gray-300">
        <ChatMessage 
          :message="message"
          :class-name="MESSAGES_CLASS[message.typeMessage]"
          class="flex w-full mt-2 max-w-xs"
          :class="{ 'ml-auto justify-end': message.typeMessage === MESSAGES_TYPE.INCOMING }" 
        />
      </div>
      <div class="bg-white p-4">
        <input class="bg-slate-50 border border-gray-300 flex items-center h-10 w-full rounded-full px-3 text-sm" type="text" placeholder="Type your message…">
      </div>
    </div>
  </body>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { IMessage } from '@/utils/models';
import ChatMessage from '@/components/chat/chat-message.vue';
import { MESSAGES_TYPE, MESSAGES_CLASS } from '@/utils/constants';

@Options({ 
  components: { ChatMessage }
})

export default class ChatModal extends Vue {

  private MESSAGES_CLASS = MESSAGES_CLASS;
  private MESSAGES_TYPE = MESSAGES_TYPE;

  private get messages(): IMessage[] {
    const store = useStore();
    return store.state.messages.messages;
  }

  async created(): Promise<void> {
    const store = useStore();
    await store.dispatch('messages/getMessages');
  }
}
</script>