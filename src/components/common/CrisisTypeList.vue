<template>
    <ListView for="(type, index) in allCrisisTypes">
        <v-template>
            <StackLayout class="details" orientation="horizontal">
                <Label :text="type.title" />
                <Switch :checked="included(index)" @tap="toggle(index)" />
            </StackLayout>
        </v-template>
    </ListView>
</template>

<script>
export default {
    props: ['active-types'],
    data() {
        return {
            crisisTypes: []
        }
    },
    methods: {
        update() {
            this.$emit('updated', this.crisisTypes)
        },
        onItemTap(event) {
            event.item.active = !event.item.active
        },
        included(index) {
            return this.activeTypes.includes(index)
        },
        toggle(index) {
            this.$emit('toggle', index)
        }
    },
    mounted() {
        this.crisisTypes = JSON.parse(appSettings.getString('crisisTypes') || '[]')
    }
}
</script>

<style>

</style>
