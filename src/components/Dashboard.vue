<template>
    <div>
        <h1>DASHBOARD</h1>
        <v-card title="ΔΥΝΑΜΟΛΟΓΙΟ ΗΜΕΡΑΣ" variant="outlined" class="card-container">
        <personel-report-component
            title="ΑΞΙΟΜΑΤΙΚΟΙ"
            numberOfPersonelAbsent="2"
            numberOfPersonelAtWork="2"
            numberOfPersonelPresent="2"
            totalNumberOfPersonel="6"
        />
        <personel-report-component
            title="ΕΜΘ-ΜΟΝΙΜΟΙ"
            numberOfPersonelAbsent="2"
            numberOfPersonelAtWork="2"
            numberOfPersonelPresent="2"
            totalNumberOfPersonel="6"
        />
        <personel-report-component
            title="ΥΠΑΞΙΟΜΑΤΙΚΟΙ"
            numberOfPersonelAbsent="2"
            numberOfPersonelAtWork="2"
            numberOfPersonelPresent="2"
            totalNumberOfPersonel="6"
        />
        <personel-report-component
            title="ΟΒΑ"
            numberOfPersonelAbsent="2"
            numberOfPersonelAtWork="2"
            numberOfPersonelPresent="2"
            totalNumberOfPersonel="6"
        />
        <personel-report-component
            title="ΣΤΑΤΙΩΤΕΣ"
            numberOfPersonelAbsent="2"
            numberOfPersonelAtWork="2"
            numberOfPersonelPresent="2"
            totalNumberOfPersonel="6"
        />
        </v-card>
    </div>
</template>

<script>
    import PersonelReportComponent from "@/components/PersonelReportComponent"
    export default {
        name: 'DashBoard',
        components: {
            PersonelReportComponent
        }
    }
</script>

<style scoped>
    .card-container {
        margin: 15%;
    }

</style> 