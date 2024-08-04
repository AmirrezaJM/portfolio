<template>
    <div class="relative">
        <div v-for="SingleExprinece in ExperineceCardsInfo.experinceCardData" :key="SingleExprinece.id">
            <experience-card :job="SingleExprinece.job" :companyName="SingleExprinece.companyName" :typeOfWork="SingleExprinece.typeOfWork" :date="SingleExprinece.date" />
        </div>
    </div>
</template>

<script setup>
    const ExperineceCardsInfo = reactive({
        experinceCardData: [
            {
                id:1,
                job: "CEO and Front-End Developer",
                companyName:"Pody",
                typeOfWork: "part-time",
                date: "Sep 2019 - Apr 2020",
            },
            {
                id:2,
                job: "Front-End Developer",
                companyName:"Almas Teb Rayan",
                typeOfWork: "full-time",
                date: "Apr 2020 - Jul 2021",
            },
            {
                id:3,
                job: "Front-End Developer",
                companyName:"Zharfa Academy",
                typeOfWork: "full-time",
                date: "May 2021 - Aug 2021",
            },
            {
                id:4,
                job: "Teacher",
                companyName:"Zharfa Academy",
                typeOfWork: "part-time",
                date: "Jun 2021 - Jan 2023",
            },
            {
                id:5,
                job: "FrontEnd Engineer",
                companyName:"PAP Group Ltd.",
                typeOfWork: "full-time",
                date: "Sep 2022 - Jul 2023",
            },
        ]
    })
</script>

