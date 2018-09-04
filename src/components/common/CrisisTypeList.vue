<template>
    <ListView for="crisisType in crisisTypes" @itemTap="onItemTap">
        <v-template>
            <StackLayout orientation="horizontal">
                <Label :text="crisisType.title" />
                <Switch v-model="crisisType.active" />
            </StackLayout>
        </v-template>
    </ListView>
</template>

<script>
export default {
    props: ['value'],
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
        }
    },
    mounted() {
        this.crisisTypes = JSON.parse(appSettings.getString('crisisTypes') || '[]')
        for(const valueIndex in this.value){
            for(const typeIndex in this.crisisTypes) {
                if(this.value[valueIndex].title === this.crisisTypes[typeIndex].title){
                    this.crisisTypes[typeIndex].active = true
                    break
                }
            }
        }
    }
}
</script>

<style>

</style>
