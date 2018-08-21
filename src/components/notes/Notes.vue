<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Notes">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
        </ActionBar>
        <StackLayout class="notes">
            <StackLayout v-for="(note, index) in notes" :key="note.number" class="note"
                @tap="manageNote(index)">
                
                <Label class="h2" textWrap=true :text="note.author" />
                <Label class="h4" textWrap=true :text="note.title" />
            </StackLayout>

            <Button class="btn btn-primary"  @tap="$router.push('/notes/add')" text="Add note" />
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    export default {
        data() {
            return {
                notes: [],
                newNote: {
                    name: '',
                    number: ''
                }
            }
        },
        methods: {
            manageNote(number) {
                this.$router.push('/notes/' + number)
            }
        },
        mounted() {
            this.notes = JSON.parse(appSettings.getString('notes') || '[]')
        }
    }
</script>

<style scoped>
    .notes {
        margin-left: 20px;
        margin-right: 20px;
    }
</style>