
<template>
  <div class="auth-page">
    <TContainer>
      <AuthForm
        v-if="!auth"
        @submit="submitForm"
      />

      <div class="text"
        v-else
      >
        Вы уже авторизованы пройдите в <router-link to="/chat">чат</router-link>
      </div>
    </TContainer>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  methods: {
    submitForm(login) {
      this.$store.dispatch('login', login);
    },
  },
  computed: {
    ...mapState({
      auth: state => state.User.auth,
    }),
  },
};

</script>
