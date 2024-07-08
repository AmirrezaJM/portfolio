<template>
  <main>
    <!-- landPage -->
    <div class="flex justify-center w-screen h-screen">
      <div class="flex flex-col space-y-4 justify-center items-center">
        <div class="relative">
          <img class="absolute -top-4" src="~/assets/img/quickNav.png" alt="quickNav" />
          <div
            class="absolute cursor-pointer top-0 -right-2 group transition-colors duration-500 ease-out bg-gray-100 hover:bg-gray-300 rounded-full shadow-sm flex justify-center items-center w-8 h-8">
            <Icon class="m-1 text-blue-400  hover:text-blue-600 transition-colors duration-300 ease-in" name="solar:stars-minimalistic-bold-duotone"
              size="20" />
            <div class="relative">
              <!-- ! make a separated components -->
              <button class="hidden group-hover:block absolute -top-12 right-0">
                <div
                  class="transition-colors duration-500 ease-out bg-gray-100 hover:bg-gray-300 rounded-full shadow-sm flex justify-center items-center w-6 h-6">
                  <div class="px-1 py-4 flex justify-center items-center">
                    <Icon class="text-blue-400" name="ic:baseline-account-circle" size="18" />
                  </div>
                </div>
              </button>
              <button class="hidden group-hover:block absolute -top-10 -right-8">
                <div
                  class="transition-colors duration-500 ease-out bg-gray-100 hover:bg-gray-300 rounded-full shadow-sm flex justify-center items-center w-6 h-6">
                  <div class="px-3 py-3 flex justify-center items-center">
                    <Icon class="text-blue-400" name="ph:shapes-fill" size="18" />
                  </div>
                </div>
              </button>
              <button class="hidden group-hover:block absolute -top-2 -right-10">
                <div
                  class="transition-colors duration-500 ease-out bg-gray-100 hover:bg-gray-300 rounded-full shadow-sm flex justify-center items-center w-6 h-6">
                  <div class="px-5 py-1 flex justify-center items-center">
                    <Icon class="text-blue-400" name="uil:suitcase" size="18" />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <!-- ! change background color -->
          <div class="border-4 border-gray-100 border-spacing-1 rounded-full shadow-md">
            <img src="~/assets/img/avatar.jpeg" alt="user" class="h-24 w-24 object-cover rounded-full" />
          </div>
        </div>
        <h1 class="text-6xl">So. Welcome</h1>
        <span class="text-lg text-gray-400">Amirreza Jolani mameghani portfolio</span>
        <div class="flex items-center justify-center w-3/4">
          <a
            class="cursor-pointer flex items-center bg-blue-400 rounded-md p-3 text-blue-100 hover:bg-blue-600 hover:text-blue-200 transition-colors duration-150 ease-in">
            Download CV
            <Icon class="mx-1" name="line-md:downloading-loop" size="18" />
          </a>
        </div>
      </div>
    </div>
    <div class="container my-3 mx-auto">
      <!-- About Me -->
      <AppHeader title="About" icon-name="ic:baseline-account-circle" />
      <div class="bg-gray-100 rounded-md relative p-4">
        <!-- ! make a component with v-for options -->
        <!-- HR -->
        <div class="flex items-end justify-end my-2">
          <img src="~/assets/img/avatar.jpeg" alt="HR" class="h-8 w-8 object-cover rounded-full mx-2 order-2" />
          <div class="bg-blue-500 px-3 py-2 rounded-t-lg rounded-bl-lg text-white">
            <span class="text-sm">Hi, How are you ?</span>
          </div>
        </div>
        <!-- me -->
        <div class="flex items-end justify-start my-2">
          <img src="~/assets/img/avatar.jpeg" alt="HR" class="h-8 w-8 object-cover rounded-full mx-2 " />
          <div class="bg-gray-200 px-3 py-2 rounded-t-lg rounded-br-lg text-black">
            <span>Hi,I'm fine!Working on some portfolio projects!🧑🏻‍💻</span>
          </div>
        </div>
        <!-- HR -->
        <div class="flex items-end justify-end my-2">
          <img src="~/assets/img/avatar.jpeg" alt="HR" class="h-8 w-8 object-cover rounded-full mx-2 order-2" />
          <div class="bg-blue-500 px-3 py-2 rounded-t-lg rounded-bl-lg text-white">
            <span class="text-sm">Hi, How are you ?</span>
          </div>
        </div>
        <!-- me -->
        <div class="flex items-end justify-start my-2">
          <img src="~/assets/img/avatar.jpeg" alt="HR" class="h-8 w-8 object-cover rounded-full mx-2 " />
          <div class="bg-gray-200 px-3 py-2 rounded-t-lg rounded-br-lg text-black">
            <span>Hi,I'm fine!Working on some portfolio projects!🧑🏻‍💻</span>
          </div>
        </div>
      </div>
      <!-- Projects -->
      <AppHeader title="Projects" icon-name="ph:shapes-fill" />

      <!-- ! update it as a list with v-for and make a seperated components -->
      <div class="relative">
        <!-- First Project -->
        <div class="relative bg-gray-200 lg:h-[30rem] w-full p-4 rounded-lg mb-4">
          <div class="absolute top-5 left-8">
            <div class="flex flex-col">
              <span class="text-sm">07/2023</span>
              <span class="text-sm text-end">UI/UX</span>
            </div>
          </div>
          <div class="absolute bottom-5 left-8">
            <div class="flex flex-col">
              <span class="font-semibold text-sm">Brick</span>
              <span class="text-gray-400 text-xs">Logic app</span>
            </div>
          </div>
          <div class="flex items-center justify-center h-full">
            <div>Project Icon and name</div>
          </div>
          <div class="absolute bottom-2 right-10">
            <Icon name="uil:shutter-alt" size="24" class="text-black" />
          </div>
        </div>
        <!-- First Project -->
        <div class="relative bg-gray-200 lg:h-[30rem] w-full p-4 rounded-lg mb-4">
          <div class="absolute top-5 left-8">
            <div class="flex flex-col">
              <span class="text-sm">07/2023</span>
              <span class="text-sm text-end">UI/UX</span>
            </div>
          </div>
          <div class="absolute bottom-5 left-8">
            <div class="flex flex-col">
              <span class="font-semibold text-sm">Brick</span>
              <span class="text-gray-400 text-xs">Logic app</span>
            </div>
          </div>
          <div class="flex items-center justify-center h-full">
            <div>Project Icon and name</div>
          </div>
          <div class="absolute bottom-2 right-10">
            <Icon name="uil:shutter-alt" size="24" class="text-black" />
          </div>
        </div>
        <!-- First Project -->
        <div class="relative bg-gray-200 lg:h-[30rem] w-full p-4 rounded-lg mb-4">
          <div class="absolute top-5 left-8">
            <div class="flex flex-col">
              <span class="text-sm">07/2023</span>
              <span class="text-sm text-end">UI/UX</span>
            </div>
          </div>
          <div class="absolute bottom-5 left-8">
            <div class="flex flex-col">
              <span class="font-semibold text-sm">Brick</span>
              <span class="text-gray-400 text-xs">Logic app</span>
            </div>
          </div>
          <div class="flex items-center justify-center h-full">
            <div>Project Icon and name</div>
          </div>
          <div class="absolute bottom-2 right-10">
            <Icon name="uil:shutter-alt" size="24" class="text-black" />
          </div>
        </div>

      </div>
      <!-- Experience -->
      <AppHeader title="Experinece" icon-name="uil:suitcase" />

      <div class="relative">
        <div class="">

        </div>
      </div>


      <!-- Stay in touch-card -->
      <div class="flex justify-center">
        <div class="w-2/5 bg-blue-500 p-4 rounded-xl">
          <div class="space-y-3">
            <h5 class="font-semibold text-white text-2xl">Let's stay in touch!💡</h5>
            <label class="relative block">
              <input
                class="placeholder:italic text-slate-100 placeholder:text-slate-100 block bg-blue-400 w-full rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 sm:text-sm"
                placeholder="Email" type="email" name="email" />
            </label>
            <label class="relative block">
              <textarea type="text" name="message" rows="4"
                class="placeholder:italic text-slate-100 placeholder:text-slate-100 block bg-blue-400 w-full rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-700 focus:ring-sky-700 focus:ring-1 sm:text-sm"
                placeholder="Message"></textarea>
            </label>
            <button type="submit"
              class="!mt-5 rounded-md w-full p-2 bg-white text-blue-500 text-base hover:bg-slate-100 transition-colors duration-150 ease-out">Message
              me! 🔔</button>
          </div>
        </div>
      </div>
      <!-- Contact Me -->
      <div class="mb-8 mt-4">
        <AppHeader title="Contact" icon-name="mdi:transition-masked" />
        <div class="rounded bg-gray-200">
          <div class="flex items-center space-x-5 p-3">
            <!-- ! write it as v-for components -->
            <SocialMedia icon-name="uil:github" link="https://github.com/AmirrezaJM" title="AmirrezaJM" />
            <SocialMedia icon-name="uil:twitter" link="https://x.com/ARJoolim" title="ARJoolim" />
            <SocialMedia icon-name="uil:linkedin"
              link="https://www.linkedin.com/in/amirreza-jolani-mameghani-b15084165/" title="AmirrezaJM" />
            <SocialMedia icon-name="uil:envelope" link="mailto:amirreza.jolani1998@gmail.com"
              title="amirreza.jolani1998@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script setup lang="ts">

</script>