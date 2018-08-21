<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Crisis Assitants">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
        </ActionBar>
        <StackLayout>
            <StackLayout class="crisis-assistants">
                <StackLayout v-for="(contact, index) in contacts" :key="contact.number" orientation="horizontal" class="crisis-assistant"
                    @tap="manageContact(index)">
                    <Label class="h2 text-left" textWrap=true width="50%" :text="contact.name" />
                    <Label class="h2 text-right" textWrap=true width="50%" :text="contact.number" />
                </StackLayout>

                <Button class="btn btn-primary"  @tap="$router.push('/contacts/add')" text="Add assistant" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    export default {
        data() {
            return {
                contacts: [],
                newContact: {
                    name: '',
                    number: ''
                }
            }
        },
        methods: {
            manageContact(number) {
                this.$router.push('/contacts/' + number)
            }
        },
        mounted() {
            this.contacts = JSON.parse(appSettings.getString('contacts') || '[]')
        }
    }
</script>

<style scoped>
    .crisis-assistants {
        margin-left: 20px;
        margin-right: 20px;
    }
</style>