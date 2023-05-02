<template>
    <div>
        <h1>Personel</h1>
        <div class="container">
            <v-btn
                prepend-icon="mdi-account-plus"
                color="success"
                @click="goToAddNewPerson"
            >Προσθήκη</v-btn>
        </div>
        <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="persons"
            :loading="loading"
        />
    </div>
</template>

<script>
    import personel from '@/api/personel'
    export default {
        name: 'PersonelList',
        data: () => ({
            persons: [],
            headers: [
                {title: 'ΕΠΩΝΥΜΟ', key: 'lastName', align: 'end'},
                {title: 'ΟΝΟΜΑ', key: 'firstName', align: 'end'},
                {title: 'ΑΜ', key: 'milId', align: 'end'},
                {title: 'ΤΗΛ', key: 'mobileNumber', align: 'end'}
            ],
            itemsPerPage: 40,
            loading: true,
        }),
        mounted() {
            personel.getAllActivePersonel().then(r => {
                this. persons = r.data
                this.loading = false
            })
        },
        methods: {
            editProfile(person) {
                console.log('click')
                this.$router.push(`/personel/${person.id}`)
            },
            goToAddNewPerson() {
                this.$router.push(`/personel/add`)
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: flex-end;
    }
</style>