<script setup lang="ts">
import { DBBlogData } from '~/DB/blog';

const route = useRoute();
const workId = computed(() => route.params.id);
const RefWorkData = ref(Object.values(DBBlogData));


</script>

<template>
    作成中
</template>