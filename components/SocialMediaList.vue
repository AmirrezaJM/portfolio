<template>
  <div class="flex items-center space-x-5 rtl:space-x-reverse p-3">
    <div v-for="singleSM in SocialMediaInfos.socialMediaList" :key="singleSM.id">
        <social-media
          :icon-name="singleSM.iconName"
          :link="singleSM.link"
          :title="singleSM.title"
        />
    </div>
  </div>
</template>
<script setup>
const SocialMediaInfos = reactive({
  socialMediaList: [
    {
      id: 1,
      iconName: "uil:github",
      link: "https://github.com/AmirrezaJM",
      title: "AmirrezaJM",
    },
    {
      id: 2,
      iconName: "uil:twitter",
      link: "https://x.com/ARJoolim",
      title: "ARJoolim",
    },
    {
      id: 3,
      iconName: "uil:linkedin",
      link: "https://www.linkedin.com/in/amirreza-jolani-mameghani-b15084165/",
      title: "AmirrezaJM",
    },
    {
      id: 4,
      iconName: "uil:envelope",
      link: "mailto:amirreza.jolani1998@gmail.com",
      title: "amirreza.jolani1998@gmail.com",
    },
  ],
});
</script>
