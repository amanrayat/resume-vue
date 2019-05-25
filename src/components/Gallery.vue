<template>
    <v-layout>
        <v-flex xs12 sm8 offset-sm1>
            <v-card>
                <v-container grid-list-sm fluid>
                    <v-layout row wrap>
                        <v-flex
                                v-for="n in items"
                                :key="n"
                                xs4
                                d-flex
                        >
                            <v-card flat tile class="d-flex">
                                <v-img
                                        :src="n"
                                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                >
                                    <v-layout
                                            slot="placeholder"
                                            fill-height
                                            align-center
                                            justify-center
                                            ma-0
                                    >
                                    </v-layout>
                                </v-img>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        data(){
            return {
                items : ['https://s3.amazonaws.com/staticwebsiteaman/js.png',
                    'https://s3.amazonaws.com/staticwebsiteaman/vue.png',
                    'https://s3.amazonaws.com/staticwebsiteaman/python.jpeg',
                    'https://s3.amazonaws.com/staticwebsiteaman/react.png',
                    'https://s3.amazonaws.com/staticwebsiteaman/node1.png',
                    'https://s3.amazonaws.com/staticwebsiteaman/html.png',
                    'https://s3.amazonaws.com/staticwebsiteaman/css.png',
                    'https://s3.amazonaws.com/staticwebsiteaman/java.png',
                    'https://s3.amazonaws.com/staticwebsiteaman/angular.png'

                ]
            }
        }
    }
</script>
