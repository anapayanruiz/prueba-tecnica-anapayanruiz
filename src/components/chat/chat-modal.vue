<template>
  <body v-if="mappedMessages.length > 0" class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-4">
    <div id="messages" class="flex flex-col flex-grow w-full max-w-xl bg-color-3 shadow-xl rounded-lg overflow-auto">
      <h3 class="w-full flex items-center justify-center font-bold pt-4">Comentarios</h3>
      <div v-for="message, index in mappedMessages" :key="index" class="flex flex-col flex-grow p-4">
        <ChatFile 
          v-if="message.isFile" 
          :message="message"
        />
        <ChatMessage 
          v-else
          :message="message"
          :class-name="MESSAGES_CLASS[message.typeMessage]"
          class="flex w-full mt-2 max-w-md"
          :class="{ 'ml-auto justify-end': message.typeMessage === MESSAGES_TYPE.OUTBOUND }" 
        />
      </div>
      <div class="flex items-center bg-color-3 p-4 border-t border-gray-300">
        <input
          class="bg-color-2 border border-gray-300 flex items-center h-10 w-full rounded-full px-3 text-sm mr-4"
          type="text" 
          placeholder="Type your message…"
          v-model="messageOutgoing"
          @keyup.enter="sendMessage"
        >
        <button class="bg-color-1 rounded-full p-2 cursor-pointer disabled:opacity-50" @click="sendMessage" :disabled="messageOutgoing === ''">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-color-3">
            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </div>
    </div>
  </body>
</template>


<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';
import { IMessage } from '@/utils/models';
import { MESSAGES_TYPE, MESSAGES_CLASS } from '@/utils/constants';
import ChatMessage from '@/components/chat/chat-message.vue';
import ChatFile from '@/components/chat/chat-file.vue';
import { DateService } from '@/services/DateService';

@Options({ components: { ChatMessage, ChatFile } })
export default class ChatModal extends Vue {

  private MESSAGES_CLASS = MESSAGES_CLASS;
  private MESSAGES_TYPE = MESSAGES_TYPE;

  private store = useStore();
  private dateService = new DateService();
  private messageOutgoing: string = '';

  private get mappedMessages(): IMessage[] { 
    const source = this.store.state.messages.messages || [];

    return source
    .sort((a: IMessage, b: IMessage) => {      
      const
        dateA = new Date(a.deliveryDate),
        dateB = new Date(b.deliveryDate);

      if (dateA < dateB) {
        return -1;
      }
      else if (dateA > dateB) {
        return 1;
      }
      return 0;
    })
    .map((e: IMessage) => ({
      ...e,
      deliveryDate: this.dateService.formatDate(e.deliveryDate, 1, true)
    }));
  }

  private async sendMessage(): Promise<void> {
    await this.store.dispatch('messages/sendMessage', this.messageOutgoing);
    this.messageOutgoing = '';

    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    const messages = document.getElementById('messages') as HTMLDivElement;
    messages.scrollTo(0, messages.scrollHeight);
  }

  async created(): Promise<void> {
    await this.store.dispatch('messages/getMessages');
  }
}
</script>