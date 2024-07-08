<template>
    <div>
        <div class="flex items-center space-x-2 mb-5 mt-4">
            <Icon :name="iconName" class="text-[#0A84FF]" size="32" />
            <span class="font-medium text-3xl text-black">{{ title }}</span>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        iconName: {
            type: String,
            required: true,
        },
        size: {
            type: String,
        }
    })
</script>

<style scoped>

</style>