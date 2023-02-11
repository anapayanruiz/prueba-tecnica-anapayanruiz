<template>
    <div class="flex flex-col justify-start bg-gray-300 p-3" :class="className">
        <p class="text-sm">{{ message.text }}.</p>
        <span class="text-xs mt-2">{{ message.deliveryDate }}</span>
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
        },
        className: {
            type: String,
            require: false
        }
    }
})

export default class Message extends Vue {
}
</script>