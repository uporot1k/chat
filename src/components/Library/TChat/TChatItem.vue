<template>
  <div class="t-chat-item">
    <div class="t-chat-item__name">{{message.name}}</div>
    <div class="t-chat-item__text">
      {{message.text}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: Object,
  },
};
</script>
