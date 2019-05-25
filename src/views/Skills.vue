<template>
    <div class="mt-5" id="Skills">
        <v-container mx-5 px-5 my-1 py-0 flex fill-height>
            <v-layout row wrap mb-5>
                <v-flex xs12  class="intro">
                    <p class="text-xs-center">Skills</p>
                </v-flex>
                <v-flex xs1 sm3 d-flex/>
                <v-flex xs10 sm6 text-xs-center mb-5 pb-5>
                    <v-select
                            v-model="category"
                            :items="items"
                            color="rgb(8, 253, 216)"
                            label="Skills By Category"
                    />
                </v-flex>
                <v-flex xs1 sm3 />
                <v-flex xs12>
                    <v-layout row wrap>
                        <v-flex v-for="(n, index) in skills" :key="index" xs12 sm12 md6 lg4 xl3>
                            <v-container  elevation="0" height="300"
                                          max-width="460">
                                <v-layout>
                                    <v-flex xs6>
                                        <v-img
                                                :src="n.src"
                                                height="150px"
                                                width="154px"
                                                class="transparent1"
                                                alt="Avatar" />
                                    </v-flex>
                                    <v-flex>
                                        <v-card-title primary-title text-color>
                                            <div>
                                                <h3 class="mb-2 text-color"> {{ n.name }} </h3>
                                                <i class="text-color">{{ n.proficiency }}</i>
                                                <p class="text-color"> {{ n.description}} </p>
                                            </div>
                                        </v-card-title>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    import getSkills from '../utils/functions';

    export default {
        watch: {
            category(to){
                this.skills = getSkills(to);
            }
        },
        data () {
            return {
                category: 'All',
                items: ['All', 'Web Development', 'Databases', 'Languages', 'Tools'],
                skills: getSkills('All')
            }
        },
    }
</script>
<style scoped>
    .text-color{
        opacity: 1;
        color:black;
    }
</style>
