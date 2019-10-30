<template>
  <div class="t-chat-item" :data-id="key">
    <div class="t-chat-item__name">{{message.name}}</div>
    <div class="t-chat-item__text" v-text="message.text"></div>
    <div class="t-chat-item__created">
      {{message.created}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: Object,
  },
  data() {
    return {
      key: this.$vnode.key,
    };
  },
};
</script>
