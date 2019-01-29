<template>
  <v-toolbar class="elevation-0 transparent mb-2">
    <v-list-tile-avatar size="60px">
      <v-icon size="50px" class="purple white--text">{{ icon }}</v-icon>
    </v-list-tile-avatar>
    <v-divider vertical class="ml-3 purple--text"></v-divider>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ title }}</h3>
        <div><slot></slot></div>
      </div>
    </v-card-title>
     <v-spacer></v-spacer>
     <slot name="action"></slot>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TitlePanel extends Vue {
  @Prop() public icon!: string;
  @Prop() public title!: string;
}
</script>