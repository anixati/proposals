<template>
  <div>
    <!-- Page header -->
    <v-toolbar class="elevation-0 transparent">
        <v-icon>dashboard</v-icon>
       <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-breadcrumbs :items="Crumbs">
        <v-icon slot="divider">chevron_right</v-icon>
      </v-breadcrumbs>
    </v-toolbar>

    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <stat-panel
            icon="all_inbox"
            title="06 Proposals"
            sub-title="Pending"
            color="indigo lighten-1"
          ></stat-panel>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <stat-panel
            icon="featured_play_list"
            title="$76,998"
            sub-title="Movement of funds"
            color="red lighten-1"
          ></stat-panel>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <stat-panel
            icon="library_books"
            title="$89,567.90"
            sub-title="Cash Flow"
            color="blue lighten-1"
          ></stat-panel>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <stat-panel
            icon="subtitles"
            title="$45,789.90"
            sub-title="Self-balance"
            color="purple lighten-1"
          ></stat-panel>
        </v-flex>

        <v-flex lg8 sm12 xs12>
          <v-panel title="Submissions">
            <v-btn icon slot="actions">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="content"></div>
          </v-panel>
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <v-panel title="Proposals">
            <v-btn icon slot="actions">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="content"></div>
          </v-panel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StatPanel from "../components/StatPanel.vue";
import VPanel from "../components/VPanel.vue";
@Component({
  components: {
    StatPanel,
    VPanel
  }
})
export default class Dashboard extends Vue {
  get Crumbs() {
    return [{ text: "Dashboard", disabled: true, href: "dashboard" }];
  }
}
</script>
