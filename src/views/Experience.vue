<template>
    <div class="my-5" id="Work">
        <v-container my-5 flex fill-height>
            <v-layout row wrap offset-lg1>
                <v-flex xs12  class="intro" mb-5>
                    <p class="text-xs-center">Experience</p>
                </v-flex>
                <v-flex xs12 fill-height offset-sm1>
                    <v-timeline :dense="dense">
                        <v-timeline-item
                                v-for="(n,index) in experience"
                                color="white"
                                :key="index"
                                large>
                            <v-avatar slot="icon">
                                <img :src="n.src">
                            </v-avatar>
                            <span class="black-text company" slot="opposite">{{n.cName}}</span>
                            <span class="black-text mx-4 font-italic" slot="opposite">{{n.duration}}</span>
                            <v-container
                                    color="rgb(8, 253, 216)"
                                    class="elevation-2 transparent">
                                <p class="headline black--text">{{n.position}}</p>
                                <p class="black--text font-italic">{{n.location}}</p>
                                <ul class="black--text">
                                    <li v-for="(l, index) in n.responsibility" :key="index">{{l}}</li>
                                </ul>
                            </v-container>
                        </v-timeline-item>
                    </v-timeline>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                experience:[
                    {
                        cName:'ThriveHive',
                        src:'https://s3.amazonaws.com/staticwebsiteaman/th.png',
                        location: 'Boston,MA',
                        duration:'Jan, 2019 - Present',
                        position: 'Software Developer Coop',
                        responsibility: ['Developed a tool for Data Science team for faster development and deployment of web applications using VueJs and Vuex.',
                            'The tool reduced the Application development and deployment time by more than 60%.',
                            'Developing the frontend of a project named MSWAG, using VueJs and Vuex, aimed to provide feedback and suggestions to the\n' +
                            'small business owners for activities across social interacting platforms like Facebook, Google, Yelp and Instagram']
                    },
                    {
                        cName:'TiVo',
                        location: 'Boston,MA',
                        src:'https://s3.amazonaws.com/staticwebsiteaman/tivo.jpg',
                        duration:'June, 2018 - Sept, 2018',
                        position: 'Frontend Software Intern',
                        responsibility: ['Developed a web application using ReactJS, Redux, Thunk and other peripheral frameworks for\n' +
                        'TAD (Targeted Audience Delivery), a key product at TiVo aimed at observing the TV viewership trend,\n' +
                        'following agile software development',
                            'Designed frontend of a product named PROMO, using AngularJS, Handlebars and JQuery',
                            'Build an interactive movie plugin for company slack bot using B9 node package fetching data from\n' +
                            'a remote API and giving highlights of the movie within the platform.']
                    },
                    {
                        cName:'Northeastern University',
                        location: 'Boston,MA',
                        src:'https://s3.amazonaws.com/staticwebsiteaman/neu.png',
                        duration:'Jan, 2018 - May, 2018 | Sept, 2018 - Dec, 2018',
                        position: 'Graduate Teaching Assistant',
                        responsibility: ['Assisting faculty at College of Computer and Information Science in conducting lectures and labs for the Course\n' +
                        'Computer Science and its application.']
                    }]
            }
        },
        computed: {
            dense() {
                return this.$vuetify.breakpoint.name === 'xs';
            }
        }
    }
</script>
<style scoped>
    img {
        color: white;
    }
    .company {
        font-size: x-large;
    }
    .transparent {
        background-color: white!important;
        opacity: 0.55;
        border-color: transparent!important;
    }
</style>
