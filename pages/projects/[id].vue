<script setup lang="ts">
import { DBProjectData } from '~/DB/projectes';

const route = useRoute();
const projectId = route.params
// const project = computed(() => DBProjectData[projectId] || null);

</script>

<template>
    <div>
        <!-- 直接 projectId を表示 -->
        <h1>Project ID: {{ projectId }}</h1>

        <!-- project の内容を確認 (デバッグ用) -->
        <!-- <h1>Project: {{ project ? JSON.stringify(project, null, 2) : 'Project not found' }}</h1> -->
    </div>
</template>
