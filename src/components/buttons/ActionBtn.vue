<template>
  <button
    role="button"
    :aria-pressed="active ? true : false"
    class="actionBtn"
    :class="{'actionBtn--active': !active}"
    @click="$emit('actionBtnToggle')"
  >
    {{ active ? "Leave study" : "Join study" }}
  </button>
</template>

<script>
export default {
  name: "ActionBtn",
  props: {
    active: Boolean
  },
}
</script>

<style scoped lang="scss">
.actionBtn{
  cursor: pointer;
  border: 1px solid darken($theme_primary, 10%);
  border-radius: 3px;
  width: 100%;
  max-width: 300px;
  font-size: 75%;
  background: $btn_primary;
  color: $text_primary;
  padding: 0.8em 2em;
  transition : border 500ms ease;

  &:hover, &:focus{
    border: 1px solid darken($theme_primary, 30%);
  }
}
.actionBtn--active{
  border: 1px solid $btn_secondary;
  background: $btn_secondary;
  color: $btn_text_contrast;
}
</style>

<style lang="scss" scoped>
  // BREAKPOINTS
  @media (min-width: $screen-sm-min) {
    .actionBtn{
      width: 80%;
      max-width: 150px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 60%;
    }
  }
  
</style>