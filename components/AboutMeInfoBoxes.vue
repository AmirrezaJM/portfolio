<template>
  <div class="relative">
    <div v-for="user in aboutMeInfos.userData" :key="user.id">
       <single-info-box :text="user.text" :isHR="user.isHR" :avatar="user.avatar" :avatar_alternative="user.avatar_alternative" />
    </div>
  </div>
</template>

<script setup>
const aboutMeInfos = reactive({
  userData: [
    {
      id: 1,
      text: "Hi, How are you?",
      avatar: "../assets/images/avatar.jpeg",
      avatar_alternative: "HR",
      isHR: true,
      aosPostion: "fade-left",
    },
    {
      id: 2,
      text: "Hi,I'm fine!",
      avatar: "../assets/images/avatar.jpeg",
      avatar_alternative: "user",
      isHR: false,
      aosPostion: "fade-right",
    },
    {
      id: 3,
      text: "Would you introduce yourself to me?",
      avatar: "require('@/assets/images/avatar.jpeg')",
      avatar_alternative: "HR",
      isHR: true,
      aosPostion: "fade-left",
    },
    {
      id: 4,
      text: "Sure! my name is Amirreza Jolani mameghani, I'm 26 years old",
      avatar: "../assets/images/avatar.jpeg",
      avatar_alternative: "user",
      isHR: false,
      aosPostion: "fade-right",
    },
    {
      id: 5,
      text: "Great, Amirreza would tell me what is Professional career? ",
      avatar: "../assets/images/avatar.jpeg",
      avatar_alternative: "HR",
      isHR: true,
      aosPostion: "fade-left",
      aosPostion: "fade-right",
    },

    {
      id: 6,
      text: "Well, With over four years of experience as a Front-End Developer, I have demonstrated proficiency in utilizing technologies including HTML5, CSS3 (SASS), React, and Vue framework.",
      avatar: "../assets/images/avatar.jpeg",
      avatar_alternative: "user",
      isHR: false,
      aosPostion: "fade-right",
    },

    {
      id: 7,
      text: "Nice, and do you have other technical skills?",
      avatar: "../assets/images/avatar.jpeg",
      avatar_alternative: "HR",
      isHR: true,
      aosPostion: "fade-left",
    },

    {
      id: 8,
      text: "I have experienced in JS, TS, Python and swift. Also, I know how to use with git platform , figma, and I used multiple IDEs such as vscode, webstorm and ...",
      avatar: "../assets/images/avatar.jpeg",
      avatar_alternative: "user",
      isHR: false,
      aosPostion: "fade-right",
    },

    {
      id: 9,
      text: "which language can you speak ??",
      avatar: "../assets/images/avatar.jpeg",
      avatar_alternative: "HR",
      isHR: true,
      aosPostion: "fade-left",
    },
    {
      id: 10,
      text: "Frankly speaking, Persian is my mother tongue and I can speak English fluently, also, my German level is B1 and Italian level is A1.",
      avatar: "../assets/images/avatar.jpeg",
      avatar_alternative: "user",
      isHR: false,
      aosPostion: "fade-right",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
