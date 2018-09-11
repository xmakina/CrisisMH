<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Contact Somebody">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/crisis/' + this.crisisIndex)" />
        </ActionBar>
        <StackLayout>
            <ListView for="contact in contacts">
                <v-template>
                    <Button class="btn btn-primary" @tap="sendMessage(contact)">Contact {{contact.name}}</Button>
                </v-template>
            </ListView>
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
                activeCrisis: {},
                contacts: [],
                crisisIndex: -1
            }
        },
        methods: {
            sendMessage(contact) {
                permissions.requestPermission(android.Manifest.permission.SEND_SMS, "Permission Needed To Send SMS")
                    .then(() => {
                        TNSPhone.sms([contact.number],
                                `${contact.name}, I am currently experiencing a ${this.activeCrisis.title} crisis. Please can you contact me as soon as you get this?`
                            )
                            .then((args) => {
                                console.log(JSON.stringify(args));
                            }, (err) => {
                                console.log('Error: ' + err);
                            });
                    })
                    .catch((e) => {
                        console.log(JSON.stringify(e));
                    });
            }
        },
        mounted() {
            this.crisisIndex = parseInt(this.$route.params.index)
            const allCrisisTypes = JSON.parse(appSettings.getString('types') || '[]')
            this.activeCrisis = allCrisisTypes[this.crisisIndex]
            this.contacts = JSON.parse(appSettings.getString('contacts') || '[]').filter(contact => contact.crisisTypes
                .includes(this.crisisIndex))
        }
    }
</script>

<style>

</style>