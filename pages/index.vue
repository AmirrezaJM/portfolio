<script setup>
const colorMode = useColorMode();
const { locale, setLocale } = useI18n();

const darkmodeIcon = ref("");
const showLanguage = ref(false);

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

const computedTheme = computed(() => {
  return (darkmodeIcon.value =
    colorMode.preference === "dark"
      ? "ic:outline-wb-sunny"
      : "ic:outline-dark-mode");
});

const toggleLanguageBtn = () => {
  showLanguage.value = !showLanguage.value;
};

const toggleTheme = () => {
  if (colorMode.preference === "dark") {
    colorMode.preference = "light";
    darkmodeIcon.value = "ic:outline-dark-mode";
    console.log(colorMode.preference);
  } else {
    colorMode.preference = "dark";
    darkmodeIcon.value = "ic:outline-wb-sunny";
    console.log(colorMode.preference);
  }
};
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <main class="relative bg-white dark:bg-[#161618]">
      <!-- -- theme-button -->
      <div class="group fixed z-10 bottom-4 left-4">
        <div
          class="transition-colors duration-500 ease-out rounded-full bg-blue-200 group-hover:bg-blue-500 shadow flex justify-center items-center"
        >
          <button @click="toggleTheme" class="block">
            <div class="p-2 flex justify-center items-center">
              <Icon
                class="text-blue-600 group-hover:text-blue-200"
                :name="computedTheme"
                size="20"
              />
            </div>
          </button>
        </div>
      </div>

      <!-- -- lanugage-button -->
      <div class="fixed z-10 bottom-4 right-10">
        <div class="relative">
          <div class="group">
            <div
              class="transition-colors duration-500 ease-out rounded-full bg-blue-200 group-hover:bg-blue-500 shadow flex justify-center items-center"
            >
              <button
                @click="toggleLanguageBtn"
                class="flex justify-center items-center"
              >
                <div class="p-2 flex justify-center items-center">
                  <Icon
                    class="text-blue-600 group-hover:text-blue-200"
                    name="iconoir:language"
                    size="20"
                  />
                </div>
              </button>
            </div>
          </div>
          <!-- ! make a seperate components -->
          <div
            class="absolute z-10 bottom-12 -right-3/4 space-y-2 p-2 after:content-[''] bg-blue-200 rounded-lg after:absolute after:-bottom-1 after:left-[42%] after:w-3 after:h-3 after:bg-blue-200 after:rotate-45"
            v-if="showLanguage"
          >
            <button
              @click="setLocale('fa')"
              class="space-x-2 rtl:space-x-reverse flex justify-center items-center group"
            >
              <Icon name="flag:ir-4x3" size="12" />
              <span class="text-sm text-blue-600 group-hover:text-blue-900">{{
                $t("persian")
              }}</span>
            </button>
            <button
              @click="setLocale('en')"
              class="space-x-2 rtl:space-x-reverse flex justify-center items-center"
            >
              <Icon name="flag:us-4x3" size="12" />
              <span class="text-sm text-blue-600 group-hover:text-blue-900">{{
                $t("english")
              }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- -- landing-page -->
      <div class="flex justify-center w-screen h-screen">
        <div class="flex flex-col space-y-4 justify-center items-center">
          <div class="relative group hover:cursor-pointer">
            <div
              class="border-4 border-gray-100 transition-all duration-300 ease-in group-hover:border-gray-300 border-spacing-1 rounded-full shadow-md"
            >
              <img
                src="~/assets/img/avatar.jpeg"
                alt="user"
                class="h-24 w-24 object-cover rounded-full"
              />
            </div>
          </div>
          <h1 class="text-6xl text-black dark:text-white">
            {{ $t("welcome") }}
          </h1>
          <span class="text-lg text-gray-400 dark:text-gray-300">{{
            $t("subtitle")
          }}</span>
          <div
            data-aos="fade-up"
            class="flex items-center justify-center w-3/4"
          >
            <a
              class="cursor-pointer flex items-center bg-blue-200 rounded-md px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-blue-200 transition-colors duration-150 ease-in"
            >
              {{ $t("downloadbtn") }}
              <Icon class="mx-1" name="line-md:downloading-loop" size="18" />
            </a>
          </div>
        </div>
      </div>

      <div class="container py-3 mx-auto">
        <!-- -- About Me -->
        <section>
          <title-header
            :title="$t('about')"
            icon-name="ic:baseline-account-circle"
          />
          <div class="bg-gray-100 dark:bg-stone-800 rounded-md relative p-4">
            <about-me-info-boxes />

            <!-- HR -->
            <div class="flex items-end justify-end my-2">
              <img
                src="~/assets/img/avatar.jpeg"
                alt="HR"
                class="h-8 w-8 object-cover rounded-full mx-2 order-2"
              />
              <div
                class="bg-blue-500 px-3 py-2 rounded-t-lg rounded-bl-lg text-white"
              >
                <span class="text-sm">Would you introduce yourself to me?</span>
              </div>
            </div>
          </div>
        </section>

        <!-- -- Project  -->
        <section>
          <TitleHeader :title="$t('projects')" icon-name="ph:shapes-fill" />
          <project-card-list />
        </section>

        <!-- -- Experience -->
        <section>
          <title-header
            :title="$t('experiences')"
            icon-name="pepicons-pop:stars"
          />
          <experience-card-list />
        </section>

        <section>
          <send-message />
        </section>

        <!-- -- contact me -->
        <section>
          <title-header
            :title="$t('contact')"
            icon-name="mdi:transition-masked"
          />
          <div class="rounded bg-gray-100 dark:bg-stone-800">
            <social-media-list />
          </div>
        </section>
      </div>
    </main>
  </Html>
</template>
