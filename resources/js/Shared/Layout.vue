<template>
    <Head title="My app" />
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <h1 class="font-bold text-lg">My inertia App</h1>
            <p>Welcome Back , {{ $page.props.auth.user.userName }}!</p>
            <Nav />
        </header>
    </section>
    <section class="p-6 bg-gray-100">
        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </section>
</template>

<script setup>
import Nav from "./Nav.vue";
</script>

<style lang="scss" scoped></style>
