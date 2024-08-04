<template>
    <div :data-aos="aosPostion" data-aos-duration="500" data-aos-easing="linear" :class="[isHR ? 'HRCard' : 'userCard']">
        <img :src="avatar" :alt="avatar_alternative" :class="[isHR ? 'order-2' : '']" class="h-8 w-8 object-cover rounded-full mx-2" />
        <div :class="[isHR ? 'HRCard_box' : 'userCard_box']"> 
            <span class="text-sm">{{text}}</span>
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
            default: true
        },
        aosPostion: {
            type: String,
            required:true,
        }
    })
</script>

<style scoped>
    
    .HRCard {
        @apply flex items-end my-2 justify-end;
    }

    .HRCard_box {
        @apply bg-blue-500 px-3 py-2 rounded-t-lg rounded-bl-lg text-white;
    }

    .userCard {
        @apply flex items-end my-2 justify-start;
    }

    .userCard_box {
        @apply bg-gray-200 px-3 py-2 rounded-t-lg rounded-br-lg text-black;
    }
</style>


<!-- ~/assets/img/avatar.jpeg -->