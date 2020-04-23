<template>
  <div class="studies__statusWrap">
    <p class="studies__enrolled">
      {{ enrolled ? "Enrolled" : "Not Enrolled" }}
    </p>
    <p
      v-if="status.toLowerCase() !== 'not started'"
      class="studies__status"
      :class="{'studies__status--complete': status.toLowerCase() === 'completed'}"
    >
      {{ status }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "StatusIndicator",
    props: {
      enrolled: {
        type: Boolean,
        default: false,
      },
      status: {
        type: String,
        default: "not started",
      },
    },
  }
</script>

<style lang="scss" scoped>
.studies__statusWrap{
  width: 100%;
  height: 100%;
}
.studies__enrolled{
  position: absolute;
  left: 0;
  display: inline-block;
  text-align: center;
  font-size: 90%;
  text-transform: uppercase;
  color: $btn_secondary;
}
.studies__status{
  position: absolute;
  right: 0;
  display: inline-block;
  text-align: center;
  margin-left: auto;
  font-size: 80%;
  text-transform: uppercase;
  border-radius: 1.5em;
  background-color: $label_primary;
  padding: 0.2em 0.7em;
  color: $btn_text_contrast;
  font-size: bold;
}
.studies__status--complete{
  background: #4DB7A4;
}
</style>

<style lang="scss" scoped>
  // BREAKPOINTS
  @media (min-width: $screen-sm-min) {
    // change order so the text is first
    .studies__enrolled, .studies__status{
      position: initial;
      font-size: 70%;
    }
    .studies__statusWrap{
      position: absolute;
      text-align: center;
      height: initial;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .studies__enrolled{
      display: block;
      width: 100%;
      margin: 0;
    }
    .studies__status{
      margin-left:0;
      margin-top: 0.3em;
    }
  }
</style>