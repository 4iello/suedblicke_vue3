<template>
  <div class="App">
    {{ topics }}
    <Worldmap id="Worldmap" :topics="topics" />
  </div>
</template>

<script>
import Worldmap from "./components/Worldmap.vue"
export default {
  name: "App",
  data() {
    return {
      sizeOfWorldMap: {
        aspectRatio: Number(2000 / 857).toFixed(3),
        width: "",
        height: "",
      },
    }
  },
  components: {
    Worldmap,
  },
  mounted() {
    this.getTopics()
  },
  computed: {
    topics() {
      return this.$store.state.topics
    },
    isRatioBiggerThenMap() {
      const { aspectRatio, width, height } = { ...this.sizeOfWorldMap }
      return aspectRatio > width / height
    },
    windowRatio() {
      return this.sizeOfWorldMap.width / this.sizeOfWorldMap.height
    },
  },
  created() {
    this.addWindowHandler()
  },
  unmounted() {
    this.removeWindowHandler()
  },
  methods: {
    async getTopics() {
      let res = await fetch("https://sandy.uber.space/items/topic")
      let topics = await res.json()
      console.log("hello", topics)
      this.$store.commit("getTopics", topics.data)
    },
    handleWindowResize() {
      this.sizeOfWorldMap.width = window.innerWidth
      this.sizeOfWorldMap.height = window.innerHeight
    },
    addWindowHandler() {
      window.addEventListener("resize", this.handleWindowResize)
      this.handleWindowResize()
    },
    removeWindowHandler() {
      window.removeEventListener("resize", this.handleWindowResize)
    },
  },
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.App {
  width: 100vw;
  height: 100vh;
  display: flex;
  place-content: center;
  justify-content: center;
}
</style>
