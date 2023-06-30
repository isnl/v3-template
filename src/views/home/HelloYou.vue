<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import WaterMark from './WaterMark.vue'

const visible = ref(true)

const options = {
  text: ['Hello World', '我是水印', 'https://baidu.com'],
  fontSize: 14,
  fontFamily: 'Microsoft YaHei',
  color: 'rgba(0, 0, 0, 0.8)',
  rotate: -30,
  opacity: 0.5,
  width: 200,
  height: 100
}

onMounted(() => {})
</script>
<template>
  <div class="w-200 h-100 mx-auto bg-#ccc relative">
    <WaterMark :options="options" :visible="visible" />
    <el-button type="primary" @click="visible = !visible">开/关</el-button>
  </div>
</template>
