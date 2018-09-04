<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home" />

    <StackLayout>
      <Button class="btn" @tap="$router.push('/contacts')">Assistants</Button>
      <Button class="btn" @tap="$router.push('/notes')">Notes</Button>
      <Button class="btn" @tap="$router.push('/items')">Comfort Library</Button>
      <Button class="btn" @tap="$router.push('/types')">Crisis Types</Button>
    </StackLayout>

  </Page>
</template>

<script>
  import * as appSettings from "application-settings";

  export default {
    mounted() {
      if (JSON.parse(appSettings.getString('types') || '[]').length === 0) {
        appSettings.setString('types', JSON.stringify([{
            title: 'Anxiety'
          },
          {
            title: 'Self Harm'
          },
          {
            title: 'Disassociated'
          }
        ]))
      }

      if (JSON.parse(appSettings.getString('contacts') || '[]').length === 0) {
        appSettings.setString('contacts', JSON.stringify([{
          name: 'Jim',
          number: '01234 567890',
          crisisTypes: [0, 1]
        }, {
          name: 'John',
          number: '07773 444222',
          crisisTypes: [0, 2]
        }]))
      }


    }
  }
</script>