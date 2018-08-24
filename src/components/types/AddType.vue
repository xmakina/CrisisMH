<template>
    <Page class="page">
        <ActionBar class="action-bar" title="New Type">
            <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/types')" />
        </ActionBar>
        <StackLayout>
            <StackLayout>
                <TextField v-model="title" hint="Type" />
                <Button class="btn btn-primary" @tap="addType" text="Add type" />
                <Button class="btn" @tap="$router.push('/types')" text="Cancel" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import * as appSettings from "application-settings";
    export default {
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addType() {
                const types = JSON.parse(appSettings.getString('types') || '[]')
                if (this.title) {
                    const newLength = types.push({
                        title: this.title
                    })
                    appSettings.setString('types', JSON.stringify(types))

                    this.$router.push('/types/' + (newLength - 1))
                }
            }
        }
    }
</script>

<style>
</style>