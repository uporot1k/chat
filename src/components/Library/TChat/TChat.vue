<template>
  <div class="t-chat">

    <TChatBody ref="chat-body">
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
      unread: null,
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
  mounted() {
    this.$store.subscribe((mutation) => {
      console.log(this.$children[0]);
      console.log(mutation);
      if (mutation.type === 'MUTATE_MESSAGES') {
        const chatBody = this.$children[0].$el;
        const space = chatBody.scrollHeight - chatBody.scrollTop - chatBody.offsetHeight;
        this.$nextTick(() => {
          if (space < 350) {
            chatBody.scrollTop = chatBody.scrollHeight;
          } else {
            // this.unread;
          }
        });
      }
    });
  },
};

</script>
