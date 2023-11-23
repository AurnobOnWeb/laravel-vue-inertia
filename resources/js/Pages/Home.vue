<template>
    <h1>Hellow World, {{ name }}</h1>
    <p>In This Series we will use These framworks</p>
    <ul>
        <li v-for="Frameworks in Framework">
            {{ Frameworks }}
        </li>
    </ul>
</template>

<script setup>
defineProps({
    name: String,
    Framework: Object,
});
</script>

<style lang="scss" scoped></style>
