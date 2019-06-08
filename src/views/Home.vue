<template>
    <div id="Home" class="parrellax">
        <my-intro />
        <my-skills  data-aos="fade-up" data-aos-anchor="#Skills" />
        <my-education />
        <my-projects />
        <my-experience />
        <my-testimonies />
        <my-contact />
    </div>
</template>
<script>
    import myIntro from '../components/Intro';
    import mySkills from '../views/Skills';
    import myExperience from '../views/Experience';
    import myContact from '../views/Contact';
    import myEducation from '../views/Education';
    import myProjects from '../views/Projects';
    import myTestimonies from '../views/Testimonies';

    export default {
        components: {
            myIntro,
            mySkills,
            myExperience,
            myContact,
            myEducation,
            myProjects,
            myTestimonies
        }
    }
</script>
<style>
    @media only screen and (max-width: 500px) {
        .parrellax{
            background-image: url("../assets/hero.png");
            background-blend-mode: screen;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    .intro{
        color:black;
        font-size: 65px;
        font-weight: 200!important;
    }
    html{
        height: 100%;
    }
    #app{
        color:black;
        height: 100%;
    }
    body{
        /*background-color: rgb(68, 68, 68);*/
        color:rgb(88,88,88)!important;
        height: 100%;
    }
    .parrellax{
        background-image: url("../assets/hero.png");
        min-height: 200px;
        background-attachment: fixed;
        background-position: right;
        background-repeat: no-repeat;
        background-size: 800px;
    }
</style>

