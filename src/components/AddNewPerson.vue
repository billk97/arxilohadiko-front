<template>
    <div class="container">
        <h1>ΕΙΣΑΓΩΓΗ ΝΕΟΥ ΠΡΟΣΩΠΟΥ</h1>
        <form>
            <v-text-field label="ΟΝΟΜΑ" v-model="person.firstName"/>
            <v-text-field label="ΕΠΩΝΥΜΟ" v-model="person.lastName"/>
            <v-text-field label="ΑΜ" v-model="person.milId"/>
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
            <v-select label="ΒΑΘΜΟΣ" v-model="person.rank"/>
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
    export default {
        name: 'AddNewPerson',
        data() {
            return {
                person: {}
            }
        },
        methods: {
            submit() {
                console.log(this.person)
            }
        }

    }
</script>

<style scoped>
    .container {
        margin: 20px;
    }

</style>