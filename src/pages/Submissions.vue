<template>
  <div>
    <!-- Page header -->
    <title-panel icon="local_play" title="Submissions">
      <span class="caption">list of differnt types of submitted applications</span>
       <v-btn slot="action" to="/proposal" color="primary ripple">
          <v-icon dark>assignment</v-icon>&nbsp;
          New Submission
        </v-btn>
    </title-panel>

    <v-card class="ma-5">
      <v-toolbar card dense color="transparent">
        <v-spacer></v-spacer>
       
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="pa-1">
        <template>
          <v-data-table :headers="Cols" :items="Submissions" class="elevation-1 purple--text">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.form }}</td>
              <td>{{ props.item.status }}</td>
              <td class="text-xs-left">{{ props.item.elapsed }}</td>
              <td class="text-xs-left">
                <v-progress-linear
                  :value="props.item.progress"
                  height="5"
                  :color="props.item.color"
                ></v-progress-linear>
              </td>
              <td class="text-xs-right">
                <v-btn flat icon color="grey">
                  <v-icon>edit</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </template>
        <v-divider></v-divider>
      </v-card-text>
      <v-card-actions></v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Submissions } from "../mocks/submissions";
import TitlePanel from "../components/TitlePanel.vue";
@Component({
  components: {TitlePanel}
})
export default class SubmissionList extends Vue {
  get Submissions() {
    return Submissions;
  }
  get Cols() {
    return [
      { text: "Form Name", align: "left", value: "form" },
      { text: "State", align: "left", value: "status" },
      { text: "Deadline", value: "elapsed" },
      { text: "Progress", value: "progress" },
      { text: "Action", align: "right" }
    ];
  }
  get Crumbs() {
    return [{ text: "Submissions", disabled: true, href: "/submissions" }];
  }
}
</script>
<style scoped lang="scss">
.parent {
  flex-wrap: wrap;
  border: 1px solid red;
}
.child {
  max-width: 700px;
}
</style>