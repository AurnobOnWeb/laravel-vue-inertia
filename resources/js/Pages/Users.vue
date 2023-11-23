
<template>
    <Head title="Users" />
        <div class="text-4xl">Users</div>
        <div class="mt-[1000px] flex gap-5">
        <p>the Current time is {{ time }}</p>
        <Link href="/users" class="text-blue-600" preserve-scroll>Refresh</link>
    </div>
</template>

<script setup>

defineProps({
    time: String,
});
</script>

<style lang="scss" scoped></style>
