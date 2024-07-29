<template>
    <div data-aos="fade-up" data-aos-duration="400">
        <div class="flex items-center space-x-2 rtl:space-x-reverse my-8">
            <Icon :name="iconName" class="text-[#0A84FF]" size="28" />
            <span class="font-medium text-4xl text-black dark:text-white">{{ title }}</span>
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

<style scoped></style>