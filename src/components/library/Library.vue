<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Library">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
        </ActionBar>
        <StackLayout class="items">
            <ListView id="listview" for="item in items" height="80%" @itemTap="manageItem">
                <v-template>
                    <StackLayout orientation="horizontal">
                        <Image :src="item.file._android" height="80px" />
                        <Label :text="item.title" />
                    </StackLayout>
                </v-template>
            </ListView>
            <Button class="btn btn-primary" @tap="$router.push('/items/add')" text="Add item" />
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";

    export default {
        data() {
            return {
                items: []
            }
        },
        methods: {
            manageItem(event) {
                this.$router.push('/items/' + event.index)
            }
        },
        mounted() {
            this.items = JSON.parse(appSettings.getString('items') || '[]')
        }
    }
</script>

<style scoped>
    .items {
        margin-left: 20px;
        margin-right: 20px;
    }
</style>