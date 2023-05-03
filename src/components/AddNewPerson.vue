<template>
    <div class="container">
        <h1>ΕΙΣΑΓΩΓΗ ΝΕΟΥ ΠΡΟΣΩΠΟΥ</h1>
        <form>
            <v-text-field label="ΟΝΟΜΑ" v-model="person.firstName"/>
            <v-text-field label="ΕΠΩΝΥΜΟ" v-model="person.lastName"/>
            <v-text-field label="ΑΜ" v-model="person.milId"/>
            <v-select
            v-model="person.milRank"
                label="ΒΑΘΜΟΣ"
                :items="milRanks"
                item-title="fullName"
                item-value="id"
            >
            </v-select>
            <v-text-field label="ΗΜΕΡΟΜΙΝΙΑ ΓΕΝΗΣΗΣ" type="date" v-model="person.dateOfBirth"/>
            <v-text-field label="ΚΑ" type="number" v-model="person.normalVacationDays"/>
            <v-text-field label="ΑΜΔ" type="number" v-model="person.sortVacationDays"/>
            <v-text-field label="ΚΙΝΙΤΟ ΤΗΛΕΦΩΝΟ" v-model="person.mobilePhoneNumber"/>
            <v-text-field label="ΕΜΑΙΛ" v-model="person.email"/>
            <v-text-field label="ΟΝΟΜΑ ΠΑΤΕΡΑ" v-model="person.fatherName"/>
            <v-text-field label="ΕΠΑΓΓΕΛΜΑ ΠΑΤΕΡΑ" v-model="person.fathersJob"/>
            <v-text-field label="ΟΝΟΜΑ ΜΗΤΕΡΑΣ" v-model="person.mothersName"/>
            <v-text-field label="ΕΠΑΓΓΕΛΜΑ ΜΗΤΕΡΑΣ" v-model="person.mothersJob"/>
            <v-text-field label="ΦΩΤΟΓΡΑΦΕΙΑ" v-model="person.imageUrl"/>
            <v-btn
                class="me-4"
                color="success"
                @click="submit"
            >
                submit
            </v-btn>
        </form>
    </div>
</template>

<script>
    import ranks from '@/api/ranks'
    import personel from '@/api/personel'
    export default {
        name: 'AddNewPerson',
        data() {
            return {
                person: {},
                milRanks: []
            }
        },
        mounted() {
            this.getAllRanks()
        },
        methods: {
            submit() {
                this.person.dateOfBirth = new Date(this.person.dateOfBirth).toISOString()
                const selectedRankId = this.person.milRank
                this.person.milRank = {}
                this.person.milRank.id = selectedRankId
                console.log(this.person)
                personel.addNewPerson(this.person)
            },
            getAllRanks() {
                ranks.getAllRanks().then(response => {
                    console.log(response.data)
                    this.milRanks = response.data
                })
            }
        }

    }
</script>

<style scoped>
    .container {
        margin: 20px;
    }

</style>