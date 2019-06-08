<template>
    <div id="Profile">
        <v-container flex>
            <v-layout row wrap>
                <v-flex xs12  class="intro" mb-5>
                    <p class="text-xs-center">Projects</p>
                </v-flex>
                <v-flex xs12 fill-height offset-xs1>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md6 lg4 xl3>
                            <v-container  elevation="0" height="300"
                                          max-width="460">
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-img
                                                src="https://s3.amazonaws.com/staticwebsiteaman/beer.png"
                                                height="200px"
                                        />
                                    </v-flex>
                                    <v-flex>
                                        <v-card-title primary-title text-color>
                                            <div>
                                                <div class="headline">Beerewery</div>
                                                <span class="grey--text">Beer Recommendation and Event Planning System.</span>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <a href="https://github.com/amanrayat/CS5610_fall_2018_trailblazers" target="_blank">
                                                <v-btn flat color="blue">Github</v-btn>
                                            </a>
                                            <v-spacer></v-spacer>
                                            <v-btn icon @click="show = !show">
                                                <v-icon>{{ show ?'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-flex>
                                    <v-flex>
                                        <v-slide-y-transition>
                                            <v-card-text v-show="show">
                                                <ul>
                                                    <li>
                                                        Designed an interactive web application which provides the curated feedback for your favorite beer and the events taking
                                                        place at a brewery of your choice. The users can share their experiences and follow the feedbacks of their friends
                                                    </li>
                                                    <li>
                                                        Implemented using ReactJS in frontend, NodeJS on backend, Mongoose as ORM and MongoDB as Database.
                                                    </li>
                                                </ul>
                                            </v-card-text>
                                        </v-slide-y-transition>

                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                        <v-flex xs12 sm12 md6 lg4 xl3>
                            <v-container  elevation="0" height="300"
                                          max-width="460">
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-img
                                                src="https://s3.amazonaws.com/staticwebsiteaman/gulp.png"
                                                height="200px"
                                        />
                                    </v-flex>
                                    <v-flex>
                                        <v-card-title primary-title text-color>
                                            <div>
                                                <div class="headline">Gulp - It</div>
                                                <span class="grey--text">Restaurant review and discussion ecosystem.</span>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <a href="https://github.com/amanrayat/Database-Project-2018" target="_blank">
                                                <v-btn flat color="blue">Github</v-btn>
                                            </a>
                                            <v-spacer></v-spacer>
                                            <v-btn icon @click="show = !show">
                                                <v-icon>{{ show ?'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-flex>
                                    <v-flex>
                                        <v-slide-y-transition>
                                            <v-card-text v-show="show">
                                                <ul>
                                                    <li>
                                                        Developed a web application that provides a platform for customers to find, review and rate a restaurant.
                                                        Also, restaurant owners can enlist restaurants and keep track of customer feedback.
                                                    </li>
                                                    <li>
                                                        Implemented using ReactJS in frontend, Java Spring Boot on backend, AWS RDS and MySQL as Database,
                                                        applying RESTful standards for web services to fetch data from the Opentable third party API.
                                                    </li>
                                                </ul>
                                            </v-card-text>
                                        </v-slide-y-transition>

                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                        <v-flex xs12 sm12 md6 lg4 xl3>
                            <v-container  elevation="0" height="300"
                                          max-width="460">
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-img
                                                src="https://s3.amazonaws.com/staticwebsiteaman/Screen+Shot+2019-04-21+at+3.02.54+PM.png"
                                                height="200px"
                                        />
                                    </v-flex>
                                    <v-flex>
                                        <v-card-title primary-title text-color>
                                            <div>
                                                <div class="headline">Mini Flick</div>
                                                <span class="grey--text">Movies Ratings and synopsis system.</span>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <a href="https://github.com/amanrayat/miniflick" target="_blank">
                                                <v-btn flat color="blue">Github</v-btn>
                                            </a>
                                            <v-spacer></v-spacer>
                                            <v-btn icon @click="show = !show">
                                                <v-icon>{{ show ?'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-flex>
                                    <v-flex>
                                        <v-slide-y-transition>
                                            <v-card-text v-show="show">
                                                <ul>
                                                    <li>
                                                        Deployed a web-based application using NodeJS, Express, MongoDB stack and integrated it with Omdb API
                                                        allowing user to search movies, write reviews and make recommendations. Users can also add movies to
                                                        wish list based on reviews by people they are following and interact with each other through comments.
                                                    </li>
                                                    <li>
                                                        Used RESTful API standards along with HTML, CSS, Bootstrap to make it user friendly and responsive.
                                                    </li>
                                                </ul>
                                            </v-card-text>
                                        </v-slide-y-transition>

                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                        <v-flex xs12 sm12 md6 lg4 xl3>
                            <v-container  elevation="0" height="300"
                                          max-width="460">
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-img
                                                src="https://s3.amazonaws.com/staticwebsiteaman/plag.png"
                                                height="200px"
                                        />
                                    </v-flex>
                                    <v-flex>
                                        <v-card-title primary-title text-color>
                                            <div>
                                                <div class="headline">Plagiarism Detector</div>
                                                <span class="grey--text">Source code plagiarism detections application.</span>
                                            </div>
                                        </v-card-title>
                                        <v-card-actions>
                                            <a href="https://github.com/amanrayat/Plagiarism-Detector" target="_blank">
                                                <v-btn flat color="blue">Github</v-btn>
                                            </a>
                                            <v-spacer></v-spacer>
                                            <v-btn icon @click="show = !show">
                                                <v-icon>{{ show ?'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-flex>
                                    <v-flex>
                                        <v-slide-y-transition>
                                            <v-card-text v-show="show">
                                                <ul>
                                                    <li>
                                                        Designed source code plagiarism detector for multifile Python project based with ReactJS frontend,
                                                        Java Spring Boot on Backend, and AWS RDS as Database.
                                                    </li>
                                                    <li>
                                                        Web Portal where projects can be checked for similarity based on source code’s abstract syntax tree taking help
                                                        of java parser library
                                                    </li>
                                                </ul>
                                            </v-card-text>
                                        </v-slide-y-transition>

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
    export default {
        data: () => ({
            show: false
        })
    }
</script>
