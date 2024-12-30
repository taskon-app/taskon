<script setup lang="ts">
import { Button, type ButtonProps } from "@taskon/ui"
import { ref } from "vue"

// TODO better type support
const variant = ref<ButtonProps["variant"]>("default")
const size = ref<ButtonProps["size"]>("default")
</script>

<template>
  <Button :variant="variant" :size="size">btn text</Button>
  <div>
    variants:
    <button @click="variant = 'default'">default</button>
    <button @click="variant = 'outline'">outline</button>
    <button @click="variant = 'secondary'">secondary</button>
  </div>
  <div>
    sizes
    <button @click="size = 'default'">default</button>
    <button @click="size = 'sm'">sm</button>
    <button @click="size = 'lg'">lg</button>
  </div>
</template>
