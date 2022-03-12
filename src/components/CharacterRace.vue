<script setup lang="ts">
defineProps<{
    name: string,
    desc: string
}>()
</script>

<template>
    <article>
        <h3>{{name}}</h3>
        {{desc}}
        
    </article>
</template>