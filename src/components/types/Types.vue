<template>
    <Page class="page">
        <ActionBar class="action-bar" title="Types">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')" />
        </ActionBar>
        <StackLayout>
            <StackLayout class="types">
                <Button class="btn btn-primary"  @tap="$router.push('/types/add')" text="Add type" />
                <StackLayout v-for="(type, index) in types" :key="type.title" orientation="horizontal" class="type"
                    @tap="manageType(index)">
                    <Label class="h2 text-left" textWrap=true width="100%" :text="type.title" />
                </StackLayout>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    export default {
        data() {
            return {
                types: [],
                newType: {
                    name: '',
                    number: ''
                }
            }
        },
        methods: {
            manageType(number) {
                this.$router.push('/types/' + number)
            }
        },
        mounted() {
            this.types = JSON.parse(appSettings.getString('types') || '[]')
        }
    }
</script>

<style scoped>
    .types {
        margin-left: 20px;
        margin-right: 20px;
    }
</style>