<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Type">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/types')" />
        </ActionBar>
        <StackLayout class="details">
            <TextField v-model="title" hint="Title" />
            <Button class="btn btn-primary" @tap="updateType" text="Update type" />
            <Button class="btn btn-danger" @tap="confirmRemoval" text="Remove type" />
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    import * as dialogs from "ui/dialogs";
    export default {
        data() {
            return {
                title: ''
            }
        },
        methods: {
            updateType() {
                const types = JSON.parse(appSettings.getString('types') || '[]')
                types[this.$route.params.index].title = this.title
                appSettings.setString('types', JSON.stringify(types))
                
                this.$router.push('/types')
            },
            confirmRemoval() {
                dialogs.confirm("Are you sure you want to remove this type?").then(this.removeType);
            },
            removeType(result) {
                if (result) {
                    const types = JSON.parse(appSettings.getString('types') || '[]')
                    types.splice(this.$route.params.index, 1)
                    appSettings.setString('types', JSON.stringify(types))
                    this.$router.push('/types')
                }
            }
        },
        mounted() {
            const types = JSON.parse(appSettings.getString('types') || '[]')
            const type = types[this.$route.params.index]

            this.title = type.title
        }
    }
</script>

<style scoped>
    .details {
        margin-left: 20px;
        margin-right: 20px;
    }
</style>