<template>
    <v-card height="100%" width="6%">
        <v-navigation-drawer
                :style="{'max-width': '65px', color:'rgb(68, 68, 68)'}"
                fixed
                dark
                class="grey darken-4 white--text"
                permanent
        >
            <v-toolbar flat>
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://s3.amazonaws.com/staticwebsiteaman/pic1.jpg">
                        </v-list-tile-avatar>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider class="mt-2"/>
            <v-list class="pt-5">
                <v-list-tile
                        color="white"
                        v-for="item in items"
                        :key="item.title"
                >
                    <v-list-tile-action class="my-3">
                        <a :href="'#'+ item.title" v-smooth-scroll><v-icon color="rgb(150, 114, 255)" class="py-3 my-3">{{ item.icon }}</v-icon></a>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
            <v-divider class="mt-2"/>
            <v-list class="pt-5">
                <v-list-tile
                        v-for="item in media_icons"
                        :key="item.src"
                >
                    <v-list-tile-action class="my-3">
                        <a :href=item.link target="_blank"><img :src= item.src></a>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
    /* eslint-disable no-console */

    export default {
        data () {
            return {
                color: 'yellow',
                drawer: true,
                items: [
                    { title: 'Home', icon: 'home' },
                    { title: 'Skills', icon: 'brightness_5' },
                    { title: 'Education', icon: 'account_balance' },
                    { title: 'Profile', icon: 'account_circle' },
                    { title: 'Work', icon: 'desktop_mac' },
                    { title: 'Contact', icon: 'contact_phone' }
                ],
                media_icons: [
                    {src: 'https://img.icons8.com/color/24/000000/linkedin.png', link:'https://www.linkedin.com/in/aman-rayat'},
                    {src: 'https://img.icons8.com/color/24/000000/github.png', link:'https://github.com/amanrayat'},
                    {src: 'https://img.icons8.com/color/24/000000/facebook.png', link:'https://www.facebook.com/amanrayat0007'}
                ],
                right: null
            }
        },
    methods: {
        clicked(e) {
            if(e.target.innerHTML === 'home'){
                this.color = 'yellow';
                this.$router.push('/')
            }
            else if(e.target.innerHTML === 'account_circle'){
                this.color = 'yellow';
                this.$router.push('/#Education')
            }
            else if(e.target.innerHTML === 'brightness_5'){
                this.color = 'indigo';
                this.$router.push('/#skills')
            }
            else if(e.target.innerHTML === 'desktop_mac'){
                this.color = 'orange';
                this.$router.push('/#experience')
            }
            else if(e.target.innerHTML === 'contact_phone'){
                this.color = 'cyan';
                this.$router.push('/contact')
            }
        }
    }
    }
</script>
<style>
    a{
        text-decoration: none;
    }
</style>
