<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Item">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/items')" />
        </ActionBar>
        <StackLayout class="details">
            <TextField v-model="title" hint="Title" />
            <Image :src="file._android" hint="Item" />
            <Button class="btn btn-primary" @tap="updateItem" text="Update item" />
            <Button class="btn btn-danger" @tap="confirmRemoval" text="Remove item" />
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    import * as dialogs from "ui/dialogs";
    export default {
        data() {
            return {
                title: '',
                file: ''
            }
        },
        methods: {
            updateItem() {
                const items = JSON.parse(appSettings.getString('items') || '[]')
                items[this.$route.params.index].title = this.title
                items[this.$route.params.index].file = this.file
                appSettings.setString('items', JSON.stringify(items))
                
                this.$router.push('/items')
            },
            confirmRemoval() {
                dialogs.confirm("Are you sure you want to remove this item?").then(this.removeItem);
            },
            removeItem(result) {
                if (result) {
                    const items = JSON.parse(appSettings.getString('items') || '[]')
                    items.splice(this.$route.params.index, 1)
                    appSettings.setString('items', JSON.stringify(items))
                    this.$router.push('/items')
                }
            }
        },
        mounted() {
            const items = JSON.parse(appSettings.getString('items') || '[]')
            const item = items[this.$route.params.index]

            this.title = item.title
            this.file = item.file
        }
    }
</script>

<style scoped>
    .details {
        margin-left: 20px;
        margin-right: 20px;
    }
</style>