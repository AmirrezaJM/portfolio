<template>
    <div class="flex items-end justify-end my-2">
        <img :src="avatar" :alt="avatar_alternative" class="h-8 w-8 object-cover rounded-full mx-2 order-2" :class="{isHR: 'order-2'}" />
        <div class="bg-blue-500 px-3 py-2 rounded-t-lg rounded-bl-lg text-white">
        <span class="text-sm">{{title}}</span>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        text: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        avatar_alternative: {
            type: String,
            required: true,
        },
        isHR: {
            type: Boolean,
            required: true
        }
    })
</script>

<style lang="scss" scoped>

</style>

<!-- ~/assets/img/avatar.jpeg -->