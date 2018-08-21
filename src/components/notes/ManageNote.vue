<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Note">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/notes')" />
        </ActionBar>
        <StackLayout class="details">
            <TextField v-model="author" hint="Author" />
            <TextField v-model="title" hint="Title" />
            <TextView v-model="content" hint="Note" />
            <Button class="btn btn-primary" @tap="updateNote" text="Update note" />
            <Button class="btn btn-danger" @tap="confirmRemoval" text="Remove note" />
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    import * as dialogs from "ui/dialogs";
    export default {
        data() {
            return {
                author: '',
                title: '',
                content: ''
            }
        },
        methods: {
            updateNote() {
                const notes = JSON.parse(appSettings.getString('notes') || '[]')
                notes[this.$route.params.index].author = this.author
                notes[this.$route.params.index].title = this.title
                notes[this.$route.params.index].content = this.content
                appSettings.setString('notes', JSON.stringify(notes))
                
                this.$router.push('/notes')
            },
            confirmRemoval() {
                dialogs.confirm("Are you sure you want to remove this note?").then(this.removeNote);
            },
            removeNote(result) {
                if (result) {
                    const notes = JSON.parse(appSettings.getString('notes') || '[]')
                    notes.splice(this.$route.params.index, 1)
                    appSettings.setString('notes', JSON.stringify(notes))
                    this.$router.push('/notes')
                }
            }
        },
        mounted() {
            const notes = JSON.parse(appSettings.getString('notes') || '[]')
            const note = notes[this.$route.params.index]

            this.author = note.author
            this.title = note.title
            this.content = note.content
        }
    }
</script>

<style scoped>
    .details {
        margin-left: 20px;
        margin-right: 20px;
    }
</style>