<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Error Page">
      <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
    </ActionBar>
    
        <StackLayout class="crisis-assistants">
          <Label class="body" textWrap=true text="Ooops!"/>
          <Label class="body" textWrap=true :text="$router.currentRoute.path"/>
        </StackLayout>
  </Page>
</template>

<script>
export default {

}
</script>

<style>

</style>
