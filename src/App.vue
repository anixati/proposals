<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="purple" dark app absolute clipped-left>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title ml-3 mr-5">
          Agency&nbsp;
          <span class="font-weight-light">Portal</span>
        </span>
        <v-spacer></v-spacer>
        <img src="logo.png" alt="Vuetify">
      </v-toolbar>
      <v-navigation-drawer
        clipped
        v-model="drawer"
        color="purple"
        absolute
        app
        :mini-variant="mini"
      >
        <v-toolbar dense flat>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-divider vertical></v-divider>
            <v-btn icon flat>
              <v-icon color="purple">apps</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn icon flat>
              <v-icon color="orange darken-2">grade</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
            <v-btn icon flat>
              <v-icon color="blue">notifications</v-icon>
            </v-btn>
            <v-divider vertical></v-divider>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" :to="item.link" ripple avatar>
          <v-list-tile-avatar>
            <v-icon class="purple white--text">{{ item.icon }}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title class="purple--text">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-navigation-drawer>

      <v-content class="blue-grey lighten-4">
        <v-container fluid>
          <router-view class="blue-grey lighten-4"></router-view>
        </v-container>
      </v-content>
      <v-footer height="auto" color="amber darken-1" class="white--text" app>
        <v-spacer></v-spacer>
        <strong>&copy; 2019 - DIRD&nbsp;&nbsp;&nbsp;</strong>
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
.v-btn-group {
  border-radius: 2px;
  display: inline-flex;
  .theme--dark & {
    background: #424242;
  }
  .theme--light & {
    background: #fff;
  }
  .v-btn {
    border-radius: 0;
    justify-content: center;
    margin: 0;
    min-width: auto;
    opacity: 0.4;
    padding: 0 8px;
    width: auto;
    &:not(:last-child) {
      border-right: 1px solid transparent;
    }
    &:first-child {
      border-radius: 2px 0 0 2px;
    }
    &:last-child {
      border-radius: 0 2px 2px 0;
    }
  }
}
</style>