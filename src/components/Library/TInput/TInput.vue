<template>
  <div class="t-input t-control">
    <div class="t-input__label"
      v-if="label"
    >
      {{label}}
    </div>
    <div class="t-input__slot">
      <input class="t-input__control"
        :value="computedValue"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
import './TInput.styl';

export default {
  props: {
    label: String,
    value: String,
  },
  data() {
    return {
      newValue: this.value,
    };
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
  methods: {
    onInput(event) {
      this.$nextTick(() => {
        if (event.target) {
          this.computedValue = event.target.value;
          this.$emit('input', this.computedValue);
        }
      });
    },
  },
};
</script>
