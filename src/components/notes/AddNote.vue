<template>
    <Page class="page">
        <ActionBar class="action-bar" title="New Note">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/notes')" />
        </ActionBar>
        <StackLayout>
            <StackLayout>
                <TextField v-model="author" hint="Author" />
                <TextField v-model="title" hint="Title" />
                <TextView v-model="content" hint="Note" />
                <Button class="btn btn-primary" @tap="addNote" text="Add note" />
                <Button class="btn" @tap="$router.push('/notes')" text="Cancel" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    export default {
        data() {
            return {
                author: '',
                title: '',
                content: ''
            }
        },
        methods: {
            addNote() {
                const notes = JSON.parse(appSettings.getString('notes') || '[]')
                if (this.author && this.content) {
                    const newLength = notes.push({
                        author: this.author,
                        title: this.title,
                        content: this.content
                    })
                    appSettings.setString('notes', JSON.stringify(notes))

                    this.$router.push('/notes/' + (newLength - 1))
                }
            }
        }
    }
</script>

<style>
</style>