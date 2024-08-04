<template>
  <div
    data-aos="zoom-in-left"
    data-aos-duration="500"
    data-aos-easing="linear"
    class="relative bg-gray-100 dark:bg-stone-800 lg:h-[30rem] w-full p-4 rounded-lg mb-4"
  >
    <div class="absolute top-5 left-8">
      <div class="flex flex-col">
        <span class="text-sm text-black dark:text-white">{{date}}</span>
        <span class="text-sm text-end text-black dark:text-white">{{job}}</span>
      </div>
    </div>
    <div class="absolute bottom-5 left-8">
      <div class="flex flex-col">
        <span class="font-semibold text-dark dark:text-white text-sm"
          >{{titleApplication}}</span
        >
        <span class="text-gray-400 text-xs">{{typeApplication}}</span>
      </div>
    </div>
    <div class="flex items-center justify-center h-full">
      <div>Project Icon and name</div>
    </div>
    <div class="absolute bottom-2 right-10">
      <Icon
        name="uil:shutter-alt"
        size="24"
        class="text-black dark:text-white"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    date: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true,
    },
    titleApplication: {
        type: String,
        required: true
    },
    typeApplication: {
        type: String,
        reuqired: true,
    }
})
</script>
