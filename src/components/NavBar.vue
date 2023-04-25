<template>
    <div>
        <v-app-bar
            color="blue-grey"
            prominent
        >
        <v-app-bar-nav-icon variant="text" @click="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-btn icon="mdi-home" @click="goToDashboard"/>
        <v-toolbar-title>ΑΡΧΙΛΟΧΑΔΙΚΟ</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-account"></v-btn>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            location="left"
            app
            class="yellow"
        >
            <v-list
                :items="items"
            >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    @click="testMethod(item)"
                >
                <v-list-item-title v-text="item.title"/>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        data: () => ({
            drawer: false,
            items: [
                {
                    title: 'ΠΡΟΣΩΠΙΚΟ',
                    value: '/personel'
                },
                {
                    title: 'ΗΚΑΛ',
                    value: 'ΗΚΑΛ'
                },
                {
                    title: 'ΑΔΕΙΕΣ-ΑΠΠΑΛΑΓΕΣ',
                    value: 'ΑΔΕΙΕΣ-ΑΠΠΑΛΑΓΕΣ'
                },
            ]
        }),
        watch: {
            group () {
            this.drawer = false
            }
        },
        methods: {
            goToDashboard () {
                console.log('clicked go to dashboard')
                this.$router.push('/')
            },
            testMethod(item) {
                console.log('clicked test method', item.value)
                this.$router.push(item.value)
            }
        }
    }
</script>