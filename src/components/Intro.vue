<template>
    <v-container style="min-height: 100%">
        <v-layout row wrap>
            <v-flex xs12 sm6 md8>
                <div class="intro typewriter">
                    <h1><p>Hi,</p> <p>I'm Aman,</p></h1>
                    <h2 class="text-muted">{{role}}</h2>
                    <p class="skills">VueJS / ReactJS / Javascript / Java / Python</p>
                    <v-btn outline color="green">
                        <a href="#Contact"> Contact Me</a>
                    </v-btn>
                    <v-btn outline color="green">
                        <a href="https://staticwebsiteaman.s3.amazonaws.com/resume_aug_new.pdf">Resume</a>
                    </v-btn>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default{
        data(){
            return {
                role : 'Software Developer.'
            }
        }
    }
</script>
<style scoped>
    .skills{
        font-size: 20px;
    }
    .typewriter .skills{
        font-family: "Helvetica Neue",serif;
        /*color: white;*/
        color:black;
        white-space: nowrap; /* Keeps the content on a single line */
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        animation:
                typing 3.5s steps(30, end)
    }
    .intro{
        margin-top: 25%;
        margin-bottom: 20%;
        margin-left:10%;
    }
    /* GLOBAL STYLES */
    .typewriter h2 {
        color:black;
        /*color:rgb(8, 253, 216);*/
        font-size: 30px;
        font-family: "Helvetica Neue";
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        white-space: nowrap; /* Keeps the content on a single line */
        animation-delay: 12s;
        animation:
                typing 3.5s steps(30, end)
    }
    a {
        text-decoration: none;
        color: green;
    }

    /* DEMO-SPECIFIC STYLES */
    .typewriter h1 {
        /*color:rgb(8, 253, 216);*/
        color:black;

        font-size: 60px;
        font-family: "Helvetica Neue";
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        white-space: nowrap; /* Keeps the content on a single line */
        animation:
                typing 3.5s steps(30, end)
    }

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

</style>
