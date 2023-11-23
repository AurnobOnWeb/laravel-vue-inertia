<template>
    <h1  class="text-4xl">Users</h1>
    <Nav></Nav>

    <div class="mt-[1000px] flex gap-5">
        <p>the Current time is {{ time }}</p>
        <Link href="/users" class="text-blue-600" preserve-scroll>Refresh</link>
    </div>
</template>

<script setup>
import Nav from "../Shared/Nav.vue";
import { Link } from "@inertiajs/vue3";
defineProps({
    time: String,
});
</script>

<style lang="scss" scoped></style>
