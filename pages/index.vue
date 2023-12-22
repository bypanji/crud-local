<template>
    <div class="h-screen flex items-center justify-center">
        <div class="w-2/5 flex flex-col gap-y-4">
            <h1 class="mx-auto font-bold">Create Users</h1>
            <BaseInput v-model="name" label="Nama"/>
            <BaseInput v-model="gender" label="Jenis Kelamin" />
            <BaseInput v-model="address" label="Alamat" />
            <BaseFileInput @files="onChangeFile" label="Photo" />
            <BaseButton 
                type="danger"
                text="submit"
                @click="onSubmit"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
import {useUserStore} from "@/stores/user"
import { storeToRefs } from 'pinia'
import { onMounted, ref } from "vue";

const name = ref<string>('')
const gender = ref<string>('')
const address = ref<string>('')
const file = ref<any>('');
const profileStore = useUserStore()
const { users } = storeToRefs(profileStore)
const router = useRouter()

const onChangeFile = async (files : File) => {
    file.value = await convertBlobToBase64(files)
}

const convertBlobToBase64 = async (blob: Blob) => {
  return await blobToBase64(blob);
}

const blobToBase64 = (blob: Blob )=> new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

onMounted(() => {
    profileStore.actionUser()
})

const onSubmit = () => {
    if(!name.value || !gender.value || !address.value || !file.value){
        alert('please complete the form')

        return
    }

    const item = {
        _id: uuidv4(),
        name : name.value,
        gender : gender.value,
        address: address.value,
        file: file.value
    }

    users.value.unshift(item)

    localStorage.setItem('data', JSON.stringify(users.value))

    router.replace('/users')
}

</script>

<style scoped>

</style>