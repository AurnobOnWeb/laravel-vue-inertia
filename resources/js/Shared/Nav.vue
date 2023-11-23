<template>
    <nav class="font-bold mt-6">
        <ul class="list-disc list-inside">
            <li>
                <Link href="/" class="text-blue-600 hover:underline">Home</Link>
            </li>
            <li>
                <Link href="/users" class="text-blue-600 hover:underline"
                    >User</Link
                >
            </li>
            <li>
                <Link href="/settings" class="text-blue-600 hover:underline"
                    >Settings</Link
                >
            </li>
            <li>
                <Link href="/logout" method="post" as="button">Logout</Link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<style lang="scss" scoped></style>
