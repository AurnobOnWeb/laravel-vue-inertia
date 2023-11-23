<template>
    <li>
        <Link
            :href="href"
            class="text-black"
            :class="{ 'font-bold  underline': active }"
            ><slot></slot
        ></Link>
    </li>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
defineProps({
    active: Boolean,
    href: String,
});
</script>

<style lang="scss" scoped></style>
