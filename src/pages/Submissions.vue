<template>
  <div>
    <v-breadcrumbs :items="Crumbs">
      <v-icon slot="divider">chevron_right</v-icon>
    </v-breadcrumbs>
    <v-card>
      <v-toolbar card dense color="transparent">
        <v-toolbar-title>
          <h4>Submissions</h4>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/proposal" small color="primary">New Submission</v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="pa-1">
        <template>
          <v-data-table :headers="Cols" :items="Submissions" class="elevation-1">
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
      <v-card-actions>
        <v-card-text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</v-card-text>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Submissions } from "../mocks/submissions";

@Component({
  components: {}
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
    return [{ text: "Submissions", disabled: false, href: "submissions" }];
  }
}
</script>
