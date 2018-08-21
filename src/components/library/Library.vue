<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Library">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
        </ActionBar>
        <StackLayout class="items">
            <GridLayout columns="33%, 33%, 33%" rows="auto">
                <Image v-for="(item, index) in items" :key="item.number" @tap="manageItem(index)" :src="item.file._android"
                />
            </GridLayout>

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
            manageItem(number) {
                this.$router.push('/items/' + number)
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