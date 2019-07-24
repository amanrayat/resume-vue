<template>
    <div class="my-5" id="Education">
        <template class="mx-5 px-5 flex fill-height">
            <transition name="component-fade" mode="flip-left">
                <v-layout row wrap>
                    <v-flex xs12  class="intro" mb-5>
                        <p class="text-xs-center">Education</p>
                    </v-flex>
                    <v-flex xs11 fill-height offset-xs1>
                        <v-container>
                            <v-layout class="som" row wrap  data-aos="flip-right"
                                      data-aos-offset="300"
                                      data-aos-easing="ease-in-sin">
                                <v-flex xs12 sm3 hidden-sm-and-down>
                                    <v-avatar
                                            class="mt-5"
                                            slot="activator"
                                            size="200px">
                                        <img
                                                src="https://s3.amazonaws.com/staticwebsiteaman/neu.png"
                                                alt="Avatar">
                                    </v-avatar>
                                </v-flex>
                                <v-flex  xs12 sm6>
                                    <v-card class="elevation-0" >
                                        <v-card-title primary-title>
                                            <div>
                                                <h3 class="mb-2">Northeastern University. Boston MA</h3>
                                                <p class="font-italic my-0">College of Computer and Information Science,</p>
                                                <p class="font-italic">Candidate for Master of Science in Computer Science</p>
                                                <p class="font-italic mb-0">Related Coursework</p>
                                                <ul>
                                                    <li>Algorithms</li>
                                                    <li>Web Development</li>
                                                    <li>Database Management System</li>
                                                    <li>Large-Scale Parallel Data Processing using Map reduce</li>
                                                    <li>Managing Software Development</li>
                                                </ul>
                                            </div>
                                        </v-card-title>
                                    </v-card>
                                </v-flex>
                                <v-flex  xs12 sm3 hidden-sm-and-down>
                                    <v-progress-circular
                                            class="mt-5"
                                            :rotate="360"
                                            :size="200"
                                            :width="3"
                                            :value="90"
                                            color="green"
                                    >
                                        GPA 3.77
                                    </v-progress-circular>
                                </v-flex>
                            </v-layout>
                            <v-layout class="som" row wrap  data-aos="flip-right"
                                      data-aos-offset="300"
                                      data-aos-easing="ease-in-sin">
                                <v-flex xs12 sm3 hidden-sm-and-down>
                                    <v-avatar
                                            class="mt-5"
                                            slot="activator"
                                            size="200px">
                                        <img
                                                src="https://s3.amazonaws.com/staticwebsiteaman/ip.png"
                                                alt="Avatar">
                                    </v-avatar>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-card class="elevation-0">
                                        <v-card-title primary-title>
                                            <div>
                                                <h3 class="mb-2">Guru Gobind Singh Indraprastha University. Delhi, India</h3>
                                                <p class="font-italic my-0">Maharaja Surajmal Institute of Technology,</p>
                                                <p class="font-italic">Bachelors of Technology, Electronics and Communication</p>
                                                <p class="font-italic mb-0">Related Coursework</p>
                                                <ul>
                                                    <li>Object Oriented Programming Skills</li>
                                                    <li>Data Structures</li>
                                                    <li>Database Management System</li>
                                                    <li>Software Engineering</li>
                                                    <li>Operating Systems</li>
                                                </ul>
                                            </div>
                                        </v-card-title>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 sm3 hidden-sm-and-down>
                                    <v-progress-circular
                                            class="mt-5"
                                            :rotate="360"
                                            :size="200"
                                            :width="3"
                                            :value="81"
                                            color="green"
                                    >
                                        Per 81%
                                    </v-progress-circular>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </transition>
        </template>
    </div>
</template>
<script>
    export default {
    }
</script>
