<template>
    <NuxtLink :to="link" target="_blank" class="flex items-center space-x-1">
        <Icon :name="iconName" class="text-black" :size="size" />
        <h5 class="text-base font-normal">{{title}}</h5>
    </NuxtLink>
</template>

<script setup>
    const props = defineProps({
        iconName: {
            type: String,
            required: true,
        },
        size: {
            type: String,
        },
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    })
</script>

<style scoped></style>