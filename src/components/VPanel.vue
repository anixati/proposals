<template>
  <div>
    <v-card>
      <v-toolbar color="transparent" flat dense card>
        <v-toolbar-title>
          <h4>{{title}}</h4>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <slot name="actions"></slot>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text :class="contentBg">
        <slot name="content"></slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VPanel extends Vue {
  @Prop() public title!: string;
  @Prop({ default: "white" }) public contentBg!: string;
}
</script>