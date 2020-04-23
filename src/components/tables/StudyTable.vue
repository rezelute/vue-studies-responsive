
<template>
  <section class="studies">
    <h3>Studies</h3>
    <!-- <p>{{ $mq }} This shows that you can use the package to hide/show components based on breakpoints</p> -->

    <ul class="noList studiesList">
      <li
        v-for="(study, index) in studies"
        :key="index"
        class="studies__item"
      >
        <div class="studies__text">
          <h3 class="studies__title">
            {{ study.title }}
            <img
              v-if="study.title.toLowerCase() === 'marmite'"
              class="marmite"
              src="@/assets/marmite.png"
              alt="You will either love it or hate it"
            >
          </h3>
          <p class="studies__researcher">
            Run by: {{ study.researcher }}
          </p>
        </div>

        <div class="studies__statusArea">
          <StatusIndicator
            :enrolled="study.enrolled"
            :status="study.status"
          />
        </div>

        <div class="studies__actions">
          <ActionBtn
            :active="study.enrolled"
            @actionBtnToggle="$emit('actionBtnToggle', study.id)"
          />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import ActionBtn from "../buttons/ActionBtn"
import StatusIndicator from "../StatusIndicator.vue"

// function Study (title, researcher, status, enrolled) {
//   this.title = title
//   this.researcher = researcher
//   this.status = status
//   this.enrolled = enrolled
// }

export default {
  name: "StudyTable",
  components: {
    ActionBtn, StatusIndicator
  },
  props:{
    studies: {
      type: Array,
      default: () => []
    }
  },
  created(){
    //console.log("this.$props >> ", this.$props.studies);
  }
}
</script>

<style lang="scss" scoped>
.noList{
  list-style: none;
  padding-left: 0;
}

.studiesList{
  background: white;
  text-align: left;
  width: 100%;
  border-radius: 3px;
  border: 2px solid $btn_primary;
}

.studies__item{
  display: flex;
  height: 100%;
  flex-direction: column;

  padding: 0.5em 0.5em 2em 0.5em;
}

.studies__item:not(:last-child){
  border-bottom: 2px solid $btn_primary;
}

/* Studies text */
.studies__text{
  order: 1;
}
.marmite{ // mobile users dont get marmite :(
  display: none;
}
// heading
.studies__title{
  font-weight: bold;
  margin: 0.4em 0;
}
.studies__researcher{
  margin-top: 0;
  font-size: 80%;
  color: lighten($text_primary, 20%)
}

/* Studies status */
.studies__statusArea{
  position: relative;
  height: 2em;
  order: 0;
  // display: flex;
}


/* studies actions */
.studies__actions{
  text-align: center;
  order: 2;
}
</style>


<style lang="scss" scoped>
  // BREAKPOINTS
  @media (min-width: $screen-sm-min) {
    .studies{
      max-width: 1000px;
    }
    // change order so the text is first
    .studies__text{
      order: 0;
    }
    .studies__statusArea{
      order: 1;
    }

    // fix marmite - You will either love or hate this code
    .studies__title{
      position: relative;
    }
    .marmite{
      position: absolute;
      display: inline-block;
      width: 25px;
      height: 25px;
      margin-left: 0.5em;
      top: -0.2em;
    }

    // make flex rows rather than columns and fit for desktop
    .studies__item{
      flex-direction: row;
      padding: 0.5em;
    }
    .studies__text{
      height: 6em;
      width: 50%;
    }
    .studies__statusArea{
      height: 6em;
      width: 25%;
      // display: block;
      flex-direction: column;
      align-content: center;
      border-left: 1px solid $theme_primary;
      align-items: flex-start;
      justify-content: center;
      // flex-wrap: wrap;
      // margin: 0 auto;
    }
    .studies__actions{
      height: 6em;
      width: 25%;
      border-left: 1px solid $theme_primary;
      position: relative;
    }
  }
</style>