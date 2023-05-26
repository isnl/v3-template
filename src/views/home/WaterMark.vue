<template>
  <div class="watermark-container" ref="wrapperRef"></div>
</template>

<script setup lang="ts">
// 找到父元素判断是否有position
// TODO: 多行水印、多行水印对齐方式、zIndex、fillText的第2、3个参数
// 方法: 更新、显示、隐藏、销毁、盲水印
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  text: { type: String, default: '我是水印我是水印' },
  font: { type: String, default: '14px' },
  color: { type: String, default: 'rgba(0, 0, 0, 0.3)' },
  rotate: { type: Number, default: -40 },
  opacity: { type: Number, default: 0.5 },
  width: { type: Number, default: 120 },
  height: { type: Number, default: 80 }
})

const wrapperRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const canvas = document.createElement('canvas')
  canvas.width = props.width!
  canvas.height = props.height!
  const ctx = canvas.getContext('2d')!
  ctx.font = props.font!
  ctx.fillStyle = props.color!
  ctx.rotate((props.rotate! * Math.PI) / 180)
  ctx.fillText(props.text!, 0, props.height)

  wrapperRef.value!.style.backgroundImage = `url(${canvas.toDataURL()})`
  wrapperRef.value!.style.opacity = String(props.opacity!)
})

onBeforeUnmount(() => {
  if (wrapperRef.value) {
    wrapperRef.value.remove()
  }
})
</script>

<style scoped>
.watermark-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
</style>
