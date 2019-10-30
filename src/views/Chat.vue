<template>
  <div class="page">
    <TContainer>
      <TChat
        v-if="auth"
      />
      <span
        v-else
      >
        Необходимо <router-link to="/auth">авторизоваться </router-link>
      </span>
    </TContainer>

  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      auth: state => state.User.auth,
    }),
  },
};

</script>
