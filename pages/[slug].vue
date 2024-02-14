<template>
    {{ params }}
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

    const {params} = useRoute();
</script>

<style scoped>

</style>