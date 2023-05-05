<script setup>
import { useReader } from "@/composables/reader";
import { StreamBarcodeReader } from "vue-barcode-reader";
const { onDecode, onLoaded } = useReader();
</script>
<template>
  <StreamBarcodeReader
    @decode="onDecode"
    @loaded="onLoaded"
  ></StreamBarcodeReader>
</template>
