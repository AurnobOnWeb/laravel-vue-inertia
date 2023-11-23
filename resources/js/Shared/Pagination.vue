<template>
    <div class="m-3 flex justify-center">
        <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px text-sm">
                <li v-for="link in links">
                    <component
                        :is="link.url ? 'Link' : 'span'"
                        :href="link.url"
                        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        :class="{
                            'border-gray-300': !link.url,
                            'font-bold border-blue-400 text-black': link.active,
                        }"
                        >{{ link.label }}</component
                    >
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
defineProps({
    links: Array,
});
</script>

<style lang="scss" scoped></style>
