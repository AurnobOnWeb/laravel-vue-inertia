<template>
    <Head title="Users" />
    <div class="text-4xl">Users</div>
    <div class="mt-10">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div
                class="h-16 bg-white mb-2 shadow-xl flex items-center justify-between"
            >
                <Link
                    class="ml-2 text-white bg-green-400 p-3 rounded hover:bg-green-500"
                    href="/users/create"
                >
                    New user
                </Link>
                <input
                    class="p-2 px-4 mr-2 border border-blue-200 rounded"
                    placeholder="Search"
                    v-model="search"
                />
            </div>
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
                        v-for="(users, id) in user.data"
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

            <Pagination :links="user.links" />
        </div>
    </div>

    <ul>
        <li></li>
    </ul>
</template>

<script setup>
import Pagination from "../../Shared/Pagination.vue";
import { ref, watch } from "vue";
import { router } from "@inertiajs/vue3";

const props = defineProps({
    user: Object,
    filters: Object,
});

const search = ref(props.filters.search);

watch(search, (value) => {
    router.get(
        "/users",
        { search: value },
        {
            preserveState: true,
            replace: true,
        }
    );
});
</script>

<style lang="scss" scoped></style>
