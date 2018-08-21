<template>
    <Page class="page">
        <ActionBar class="action-bar" title="New Assitant">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/contacts')" />
        </ActionBar>
        <StackLayout>
            <StackLayout>
                <TextField v-model="name" hint="Name" />
                <TextField v-model="number" hint="Number" keyboardType="phone" />
                <Button class="btn btn-primary" @tap="addContact" text="Add assistant" />
                <Button class="btn" @tap="$router.push('/contacts')" text="Cancel" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    export default {
        data() {
            return {
                name: '',
                number: ''
            }
        },
        methods: {
            addContact() {
                const contacts = JSON.parse(appSettings.getString('contacts') || '[]')
                if (this.name && this.number) {
                    const newLength = contacts.push({
                        name: this.name,
                        number: this.number
                    })
                    appSettings.setString('contacts', JSON.stringify(contacts))

                    this.$router.push('/contacts/' + (newLength - 1))
                }
            }
        }
    }
</script>

<style>
</style>