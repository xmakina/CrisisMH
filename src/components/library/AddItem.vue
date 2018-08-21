<template>
    <Page class="page">
        <ActionBar class="action-bar" title="New Item">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/items')" />
        </ActionBar>
        <StackLayout>
            <StackLayout>
                <TextField v-model="title" hint="Title" />
                <StackLayout>
                    <Image v-if="file" :src="file" height="100px" />
                </StackLayout>
                <StackLayout>
                    <Button v-if="!file" @tap="loadImage">Browse</Button>
                </StackLayout>
                <Button class="btn btn-primary" @tap="addItem" text="Add item" />
                <Button class="btn" @tap="$router.push('/items')" text="Cancel" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    import * as imagepicker from "nativescript-imagepicker";
    export default {
        data() {
            return {
                title: '',
                file: null
            }
        },
        methods: {
            loadImage() {
                let context = imagepicker.create({
                    mode: "single" // use "multiple" for multiple selection
                });
                context
                    .authorize()
                    .then(function () {
                        return context.present();
                    })
                    .then(this.updateImage)
            },
            updateImage(selection) {
                for (const index in selection) {
                    const selected = selection[index]
                    this.file = selected
                }
            },
            addItem() {
                const items = JSON.parse(appSettings.getString('items') || '[]')
                if (this.title && this.file) {
                    const newLength = items.push({
                        title: this.title,
                        file: this.file
                    })
                    appSettings.setString('items', JSON.stringify(items))

                    this.$router.push('/items/' + (newLength - 1))
                }
            }
        }
    }
</script>

<style>
</style>