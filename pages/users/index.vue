<template>
    <div>
        <Table :header="tableHeader" :keys="tableKey" :data="users" @update="showModalUpdate"/>
    </div>
    <ModalUpdate v-model:visible="modalUpdate" @submit="editSubmit" @delete="deleteSubmit">
            <div class="flex flex-col gap-5">
                <div class="mx-auto">
                    <BaseAvatar size="md" :src="photo"/>
                </div>
                <BaseInput v-model="name" label="Nama"/>
                <BaseInput v-model="gender" label="Jenis Kelamin" />
                <BaseInput v-model="address" label="Alamat" />
                <BaseFileInput @files="onChangeFile" label="Photo" />
            </div>
    </ModalUpdate>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {useUserStore} from "@/stores/user"
import { storeToRefs } from 'pinia'

const tableHeader = ref(['Name', 'Gender', 'Address', 'Image', 'Actions'])
const tableKey = ref(['name', 'gender', 'address'])
const name = ref<string>('')
const gender = ref<string>('')
const address = ref<string>('')
const photo = ref<string>('')
const modalUpdate = ref<Boolean>(false)
const profileStore = useUserStore()
const { users } = storeToRefs(profileStore)
const _id = ref<string>('')

onMounted(() => {
    profileStore.actionUser()
})

const showModalUpdate = (value: string) => {
    modalUpdate.value = !modalUpdate.value

    const data = users.value.find((item: any) => item._id === value)
    _id.value = data._id
    name.value = data.name
    gender.value = data.gender
    address.value = data.address
    photo.value = data.file
}

const editSubmit = () => {
    const objIndex = users.value.findIndex((item: any) => item._id == _id.value)

    users.value[objIndex].name = name.value
    users.value[objIndex].gender = gender.value
    users.value[objIndex].address = address.value
    users.value[objIndex].file = photo.value

    localStorage.setItem('data', JSON.stringify(users.value))
    modalUpdate.value = false
}

const deleteSubmit = () => {
    const objIndex = users.value.findIndex((item: any) => item._id == _id.value)

    users.value.splice(objIndex, 1)

    localStorage.setItem('data', JSON.stringify(users.value))
    modalUpdate.value = false
}

const onChangeFile = async (files : File) => {
    photo.value = await convertBlobToBase64(files)
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

</script>

<style scoped>

</style>