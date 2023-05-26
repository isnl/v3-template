<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WaterMark from './WaterMark.vue'
const wrapper = ref<HTMLElement>()

onMounted(() => {})
</script>
<template>
  <div class="w-200 h-100 mx-auto bg-#ccc relative" ref="wrapper">
    <WaterMark />
  </div>
</template>
