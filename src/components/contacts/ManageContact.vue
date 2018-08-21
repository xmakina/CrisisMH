<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Crisis Assitant">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/contacts')" />
        </ActionBar>
        <StackLayout class="details">
            <TextField v-model="name" hint="Name" />
            <TextField v-model="number" hint="Number" keyboardType="phone" />
            <Button class="btn btn-primary" @tap="updateContact" text="Update assistant" />
            <Button class="btn btn-danger" @tap="confirmRemoval" text="Remove assistant" />
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    import * as dialogs from "ui/dialogs";
    export default {
        data() {
            return {
                name: '',
                number: ''
            }
        },
        methods: {
            updateContact() {
                const contacts = JSON.parse(appSettings.getString('contacts') || '[]')
                contacts[this.$route.params.index].name = this.name
                contacts[this.$route.params.index].number = this.number
                appSettings.setString('contacts', JSON.stringify(contacts))
                
                this.$router.push('/contacts')
            },
            confirmRemoval() {
                dialogs.confirm("Are you sure you want to remove this assistant?").then(this.removeContact);
            },
            removeContact(result) {
                if (result) {
                    const contacts = JSON.parse(appSettings.getString('contacts') || '[]')
                    contacts.splice(this.$route.params.index, 1)
                    appSettings.setString('contacts', JSON.stringify(contacts))
                    this.$router.push('/contacts')
                }
            }
        },
        mounted() {
            const contacts = JSON.parse(appSettings.getString('contacts') || '[]')
            const contact = contacts[this.$route.params.index]

            this.name = contact.name
            this.number = contact.number
        }
    }
</script>

<style scoped>
    .details {
        margin-left: 20px;
        margin-right: 20px;
    }
</style>