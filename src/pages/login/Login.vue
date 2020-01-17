<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-3">
        <q-card class="my-card">
          <q-card-section>
            <div class="row justify-center">
              <img align="center" alt="Quasar logo" src="~/assets/alo.png">
            </div>
            <!-- <div class="text-h6" align="center">Alô Sejus</div> -->
          </q-card-section>
          <q-card-section>
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
              <q-input v-model="email" label="E-mail *" filled type="email" hint="insira seu Email"/>
              <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Password with toggle">
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-toggle v-model="accept" label="Lembrar minhas credenciais" />
              <div align="center">
                <q-btn label="Entrar" to="/index" type="submit" color="primary"/>
                <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  // name: 'PageName',
}
</script>
