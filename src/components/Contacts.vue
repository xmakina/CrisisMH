<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Crisis Assitants">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
        </ActionBar>
<StackLayout>
        <StackLayout v-if="add">
            <TextField v-model="newContact.name" hint="Name" />
            <TextField v-model="newContact.number" hint="Number" keyboardType="phone" />
            <Button class="btn btn-primary" @tap="addContact" :disabled="!(newContact.name && newContact.number)" text="Add assistant" />
        </StackLayout>

        <StackLayout class="crisis-assistants">
            <StackLayout v-for="contact in contacts" :key="contact.number" orientation="horizontal" class="crisis-assistant">
                <Label class="h2 text-left" textWrap=true width="50%" :text="contact.name" />
                <Label class="h2 text-right" textWrap=true width="50%" :text="contact.number" />
            </StackLayout>
            
            <Button class="btn btn-primary" v-if="!add" @tap="add = true" text="Add assistant" />
        </StackLayout>
</StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                contacts: [{
                    name: 'Billy',
                    number: '01234 455444'
                }],
                add: false,
                newContact: {
                    name : '',
                    number: ''
                }
            }
        },
        methods: {
            addContact() {
                this.contacts.push({name: this.newContact.name, number: this.newContact.number})
                this.newContact.name = ''
                this.newContact.number = ''
                this.add = false
            }
        }
    }
</script>

<style scoped>
.crisis-assistants{
    margin-left: 20px;
    margin-right: 20px;
}
</style>