<template>
    <div class="flex flex-col justify-start bg-color-3 p-3 w-full border-b border-t border-gray-300">
        <p class="text-xs font-bold">VERSIÓN {{ message.numberVersion }}</p>
        <p class="text-xs my-1 font-bold text-color-1">{{ message.nameFile }}</p>
        <p class="leading-none">
            <span class="text-xs mt-2">Documento/{{ message.typeFile }}({{ message.sizeFile }})</span>
            <span class="text-xs mt-2 ml-2">{{ message.deliveryDate }}</span>
        </p>
    </div>
</template>

<script lang="ts">
import { IMessage } from '@/utils/models';
import { PropType } from 'vue';
import { Options, Vue } from 'vue-class-component';

@Options({ 
    props: {
        message: {
            type: Object as PropType<IMessage>,
            required: true
        }
    }
})

export default class ChatFile extends Vue {
}
</script>