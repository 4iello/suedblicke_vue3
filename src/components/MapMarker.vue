<template>
  <g id="Marker">
    <circle
      class="{showTopicInfo?showInfo: ''"
      v-for="(marker, index) in marker"
      :key="marker.id"
      @click="showTopicInfo(index)"
      :r="marker.showTopicInfo ? 30 : 10"
      :cx="marker.positionX"
      :cy="marker.positionY"
      fill="red"
    />
  </g>
</template>
<script>
export default {
  data() {
    return {
      marker: [
        {
          topicInfo: "hello maria",
          positionX: 1000,
          positionY: 200,
          id: 1,
          showTopicInfo: false,
        },
        {
          topicInfo: "hello banana",
          positionX: 400,
          positionY: 1000,
          id: 2,
          showTopicInfo: false,
        },
      ],
    }
  },
  methods: {
    showTopicInfo(markerIndex) {
      this.marker[markerIndex].showTopicInfo =
        !this.marker[markerIndex].showTopicInfo
    },
  },
}
</script>
<style></style>
