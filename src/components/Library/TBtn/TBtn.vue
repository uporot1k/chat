<template>
  <button
    @click="$emit('click')"
    class="t-btn"
  >
    <slot/>
  </button>
</template>
<script>
import './TBtn.styl';

export default {

};
</script>
