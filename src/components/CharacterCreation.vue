<script setup lang="ts">
defineProps<{
    head: string,
    desc: string
}>()
</script>

<template>
    <aside>
        <h6>Generating a Character Step {{head}}</h6>
        <p>{{desc}}</p>
    </aside>
</template>