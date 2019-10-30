<template>
  <div class="t-text-field t-control">
    <div class="t-text-field__label">

    </div>
    <div class="t-text-field__slot">
      <textarea v-model="computedValue" class="t-text-field__control"></textarea>
    </div>
  </div>
</template>
<script>
import './TTextField.styl';

export default {
  data() {
    return {
      newValue: this.value,
    };
  },
  props: {
    value: String,
  },
  computed: {
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        this.newValue = value;
        this.$emit('input', value);
      },
    },
  },
};
</script>
