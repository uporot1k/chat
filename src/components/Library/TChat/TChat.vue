<template>
  <div class="t-chat">

    <TChatBody>
      <TChatItem
        v-for="(item, index) in messages"
        :key="index"
        :message="item"
      />
    </TChatBody>

    <TChatPanel>
      <TTextField
        v-model="text"
      />
      <TBtn @click="sendMessage">Отправить</TBtn>
    </TChatPanel>

  </div>
</template>
<script>
import { mapState } from 'vuex';
import './TChat.styl';

export default {
  data() {
    return {
      text: '123',
    };
  },
  methods: {
    sendMessage() {
      if (this.text.length > 0) {
        this.$store.dispatch('sendWsMessage', this.text);
      }
    },
  },
  computed: {
    ...mapState({
      messages: state => state.Connection.messages,
    }),
  },
};

</script>
