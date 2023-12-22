
<template>
    <!-- <Teleport to="body"> -->
    <div class="mx-auto w-1/2">
        <div class="flex justify-center">
        <div
            v-show="props.visible"
            class="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50"
        >
        
            <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl w-1/3">
            <div class="mt-4">
                <div class="mb-4 w-full px-5 py-5">
                    <slot />
                </div>
                <BaseButton v-if="okButton"
                    type="danger"
                    text="OK"
                    @click="emit('update:visible', false)">
                </BaseButton>
                <div v-else class="flex justify-between gap-4">
                    <BaseButton
                        type="secondary"
                        text="cancel"
                        @click="emit('update:visible', false)" />
                    <div class="flex gap-2">  
                        <BaseButton
                            type="danger"
                            text="delete"
                            @click="emit('delete', true)" />
                        <BaseButton
                            class="items-end"
                            type="success"
                            text="submit"
                            @click="emit('submit', true)" />
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
<!-- </Teleport> -->
</template>
<script lang="ts" setup>
    const props = defineProps({
        visible : {
            type: Boolean,
            default: true
        },
        okButton: {
            type: Boolean,
            default: false
        },
        submit: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits<{
        (e: 'update:visible', value: boolean): void
        (e: 'submit', value: boolean): void
        (e: 'delete', value: boolean): void
    }>()
</script>
  