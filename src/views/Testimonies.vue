<template>
    <div class="my-5" id="Work">
        <v-container px-5 my-5 flex fill-height>
            <v-layout row wrap>
                <v-flex xs12  class="intro" mb-5>
                    <p class="text-xs-center">Testimonials</p>
                </v-flex>
                <v-flex sm8 xs12 fill-height offset-sm2 data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sin">
                    <p class="quote">❝</p>
                    <p class="testimony">Aman was an intern in our Analytics group on the UI/UX team. Even though we only had him for a
                        few months, he was able to learn our complex codebase and build tools and contribute very
                        quickly. He is hard working and showed a willingness to tackle any problem no matter
                        how difficult. He would be an asset on any team.</p>
                    <p class="quote text-xs-right">❞</p>
                    <p class="name text-xs-center my-0">Sony Seng</p>
                    <p class="name text-xs-center my-0">Staff Software Engineer</p>
                    <p class="name text-xs-center my-0">Analytics R&D at TiVO</p>
                </v-flex>
                <v-flex sm8 xs12 fill-height offset-sm2 data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sin">
                    <p class="quote">❝</p>
                    <p class="testimony">I worked with Aman as he developed frontend experiences for
                        ThriveHive's internal and external data science products. These projects often
                        had nonspecific and changing requirements, but he was still able to turn around
                        polished frontend experiences while maintaining a keen sense of the needs of users
                        and of data science. Aman is a highly skilled engineer and excellent to work with.</p>
                    <p class="quote text-xs-right">❞</p>
                    <p class="name text-xs-center my-0">Benjamin Batorsky</p>
                    <p class="name text-xs-center my-0">Data Scientist</p>
                    <p class="name text-xs-center my-0">Thrivehive</p>
                </v-flex>
                <v-flex sm8 xs12 fill-height offset-sm2 data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sin">
                    <p class="quote">❝</p>
                    <p class="testimony">I had the pleasure of working with Aman at ThriveHive,
                        where he showed exceptional problem solving and engineering skills as
                        a co-op on the Data Science team. Advising and guiding him on his main project,
                        I watched him pick up a brand new framework (Vue/Vuex) and become extremely productive
                        in an incredibly short time. He did a fantastic job creating a complex, but easy to
                        use, production-ready application that provides significant value across multiple
                        teams at the company, and his persistence and positive attitude makes him a pleasure
                        to work with. Aman earns my highest recommendation..</p>
                    <p class="quote text-xs-right">❞</p>
                    <p class="name text-xs-center my-0">Nick Ford</p>
                    <p class="name text-xs-center my-0">Senior Software Engineer</p>
                    <p class="name text-xs-center my-0">Thrivehive</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<style>
    .name{
        font-size: 15px;
        font-weight: 300;
        font-style: italic;
    }
    .testimony{
        font-size: large;
        font-weight: 300;
        font-style: italic;
    }
    .quote{
        font-size: 50px;
    }
</style>
