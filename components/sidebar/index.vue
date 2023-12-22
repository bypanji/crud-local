<template>
    <div>
        <aside class="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
            <ul class="space-y-2 font-medium">
                <li>
                    <span class="flex items-center p-2 pb-3 text-gray-900 rounded-lg hover:bg-gray-100 group cursor-pointer" @click="goToAdd">
                        <span class="flex-1 ms-3 whitespace-nowrap">Add</span>
                    </span>
                </li>
                <li>
                    <span class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group cursor-pointer" @click="goToUsers">
                        <img src="~/assets/images/users.svg" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 cursor-pointer"/>
                        <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                    </span>
                </li>
            </ul>
        </div>
        </aside>
    </div>
</template>

<script setup lang="ts">

const router = useRouter()

const goToAdd = () => {
    router.replace('/')
}

const goToUsers = () => {
    router.replace('/users')
}

</script>

<style scoped>

</style>