<template>
  <div id="app">
    <StudyTable
      :studies="studies"
      @actionBtnToggle="actionBtnToggle"
    />
  </div>
</template>

<script>
import StudyTable from "./components/tables/StudyTable.vue"

export default {
  name: "App",
  components: {
    StudyTable
  },
  data: function() {
    return {
        message: "Hello Vue.js!",
        studies: [{
            "id": 1,
            "title": "DNA and Human Traits",
            "researcher": "Sano Genetics",
            "status": "Completed",
            "enrolled": true
          },
          {
            "id": 2,
            "title": "Marmite",
            "researcher": "Sano Genetics",
            "status": "In Progress",
            "enrolled": true
          },
          {
            "id": 3,
            "title": "Muscular Dystrophy",
            "researcher": "Muscular Dystrophy UK",
            "status": "In Progress",
            "enrolled": true
          },
          {
            "id": 4,
            "title": "The Genetics of Autism",
            "researcher": "Autism Research Center",
            "status": "Not Started",
            "enrolled": false
          }
        ]
      };
  },
  methods: {
    /** show preloader */
    actionBtnToggle(studyId) {
      const study = this.studies.find(study => study.id === studyId);
      if(study.enrolled) {
        study.enrolled= false;
        if(study.status.toLowerCase() !== "completed") {study.status = "Not Started"};
      }
      else{
        study.enrolled= true;
        if(study.status.toLowerCase() !== "completed") {study.status = "In Progress"};
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./styles/app.scss";
</style>