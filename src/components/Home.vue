<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Home"/>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/contacts')">Contacts</Button>
      <Button class="btn btn-primary" @tap="$router.push('/notes')">Notes</Button>
    </StackLayout>

  </Page>
</template>
