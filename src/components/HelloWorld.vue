<template>
  <div>
    <button @click="inc2">
      Increment {{ count2 }}
    </button>
    <button @click="inc">
      Composition Api Increment {{ state.count }}
    </button>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue-demi';

export default defineComponent({
  setup() {
    const state = reactive({ count: 0 });

    return {
      state,
      inc() {
        state.count += 1;
      },
    };
  },
  data() {
    return {
      count2: 0,
    };
  },
  methods: {
    inc2() {
      this.count2 += 1;
    },
  },
});
</script>