<template>
    <v-container data-aos="fade-up" py-5 id="Contact">
        <v-layout row wrap>
            <v-flex xs12 sm6>
                <v-flex xs11 my-5 text-xs-center>
                    <p  class="intro" >Contact Me </p>
                    <p class="contact">If you have any questions. Please feel free to contact me.</p>
                    <template>
                        <v-form>
                            <v-container>
                                <v-layout>
                                    <v-flex xs12 md6>
                                        <v-text-field
                                                v-model="firstname"
                                                label="First name"
                                                required/>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <v-text-field
                                                v-model="lastname"
                                                label="Last name"
                                                required/>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12 md12>
                                        <v-text-field
                                                v-model="email"
                                                label="E-mail"
                                                required />
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex xs12 md12>
                                        <v-text-field
                                                v-model="question"
                                                label="Question"
                                                required />
                                    </v-flex>
                                </v-layout>
                                <v-layout text-xs-center>
                                    <v-flex>
                                        <a :href="`mailto:rayat.a@husky.neu.edu?&subject=Question From The Site&body=${firstname}${lastname} has asked about ${question} and the email is ${email}`">
                                            <v-btn outline large  color="cyan">
                                                Submit
                                            </v-btn>
                                        </a>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-form>
                        <p><b>
                            <v-icon color="green">phone</v-icon>
                            +1(857)-424-6016 |
                            <v-icon color="blue">mail</v-icon>
                            rayat.a@husky.neu.edu</b></p>
                    </template>
                </v-flex>

            </v-flex>
            <v-flex xs6>
                <v-container my-0 py-0>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.516660029836!2d-71.10872058454464!3d42.33150687918881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3798579ea533b%3A0x75978aafec921b54!2s151+Hillside+St%2C+Boston%2C+MA+02120!5e0!3m2!1sen!2sus!4v1550532089067"
                            width="600" height="600" frameborder="0" style="border:0" allowfullscreen>
                    </iframe>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data () {
            return {
                question: null,
                firstname: null,
                lastname: null,
                email: null
            }
        }
    }
</script>
<style scoped>
    .contact{
        color:black;
        font-weight: 300!important;
        font-family: 'Satisfy', cursive;
    }
</style>
