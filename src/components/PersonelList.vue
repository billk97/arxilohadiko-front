<template>
    <div>
        <h1>Personel</h1>
        <v-list lines="three">
            <v-list-item
                v-for="(person, i) in persons"
                :key= "i"
            >
                <template v-slot:prepend>
                    <v-avatar color="grey-lighten-1">
                        <v-icon color="white" icon="mdi-account"></v-icon>
                    </v-avatar>
                    ΑΣΜ: {{person.milId}}
                    {{person.lastName}}
                    {{person.firstName}}
                    
                    {{person.mobileNumber}}
                </template>
                <template v-slot:append>
                <v-btn prepend-icon="mdi-information" color="blue" @click="editProfile(person)">
                    ΕΠΕΞΕΡΓΑΣΙΑ
                </v-btn>
                </template>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
    import personel from '@/api/personel'
    export default {
        name: 'PersonelList',
        data: () => ({
            persons: []
        }),
        mounted() {
            personel.getAllActivePersonel().then(r => {
                this. persons = r.data
            })
        },
        methods: {
            editProfile(person) {
                console.log('click')
                this.$router.push(`/personel/${person.id}`)
            }
        }
    }
</script>