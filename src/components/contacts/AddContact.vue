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
    import * as TNSPhone from 'nativescript-phone';
    import * as permissions from "nativescript-permissions";

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

                    permissions.requestPermission(android.Manifest.permission.SEND_SMS, "Permission Needed To Send SMS")
                        .then(() => {
                            TNSPhone.sms([this.number], "Hello! I have added you as a trusted person I can contact in the event of a crisis using CrisisMH. Please let me know if you want to be removed from this list. This message was sent automatically by CrisisMH.")
                                .then((args) => {
                                    console.log(JSON.stringify(args));
                                }, (err) => {
                                    console.log('Error: ' + err);
                                });
                        })
                        .catch((e) => {
                            console.log(JSON.stringify(e));
                        });


                    this.$router.push('/contacts/' + (newLength - 1))
                }
            }
        }
    }
</script>

<style>
</style>