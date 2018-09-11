<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Activate Crisis">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
        </ActionBar>
        <StackLayout>
            <ListView for="(type, index) in allCrisisTypes">
                <v-template>
                    <Button class="btn btn-primary" @tap="setCrisis(index)">{{type.title}}</Button>
                </v-template>
            </ListView>
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    export default {
        data() {
            return {
                allCrisisTypes: []
            }
        },
        mounted() {
            this.allCrisisTypes = JSON.parse(appSettings.getString('types') || '[]')
        },
        methods: {
            setCrisis(index){
                console.log('index', index)
                this.$router.push('/crisis/' + index)
            }
        }
    }
</script>

<style>

</style>
