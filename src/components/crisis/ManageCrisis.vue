<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Manage Crisis">
        </ActionBar>
        <StackLayout>
            <Button @tap="goToContact" class="btn btn-primary">Contact Somebody</Button>
            <Button @tap="goToHome" class="btn">End Crisis</Button>
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    export default {
        data() {
            return {
                crisisIndex: -1,
                activeCrisis: {}
            }
        },
        methods: {
            goToHome() {
                this.$router.push('/home')
            },
            goToContact() {
                this.$router.push('/crisis/' + this.crisisIndex + '/contact')
            }
        },
        mounted() {
            this.crisisIndex = parseInt(this.$route.params.index)
            const allCrisisTypes = JSON.parse(appSettings.getString('types') || '[]')
            this.activeCrisis = allCrisisTypes[this.crisisIndex]
        }
    }
</script>