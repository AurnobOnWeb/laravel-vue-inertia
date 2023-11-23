<template>
    <nav class="ml-6">
        <ul class="list-disc list-inside flex space-x-4">
            <NavLinks href="/" :active="$page.component === 'Home'"
                >Home</NavLinks
            >
            <NavLinks href="/users" :active="$page.component === 'Users'"
                >User</NavLinks
            >
            <NavLinks href="/settings" :active="$page.component === 'Settings'"
                >Settings</NavLinks
            >
        </ul>
    </nav>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import NavLinks from "./NavLinks.vue";
</script>

<style lang="scss" scoped></style>
