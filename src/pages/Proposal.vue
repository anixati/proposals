<template>
  <div>
    <v-breadcrumbs :items="Crumbs">
      <v-icon slot="divider">chevron_right</v-icon>
    </v-breadcrumbs>

    <v-card color="grey lighten-5">
      <v-toolbar color="white" flat dense card>
        <v-toolbar-title>
          <h4>Infrastructure Proposal for use by Proponents</h4>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon class="text--secondary">save</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <!-- Steps -->
      <v-window v-model="step">
        <!-- Step 1 -->
        <v-window-item :value="1" class="pa-3">
          <v-card>
            <v-card-title color="amber">
              <div>
                <h3
                  class="headline mb-2"
                >For projects seeking under $100 million in Commonwealth funding</h3>
                <span>FUNDING STREAMS</span>
                <br>
                <span>Urban Congestion</span>
                <br>
                <span>Regional Freight Links</span>
                <br>
                <span>Planning Works with a focus on Corridor and Network planning</span>
              </div>
            </v-card-title>
            <v-card-text>
              <p>This template is intended for use by proponents seeking under $100 million in Commonwealth funding under the Infrastructure Investment Programme (IIP).</p>
              <p>Proponents may submit proposals for funding under the following funding streams:</p>
              <ul style="margin:10px;">
                <li>Urban Congestion: projects which address pinch points on key transport routes within major cities and projects; projects involving technological solutions; and proposals for road, intermodal facilities and urban freight rail works.</li>
                <li>Regional Freight Links: projects which improve the productivity of regional freight roads, rail lines and intermodal facilities.</li>
                <li>Planning Works: proposals which support the long-term infrastructure planning of key corridors and networks, including consideration of technological solutions.</li>
              </ul>
              <p>Further detail on how these funding streams align with Australian Government Infrastructure Programmes and contribute to national productivity is at Attachment A.</p>
              <p>This template is intended for both scoping/development and delivery stage works. It is expected that proposals seeking funding for delivery stage works will have already been subject to a robust scoping / development process and will be able to address all sections of template. However, the Department recognises that, for proposals seeking funding for scoping and development stage works, information may not be available to all sections.</p>
            </v-card-text>
          </v-card>
        </v-window-item>

        <!-- Step 2 -->
        <v-window-item :value="2" class="pa-3">
          <v-card>
            <v-card-title primary-title>
              <div class="pa-3 text-xs-center">
                <h3
                   class="headline mb-2"
                >For projects seeking under $100 million in Commonwealth funding</h3>
              </div>
            </v-card-title>
            <v-card-text></v-card-text>
          </v-card>
        </v-window-item>

        <!-- Step 3 -->
        <v-window-item :value="3" class="pa-3">
          <v-card>
            <v-card-title primary-title>
              <div class="text-xs-center">
                <h2  class="headline">Deliverability Asessment</h2>
              </div>
            </v-card-title>
            <v-card-text>
              <v-stepper v-model="assp" non-linear vertical>
                <v-stepper-step
                  :complete="assp > 1"
                  step="1"
                >Is the risk being managed appropriately?</v-stepper-step>
                <v-stepper-content step="1">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn @click="step--">Cancel</v-btn>
                  <v-btn color="primary" @click="assp = 2">Next</v-btn>
                </v-stepper-content>

                <v-stepper-step
                  :complete="assp > 2"
                  step="2"
                >Have alternative funding and financing options been considered?</v-stepper-step>
                <v-stepper-content step="2">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn @click="assp = 1">Previous</v-btn>
                  <v-btn color="primary" @click="assp = 3">Next</v-btn>
                </v-stepper-content>

                <v-stepper-step
                  :complete="assp > 3"
                  step="3"
                >Is there a need for Commonwealth funding?</v-stepper-step>
                <v-stepper-content step="3">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn @click="assp = 2">Previous</v-btn>
                  <v-btn color="primary" @click="assp = 4">Next</v-btn>
                </v-stepper-content>

                <v-stepper-step
                  :complete="assp > 4"
                  step="4"
                >Does the delivery strategy provide confidence that the initiative benefits will be delivered?</v-stepper-step>
                <v-stepper-content step="4">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn @click="assp = 3">Previous</v-btn>
                  <v-btn color="primary" @click="assp = 5">Next</v-btn>
                </v-stepper-content>

                <v-stepper-step
                  :complete="assp > 5"
                  step="5"
                >Does the project’s governance model provide confidence that claimed benefits will be delivered?</v-stepper-step>
                <v-stepper-content step="5">
                  <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                  <v-btn @click="assp = 4">Previous</v-btn>
                  <v-btn color="error" @click="assp = 5">Submit Proposal</v-btn>
                </v-stepper-content>
              </v-stepper>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>

      <!-- Actions -->
      <v-divider></v-divider>
      <v-card-actions color="white" v-if="step < 3">
        <v-btn v-if="step === 2" @click="step--">Back</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="step === 1" @click="step++" color="info">Agree and Continue</v-btn>
        <v-btn v-if="step === 2" @click="step++" color="primary">DELIVERABILITY ASSESSMENT</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Proposal extends Vue {
  @Prop({ default: 1 }) public step!: number;

  @Prop({ default: 1 }) public assp!: number;

  get Crumbs() {
    return [
      { text: "Submissions", disabled: false, href: "submissions" },
      { text: "New Proposal", disabled: true, href: "proposal" }
    ];
  }
}
</script>
