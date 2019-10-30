<template>
  <div class="auth-form">

    <h2 class="auth-form__title">
      Форма авторизации
    </h2>

    <TInput
      v-model="login"
      label="Введите ваш логин"
      :error="error"
      @input="inputHandler"
    />
    <div class="text" v-if="error">
      {{error}}
    </div>
    <TBtn
      @click="submitHandler"
    >
      Войти
    </TBtn>

  </div>
</template>
<script>
import './AuthForm.styl';

export default {
  data() {
    return {
      login: '',
      error: null,
    };
  },
  methods: {
    submitHandler() {
      if (this.login.length > 4) {
        this.$emit('submit', this.login);
      } else {
        this.error = 'Ваш логин должен состоять минимум из 5 букв';
      }
    },
    inputHandler(value) {
      if (value.length > 4) {
        this.error = null;
      }
    },
  },
};
</script>
