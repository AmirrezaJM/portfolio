<template>
  <div
    data-aos="fade-up-left"
    data-aos-duration="500"
    data-aos-easing="linear"
    class="w-full p-3 bg-gray-100 dark:bg-stone-800 rounded-md mb-4"
  >
    <div class="flex items-center space-x-2 rtl:space-x-reverse">
      <img
        class="object-cover h-12 w-12 rounded"
        src="~/assets/img/avatar.jpeg"
        alt="image"
      />
      <div class="flex flex-col space-y-0.5">
        <span class="text-sm font-semibold text-gray-800 dark:text-white"
          >{{job}}</span
        >
        <span class="text-sm text-gray-500/90">{{companyName}} . {{typeOfWork}}</span>
        <span class="text-sm text-gray-500/50 dark:text-gray-500/70"
          >{{date}}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    job: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    typeOfWork: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})
</script>
