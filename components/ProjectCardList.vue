<template>
    <div class="relative">
        <div v-for="projectcard in ProjectCardsInfos.projectsCardData" :key="projectcard.id">
            <project-card :job="job" :title-application="titleApplication" :type-application="typeApplication" :date="date" />
        </div>
    </div>
</template>

<script setup>
    const ProjectCardsInfos = reactive({
        projectsCardData: [
            {
                id:1,
                job: "Fullstack application",
                titleApplication:"30nama",
                typeApplication: "Nuxt js",
                date: "28 Jun 2024",
            },
            {
                id:2,
                job: "Fullstack application",
                titleApplication:"thread-clone",
                typeApplication: "Nuxt js",
                date: "25 Jul 2023",
            },
            {
                id:3,
                job: "Fullstack application",
                titleApplication:"mysteryMovies",
                typeApplication: "Nuxt js ",
                date: "30 Jun 2023",
            },
            {
                id:4,
                job: "Fullstack application",
                titleApplication:"twitter-clone",
                typeApplication: "Next js Application",
                date: "2 Nov 2023",
            },
            {
                id:5,
                job: "Swift application",
                titleApplication:"Rick and morty",
                typeApplication: "IOS Application",
                date: "8 Sep 2023",
            },

            {
                id:6,
                job: "Spotify application",
                titleApplication:"Spotify-clone",
                typeApplication: "Nextjs Application",
                date: "6 Oct 2023",
            },

        ]
    })
</script>
