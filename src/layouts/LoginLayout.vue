<template>
  <q-layout view="Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LoginLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
