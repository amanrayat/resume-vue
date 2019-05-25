<template>
    <v-container fill-height align-center my-5 py-5>
        <v-layout>
            <v-flex text-xs-center>
                <v-container>
                    <p class="intro">Hey... i am loading</p>
                    <v-progress-linear color="rgb(8, 253, 216)" :indeterminate="true"/>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        props : ['color'],
        data(){
            return{
            }
        }
    }
</script>
<style scoped>
    .intro{
        font-size: 35px;
        font-weight: 300!important;
    }
</style>
