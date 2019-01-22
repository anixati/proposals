<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="amber" dark app absolute clipped-left>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title ml-3 mr-5">
          Agency&nbsp;
          <span class="font-weight-light">Portal</span>
        </span>
      </v-toolbar>

      <v-navigation-drawer
        clipped
        v-model="drawer"
        class="grey lighten-4"
        absolute
        app
        :mini-variant="mini"
      >
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title"></v-list-tile-title>
            </v-list-tile>
          </v-list>
          <v-tooltip bottom>
            <v-btn icon slot="activator">
              <v-icon color="orange darken-2">grade</v-icon>
            </v-btn>
            <span>Favourites</span>
          </v-tooltip>
          <v-tooltip bottom>
            <v-btn slot="activator" icon>
              <v-icon>notifications</v-icon>
            </v-btn>
            <span>Notifications</span>
          </v-tooltip>
        </v-toolbar>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" :to="item.link" avatar>
          <v-list-tile-avatar>
            <v-icon class="amber white--text">{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-navigation-drawer>

      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer height="auto" color="grey lighten-2" app>
         <v-spacer></v-spacer><strong>&copy; 2019 - DIRD</strong>
      </v-footer>
    </v-app>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  @Prop() drawer!: any;
  @Prop({ default: false }) mini!: boolean;
  @Prop() right!: null;

  @Prop() items: Array<any> = [
    { icon: "dashboard", title: "Dashboard", subtitle: "", link: "/dashboard" },
    {
      icon: "local_play",
      title: "Submissions",
      subtitle: "Proposals,Documents,Forms etc.",
      link: "/submissions"
    }
  ];
}
</script>
<style lang="scss">
</style>
