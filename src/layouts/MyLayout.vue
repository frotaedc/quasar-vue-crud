<template>
  <q-layout view="hHh LpR fFf">

    <q-header reveal elevated class="bg-blue-grey-10 text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <div class="text-h4 text-blue-grey-5">
          <q-avatar>
            <img src="~/assets/sad.svg">
          </q-avatar>
            Alô Sejus
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/index" label="Home" />
        <q-route-tab to="/foragidos" label="Foragidos" />
        <q-route-tab to="/page2" label="Denúncia" />
        <q-route-tab to="/page3" label="Sugestão" />
        <q-route-tab to="/page4" label="Contato" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="left" side="left" overlay bordered>
      <div class="bg-blue-grey-8 q-pa-sm text-blue-grey-5 text-h6 full-height
">
        Opções
      </div>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
