<template>
    <div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 py-5">
                    <tr>
                        <th v-for="item of header" scope="col" class="px-6 py-3">
                            {{ item }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" class="bg-white border-b py-2">
                        <td v-for="key of keys" class="px-6 py-4 font-medium text-gray-600 whitespace-nowrap">
                            {{ item[key] }}
                        </td>
                        <td>
                            <BaseAvatar size="sm" :src="item.file"/>
                        </td>
                        <td>
                            <BaseButton type="primary" text="detail" @click="emit('update', item._id)" />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    header: {
        type: Array,
        default: () => []
    },
    keys: {
        type: Array,
        default: () => []
    },
    data: {
        type: Array,
        default: () => []
    }
})

const emit = defineEmits(["update"]);

</script>

<style scoped>

</style>