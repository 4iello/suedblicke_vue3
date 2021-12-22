<template>
  <svg
    baseprofile="tiny"
    fill="#ececec"
    stroke="black"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".2"
    version="1.2"
    viewBox="0 0 2000 857"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
  >
    <WorldPaths />
    <MapMarker />
  </svg>
</template>

<script>
import WorldPaths from "./WorldPaths.vue"
import MapMarker from "./MapMarker.vue"
export default {
  name: "Worldmap",
  components: { MapMarker, WorldPaths },
  props: { marker: Array },
}
</script>
<style></style>
