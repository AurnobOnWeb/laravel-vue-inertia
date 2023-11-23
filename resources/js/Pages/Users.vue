<template>
    <Head title="Users" />
    <div class="text-4xl">Users</div>
    <div class="mt-10">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
                <thead
                    class="text-xs text-gray-700 uppercase bg-black dark:bg-gray-700 dark:text-gray-400 text-white"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">Id</th>
                        <th scope="col" class="px-6 py-3">Name</th>
                        <th scope="col" class="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        v-for="(users, id) in user"
                        :key="users.id"
                    >
                        <td class="px-6 py-4">{{ users.id }}</td>
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ users.name }}
                        </th>

                        <td class="px-6 py-4">
                            <a
                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                >Delete</a
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <ul>
        <li></li>
    </ul>
</template>

<script setup>
defineProps({
    user: Array,
});
</script>

<style lang="scss" scoped></style>
