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
  export default {
    mounted() {

    }
  }
</script>