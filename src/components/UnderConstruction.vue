<template>
    <v-layout row justify-center>
        <v-dialog
                v-model="dialog"
                max-width="290"
        >
            <v-card>
                <v-card-title class="headline">Site Under Construction Right now</v-card-title>

                <v-card-text>
                    I really appreciate you stopping by.<br/>
                    I am currently updating my website using Vue JS and Vuetify.<br/>
                    Please visit the website again.
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="dialog = false"
                    >
                        No Problem I am just surfing
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>
<script>
    export default {
        data () {
            return {
                dialog: true
            }
        }
    }
</script>
