<template>
    <div class="flex justify-center my-12">
        <div class="w-2/5 bg-blue-500 p-4 rounded-xl">
          <div class="space-y-3">
            <h5 class="font-semibold text-white text-2xl">{{ $t("Let's stay in touch") }}</h5>
            <label class="relative block">
              <input
                class="placeholder:italic text-slate-100 placeholder:text-slate-100 block bg-blue-400 w-full rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 sm:text-sm"
                :placeholder="$t('email')" type="email" name="email" />
            </label>
            <label class="relative block">
              <textarea type="text" name="message" rows="4"
                class="placeholder:italic text-slate-100 placeholder:text-slate-100 block bg-blue-400 w-full rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 sm:text-sm"
                :placeholder="$t('message')"></textarea>
            </label>
            <button type="submit"
              class="!mt-5 rounded-md w-full p-2 bg-white  text-blue-500 text-base hover:bg-slate-100 transition-colors duration-150 ease-out"> {{ $t("messagebtn") }} 🔔</button>
          </div>
        </div>
      </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>