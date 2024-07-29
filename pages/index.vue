<script setup>
const colorMode = useColorMode();
const { locale, setLocale } = useI18n();

const darkmodeIcon = ref("");
const showLanguage = ref(false);


const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const computedTheme = computed(() => {
  return darkmodeIcon.value = colorMode.preference === "dark" ? "ic:outline-wb-sunny" : "ic:outline-dark-mode"
})

const toggleLanguageBtn = () => {
  showLanguage.value = !showLanguage.value
}

const toggleTheme = () => {
  if (colorMode.preference === "dark") {
    colorMode.preference = 'light'
    darkmodeIcon.value = "ic:outline-dark-mode"
    console.log(colorMode.preference)
  } else {
    colorMode.preference = 'dark'
    darkmodeIcon.value = "ic:outline-wb-sunny"
    console.log(colorMode.preference)
  }
};
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
  <main class="relative bg-white dark:bg-[#161618]">
    <!-- -- theme-button -->
    <div class="group fixed z-10 bottom-4 left-4">
      <div
        class="transition-colors duration-500 ease-out rounded-full bg-blue-200 group-hover:bg-blue-500 shadow flex justify-center items-center">
        <button @click="toggleTheme" class="block">
          <div class="p-2 flex justify-center items-center">
            <Icon class="text-blue-600 group-hover:text-blue-200" :name="computedTheme" size="20" />
          </div>
        </button>
      </div>
    </div>


    <!-- -- lanugage-button -->
    <div class="fixed z-10 bottom-4 right-10">
      <div class="relative">
        <div class="group">
          <div
            class="transition-colors duration-500 ease-out rounded-full bg-blue-200 group-hover:bg-blue-500 shadow flex justify-center items-center">
            <button @click="toggleLanguageBtn" class="flex justify-center items-center">
              <div class="p-2 flex justify-center items-center">
                <Icon class="text-blue-600 group-hover:text-blue-200" name="iconoir:language" size="20" />
              </div>
            </button>
          </div>
        </div>
        <!-- ! make a seperate components -->
        <div
          class="absolute z-10 bottom-12 -right-3/4 space-y-2 p-2 after:content-[''] bg-blue-200 rounded-lg after:absolute after:-bottom-1 after:left-[42%] after:w-3 after:h-3 after:bg-blue-200 after:rotate-45"
          v-if="showLanguage">
          <button @click="setLocale('fa')" class="space-x-2 rtl:space-x-reverse flex justify-center items-center group">
            <Icon name="flag:ir-4x3" size="12" />
            <span class="text-sm text-blue-600 group-hover:text-blue-900">Persian</span>
          </button>
          <button @click="setLocale('en')" class="space-x-2 rtl:space-x-reverse flex justify-center items-center">
            <Icon name="flag:us-4x3" size="12" />
            <span class="text-sm text-blue-600">English</span>
          </button>
        </div>
      </div>


    </div>
    <!-- -- landing-page -->
    <div class="flex justify-center w-screen h-screen">
      <div class="flex flex-col space-y-4 justify-center items-center">
        <div class="relative group hover:cursor-pointer">
          <div
            class="border-4 border-gray-100 transition-all duration-300 ease-in group-hover:border-gray-300  border-spacing-1 rounded-full shadow-md">
            <img src="~/assets/img/avatar.jpeg" alt="user" class="h-24 w-24 object-cover rounded-full" />
          </div>
        </div>
        <h1 class="text-6xl text-black dark:text-white">{{ $t("welcome") }}</h1>
        <span class="text-lg text-gray-400 dark:text-gray-300">{{ $t("subtitle") }}</span>
        <div data-aos="fade-up" class="flex items-center justify-center w-3/4">
          <a
            class="cursor-pointer flex items-center bg-blue-200 rounded-md px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-blue-200 transition-colors duration-150 ease-in">
            {{ $t("downloadbtn") }}
            <Icon class="mx-1" name="line-md:downloading-loop" size="18" />
          </a>
        </div>
      </div>
    </div>

    <div class="container py-3 mx-auto">
      <!-- -- About Me -->
      <TitleHeader :title="$t('about')" icon-name="ic:baseline-account-circle" />
      <div class="bg-gray-100 dark:bg-stone-800 rounded-md relative p-4">
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
            <span>Hi,I'm fine!</span>
          </div>
        </div>
        <!-- HR -->
        <div class="flex items-end justify-end my-2">
          <img src="~/assets/img/avatar.jpeg" alt="HR" class="h-8 w-8 object-cover rounded-full mx-2 order-2" />
          <div class="bg-blue-500 px-3 py-2 rounded-t-lg rounded-bl-lg text-white">
            <span class="text-sm">would you introduce yourself to me?</span>
          </div>
        </div>
        <!-- me -->
        <div class="flex items-end justify-start my-2">
          <img src="~/assets/img/avatar.jpeg" alt="HR" class="h-8 w-8 object-cover rounded-full mx-2 " />
          <div class="bg-gray-200 px-3 py-2 rounded-t-lg rounded-br-lg text-black">
            <span>sure! my name is Amirreza Jolani mameghani, I'm 26 years old</span>
          </div>
        </div>
        <!-- HR -->
        <div class="flex items-end justify-start my-2">
          <img src="~/assets/img/avatar.jpeg" alt="HR" class="h-8 w-8 object-cover rounded-full mx-2 order-2" />
          <div class="bg-gray-200 px-3 py-2 rounded-t-lg rounded-br-lg text-black">
            <span>great, Amirreza would tell me what is Professional career? </span>
          </div>
        </div>
        <!-- me -->
        <div class="flex items-end justify-start my-2">
          <img src="~/assets/img/avatar.jpeg" alt="HR" class="h-8 w-8 object-cover rounded-full mx-2 " />
          <div class="bg-gray-200 px-3 py-2 rounded-t-lg rounded-br-lg text-black">
            <span>Well, </span>
          </div>
        </div>
      </div>
      <!-- -- Project  -->
      <TitleHeader :title="$t('projects')" icon-name="ph:shapes-fill" />
      <div class="relative">
        <!-- ! update it as a list with v-for and make a seperated components -->
        <div data-aos="zoom-in-left" data-aos-duration="500" data-aos-easing="linear"
          class="relative bg-gray-100 dark:bg-stone-800 lg:h-[30rem] w-full p-4 rounded-lg mb-4">
          <div class="absolute top-5 left-8">
            <div class="flex flex-col">
              <span class="text-sm text-black dark:text-white">07/2023</span>
              <span class="text-sm text-end text-black dark:text-white">UI/UX</span>
            </div>
          </div>
          <div class="absolute bottom-5 left-8">
            <div class="flex flex-col">
              <span class="font-semibold text-dark dark:text-white text-sm">Brick</span>
              <span class="text-gray-400 text-xs">Logic app</span>
            </div>
          </div>
          <div class="flex items-center justify-center h-full">
            <div>Project Icon and name</div>
          </div>
          <div class="absolute bottom-2 right-10">
            <Icon name="uil:shutter-alt" size="24" class="text-black dark:text-white" />
          </div>
        </div>
      </div>
      <!-- -- Experience -->
      <TitleHeader :title="$t('experiences')" icon-name="pepicons-pop:stars" />
      <div class="relative">
        <!-- ! update it as a list with v-for and make a seperated components -->
        <div data-aos="fade-up-left" data-aos-duration="500" data-aos-easing="linear"
          class="w-full p-3 bg-gray-100 dark:bg-stone-800 rounded-md mb-4">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <img class="object-cover h-12 w-12 rounded" src="~/assets/img/avatar.jpeg" alt="image" />
            <div class="flex flex-col space-y-0.5">
              <span class="text-sm font-semibold text-gray-800 dark:text-white">UI/UX Design</span>
              <span class="text-sm text-gray-500/90">Bluemail . Full-time </span>
              <span class="text-sm text-gray-500/50 dark:text-gray-500/70">Jul 2022 - present</span>
            </div>
          </div>
        </div>
      </div>

      <SendMessage />
      <!-- -- contact me -->
      <div>
        <TitleHeader :title="$t('contact')" icon-name="mdi:transition-masked" />
        <div class="rounded bg-gray-100 dark:bg-stone-800">
          <div class="flex items-center space-x-5 rtl:space-x-reverse p-3">
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
  </Html>
</template>
