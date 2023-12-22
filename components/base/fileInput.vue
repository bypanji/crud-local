<template>
    <div class="input">
        <p class="input__label">{{ label }}</p>
        <input @change="onFileChanged"  class="input__form" id="file_input" type="file" >
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Photo',
  },
  modelValue: {
    type: String,
    default: '',
  }
})

const emit = defineEmits<{ (e: 'files', value: unknown): void }>()

const file = ref<File | null>();
const form = ref<HTMLFormElement>();

function onFileChanged($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (target && target.files) {
        file.value = target.files[0];

        emit('files', file.value)
    }
}

</script>

<style lang="postcss" scoped>
.input {
  @apply w-full;

  &__label {
    @apply block mb-2 text-sm font-medium text-gray-900;
  }

  &__form {
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5;

    &::placeholder {
      @apply text-base;
    }

    &:disabled {
      @apply pointer-events-none;
    }

    &:focus {
      @apply ring-blue-500 border-blue-500;
    }
  }
}

</style>