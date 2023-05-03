<template>
    <div class="list-container">
        <div class="container">
            <v-btn
                prepend-icon="mdi-account-plus"
                color="success"
                @click="goToAddNewPerson"
                style="margin: 1%"
            >
                Προσθήκη
            </v-btn>
        </div>
        <v-data-table-server
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="persons"
            :loading="loading"
            class="table"
            @click:row="handleRowClick"
        >
            <template v-slot:item="row">
                <tr>
                    <td>{{row.item.raw.milRank.fullName}} ( {{row.item.raw.milRank.shortName}} )</td>
                    <td>{{row.item.raw.lastName}}</td>
                    <td>{{row.item.raw.firstName}}</td>
                    <td>{{row.item.raw.milId}}</td>
                    <td>{{row.item.raw.mobileNumber}}</td>
                    <td>
                        <v-btn color="info" @click="editProfile(row.item.raw.id)">ΛΕΠΤΟΜΕΡΙΕΣ</v-btn>
                    </td>
                </tr>
            </template>
        </v-data-table-server>
    </div>
</template>

<script>
    import personel from '@/api/personel'
    export default {
        name: 'PersonelList',
        data: () => ({
            persons: [],
            headers: [
                {title: 'ΒΑΘΜΟΣ', value: 'milRank.fullName', align: 'start'},
                {title: 'ΕΠΩΝΥΜΟ', key: 'lastName', align: 'end'},
                {title: 'ΟΝΟΜΑ', key: 'firstName', align: 'end'},
                {title: 'ΑΜ', key: 'milId', align: 'end'},
                {title: 'ΤΗΛ', key: 'mobileNumber', align: 'end'},
                {title: 'ΕΠΙΛΟΓΕΣ', align: 'end'}
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
            editProfile(id) {
                console.log('click')
                this.$router.push(`/personel/${id}`)
            },
            goToAddNewPerson() {
                this.$router.push(`/personel/add`)
            },
            handleRowClick(row) {
                console.log(row)
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: flex-end;
    }
    .list-container {
        margin: 3%
    }
    .table {
        border: 1px solid #467280;
        border-radius: 10px;
    }
</style>