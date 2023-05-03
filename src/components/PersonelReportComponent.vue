<template>
    <div>
        <h2>{{title}}</h2>
            <div class="text-container missing-container">
                <v-card-item>
                    ΑΠΟΝΤΕΣ
                </v-card-item>
                <v-card-item>
                    {{numberOfPersonelAbsent}}
                </v-card-item>
            </div>
            <div class="text-container at-work-container">
                <v-card-item>
                    ΚΟΛΙΟΜΕΝΟΙ
                </v-card-item>
                <v-card-item>
                    {{numberOfPersonelAtWork}}
                </v-card-item>
            </div>
            <div class="text-container present-container">
                <v-card-item>
                    ΠΑΡΟΝΤΕΣ
                </v-card-item>
                <v-card-item>
                    {{numberOfPersonelPresent}}
                </v-card-item>
            </div>
            <div class="text-container total-container">
                <v-card-item>
                    ΣΥΝΟΛΟ
                </v-card-item>
                <v-card-item>
                    {{totalNumberOfPersonel}}
                </v-card-item>
            </div>
    </div>
</template>


<script>
    export default {
        props: {
            title: String,
            numberOfPersonelAbsent: Number,
            numberOfPersonelAtWork: Number,
            numberOfPersonelPresent: Number,
            totalNumberOfPersonel: Number
        }
    }
</script>


<style scoped>
    .text-container {
        display: flex;
        justify-content: space-between;
        border: 1px solid #ccc;
        opacity: 0.8;
        font-weight: bold;
        font-size: large;
    }
    .missing-container {
        background-color: #EF9A9A;
    }
    .at-work-container {
        background-color: #FFF59D;
    }
    .present-container {
        background-color: #A5D6A7;
    }
    .total-container {
        background-color: #42A5F5;
        font-size: larger;
    }
</style>