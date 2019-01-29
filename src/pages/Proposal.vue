<template>
  <div>
    <!-- Page header -->
    <title-panel icon="local_play" title="Infrastructure Proposal for use by Proponents">
      <v-breadcrumbs :items="Crumbs" class="my-0 pa-2">
        <v-icon slot="divider">chevron_right</v-icon>
      </v-breadcrumbs>

      <v-btn slot="action" color="primary ripple">
        <v-icon dark>save</v-icon>&nbsp;
       Save
      </v-btn>
    </title-panel>

    <div>
      <!-- Steps -->
      <v-window v-model="step">
        <!-- Step 1 -->
        <v-window-item :value="1" class="pa-3">
          <v-card>
            <v-card-text>
              <h4
                class="subheading font-weight-medium mb-2"
              >For projects seeking under $100 million in Commonwealth funding</h4>
              <div class="body-1">
                <p></p>
                <p>FUNDING STREAMS</p>
                <ul class="mb-2">
                  <li class="body-1">Urban Congestion</li>
                  <li class="body-1">Regional Freight Links</li>
                  <li class="body-1">Planning Works with a focus on Corridor and Network planning</li>
                </ul>
                <p></p>
                <p>Planning Works with a focus on Corridor and Network planning
                  <br>This template is intended for use by proponents seeking under $100 million in Commonwealth funding under the Infrastructure Investment Programme (IIP).
                  <br>Proponents may submit proposals for funding under the following funding streams:
                </p>
                <ul class="mb-3">
                  <li>Urban Congestion: projects which address pinch points on key transport routes within major cities and projects; projects involving technological solutions; and proposals for road, intermodal facilities and urban freight rail works.</li>
                  <li>Regional Freight Links: projects which improve the productivity of regional freight roads, rail lines and intermodal facilities.</li>
                  <li>Planning Works: proposals which support the long-term infrastructure planning of key corridors and networks, including consideration of technological solutions.</li>
                </ul>
                <p>Further detail on how these funding streams align with Australian Government Infrastructure Programmes and contribute to national productivity is at Attachment A.
                  <br>This template is intended for both scoping/development and delivery stage works.
                  <br>It is expected that proposals seeking funding for delivery stage works will have already been subject to a robust scoping / development process and will be able to address all sections of template.
                  <br>However, the Department recognises that, for proposals seeking funding for scoping and development stage works, information may not be available to all sections.
                </p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn v-if="step === 1" @click="step++" color="primary ripple">Start Application</v-btn>
            </v-card-actions>
          </v-card>
        </v-window-item>

        <!-- Step 2 -->
        <v-window-item :value="2" class="pa-3">
          <v-stepper non-linear v-model="frmwzd" alt-labels>
            <v-stepper-header>
              <v-stepper-step :complete="frmwzd > 1" step="1">Project Description</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="frmwzd > 2" step="2">Costs &amp; Funding</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="frmwzd > 3" step="3">Goal Definition</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="frmwzd > 4" step="4">Identification</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="frmwzd > 5" step="5">Analysis</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="frmwzd > 6" step="6">Options Goal</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="frmwzd > 7" step="7">Cost Estimates</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="frmwzd > 8" step="8">Asessment</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card color="transparent" class="elevation-0">
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-layout row wrap fill-height>
                          <v-flex xs12 sm12>
                            <v-card flat tile color="grey darken-3" class="flex white--text">
                              <v-card-title>
                                <div>
                                  <h5 class="headline">Project Description</h5>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-text-field
                              label="Project Name"
                              hint="Name of the project or description"
                              persistent-hint
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6>
                            <v-combobox
                              :items="States"
                              label="State/territories"
                              hint="States and territories of Australia"
                              persistent-hint
                            ></v-combobox>
                          </v-flex>
                          <v-flex xs12 sm6>
                            <v-text-field label="City/Region" hint="Locality" persistent-hint></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6>
                            <v-text-field
                              label="Contact Name"
                              hint="Name of Proponent Entity"
                              persistent-hint
                            ></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6>
                            <v-text-field label="Position" hint persistent-hint></v-text-field>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-text-field label="Phone" hint persistent-hint></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-text-field label="Mobile" hint persistent-hint></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-text-field label="Email" type="email" hint persistent-hint></v-text-field>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-title primary-title>
                                <div>
                                  <p>Provide a detailed description of the project and the capability it will provide. The description needs to provide a concise, but clear description of the project’s scope.</p>
                                  <p>Include at least two maps showing the location of the proposal, one showing the broader area within which the project sits, and one showing the project in more detail.</p>
                                  <p>As part of the submission, attach Geographic Information System data for the project (either in Map info tab or mif format, or ESRI shape file or geo-database format), where available.</p>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm8>
                            <v-textarea label="Description of Project" rows="12"></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-title primary-title>
                                <div>
                                  <div>Summarise how the project addresses one of the following funding streams and creates economic benefits</div>
                                  <ul>
                                    <li>Urban Congestion</li>
                                    <li>Regional Freight Link</li>
                                    <li>Planning Works</li>
                                  </ul>
                                  <p></p>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm8>
                            <v-textarea
                              label="Infrastructure Investment Programme Funding Stream"
                              rows="6"
                            ></v-textarea>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="step--" color="grey darken-3 ripple" class="white--text">Previous</v-btn>
                    <v-btn @click="frmwzd++" color="primary ripple">Next</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-card color="transparent" class="elevation-0">
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-layout row wrap>
                          <v-flex xs12 sm12>
                            <v-card flat tile color="grey darken-3" class="flex white--text">
                              <v-card-title>
                                <div>
                                  <h5 class="headline">Costs and Funding contributions</h5>
                                  <p>(provide in $ million, and in both nominal, undiscounted terms and in Real 2015-dollar terms)</p>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <h6 class="title">Costs and Funding contributions</h6>
                          </v-flex>
                          <v-flex xs12 sm3>
                            <v-text-field label="Nominal (P50)" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm3>
                            <v-text-field label="Nominal (P90)" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm3>
                            <v-text-field label="Real (P50)" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm3>
                            <v-text-field label="Real (P90)" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <h6
                              class="title"
                            >Commonwealth contribution sought by Proponent, and outline cash flow in financial years – including any requests for project development funding</h6>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="15-16" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="16-17" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="17-18" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="18-19" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="19-20" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="20-21" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="21-22" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm5>
                            <v-text-field label="Total" suffix="$" outline></v-text-field>
                          </v-flex>

                          <v-flex xs12 sm12>
                            <h6
                              class="title"
                            >Other funding, including state and local government and private sector contributions - include sources, amounts and cash flows</h6>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="15-16" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="16-17" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="17-18" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="18-19" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="19-20" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="20-21" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm1>
                            <v-text-field label="21-22" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex sm5>
                            <v-text-field label="Total" suffix="$" outline></v-text-field>
                          </v-flex>

                          <v-flex xs12 sm12>
                            <h6 class="title">BCR excluding Wider Economic Benefits1</h6>
                          </v-flex>

                          <v-flex xs12 sm3>
                            <v-text-field label="4% discount rate (P50)" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm3>
                            <v-text-field label="4% discount rate (P90)" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm3>
                            <v-text-field label="7% discount rate (P50)" suffix="$" outline></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm3>
                            <v-text-field label="7% discount rate (P90)" suffix="$" outline></v-text-field>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <p>Show key steps, e.g. planning, the project’s development, business case consideration, environmental approvals, procurement, and construction, with expected start and end dates.</p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm8>
                            <v-textarea
                              label="High level development and implementation program"
                              rows="3"
                            ></v-textarea>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <p>Indicate which part(s) of the submission have been submitted to the Australian Government on a confidential basis, and provide a brief explanation of the reason(s) for the confidentiality request.</p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm8>
                            <v-textarea label="Confidentiality" rows="3"></v-textarea>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="frmwzd--"
                      color="grey darken-3 ripple"
                      class="white--text"
                    >Previous</v-btn>
                    <v-btn @click="frmwzd++" color="primary ripple">Next</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="3">
                <v-card color="transparent" class="elevation-0">
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-layout row wrap>
                          <v-flex xs12 sm12>
                            <v-card flat tile color="grey darken-3" class="flex white--text">
                              <v-card-title>
                                <div>
                                  <h5 class="headline">Goal Definition</h5>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <h5
                                  class="subheading"
                                >List the goal(s) that the project is seeking to address:</h5>
                                <p></p>
                                <p>List and provide sources for the higher and/or lower order goals such as those of a Nation/State/Region/City/other specific location with reference back to existing plans and strategies e.g. ‘State plans’, planning strategies.</p>
                                <p>Does the proposal align with other plans, policies or commitments (e.g. State strategic and/or regional strategic plans, other Commonwealth policies (e.g. White Papers), and other programmes (e.g. Asset Recycling Initiative).</p>
                                <p></p>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm8>
                            <v-textarea label="Goal Statements" rows="12"></v-textarea>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="grey darken-3 ripple"
                      @click="frmwzd--"
                      class="white--text"
                    >Previous</v-btn>
                    <v-btn @click="frmwzd++" color="primary ripple">Next</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="4">
                <v-card color="transparent" class="elevation-0">
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-layout row wrap>
                          <v-flex xs12 sm12>
                            <v-card flat tile color="grey darken-3" class="flex white--text">
                              <v-card-title>
                                <div>
                                  <h5 class="headline">Problem Identification and Assessment</h5>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <h5
                                  class="subheading"
                                >List those current and future problems, issues or challenges that the proponent considers will be addressed by this project. This might include problems such as accessibility, availability, prices/cost, capacity, emissions, safety, and so forth In considering these problems, proponents should:</h5>
                                <div>
                                  <p></p>
                                  <ul class="md-5">
                                    <li>detail how the problems identified relates to the goal of the project;</li>
                                    <li>detail how the problems are impacting local, state or national outcomes;</li>
                                    <li>base identification and assessment of the problems on empirical observations and evidence. Where appropriate, this evidence should be attached to the submission; and</li>
                                    <li>consider how the problems will change over time, including how it is likely to impact or be impacted by different scenarios.</li>
                                  </ul>
                                  <p></p>
                                  <p>This section should include reference to how the project addresses deficiencies identified in the Infrastructure Australia National Infrastructure Audit.</p>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm8>
                            <v-textarea
                              label="Identification of current and future problems"
                              rows="22"
                            ></v-textarea>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="grey darken-3 ripple"
                      @click="frmwzd--"
                      class="white--text"
                    >Previous</v-btn>
                    <v-btn @click="frmwzd++" color="primary ripple">Next</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="5">
                <v-card color="transparent" class="elevation-0">
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-layout row wrap>
                          <v-flex xs12 sm12>
                            <v-card flat tile color="grey darken-3" class="flex white--text">
                              <v-card-title>
                                <div>
                                  <h5 class="headline">Problem Analysis</h5>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <h5
                                  class="subheading"
                                >Outline the underlying causes of the problems identified. This might include consideration of the policy argument explaining the genesis of the problem (e.g. population growth, lack of alternative transport options, increased commercial development) as opposed to the symptoms.</h5>
                                <div>
                                  <p>Where appropriate, provide data and other evidence to back up the policy arguments.</p>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm8>
                            <v-textarea label="Problem analysis" rows="9"></v-textarea>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <h5
                                  class="subheading"
                                >Identify why this problem has been prioritised against other problems across that network and/or region i.e. demonstrate which problems are most likely to hinder the achievement of strategic priorities for the locality, state or nation.</h5>
                                <div>
                                  <p></p>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm8>
                            <v-textarea label="Problem Prioritisation" rows="6"></v-textarea>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="grey darken-3 ripple"
                      @click="frmwzd--"
                      class="white--text"
                    >Previous</v-btn>
                    <v-btn @click="frmwzd++" color="primary ripple">Next</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="6">
                <v-card color="transparent" class="elevation-0">
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-layout row wrap>
                          <v-flex xs12 sm12>
                            <v-card flat tile color="grey darken-3" class="flex white--text">
                              <v-card-title>
                                <div>
                                  <h5 class="headline">Options Goal Definition</h5>
                                  <p>Discuss the options considered to meet the project objectives and the rationale for selecting the preferred option.</p>
                                  <p>This should include, as appropriate, alternatives to construction, including enhanced use of existing infrastructure and/or technological solutions.</p>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-textarea
                              label="Option 1"
                              rows="3"
                              hint="Short description of the option, and how it is likely to achieve the goals/objectives."
                              persistent-hint="true"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-textarea
                              label="Option 2"
                              rows="3"
                              hint="Short description of the option, and how it is likely to achieve the goals/objectives."
                              persistent-hint="true"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-textarea
                              label="Option 3"
                              rows="3"
                              hint="Short description of the option, and how it is likely to achieve the goals/objectives."
                              persistent-hint="true"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-textarea
                              label="Option 4"
                              rows="3"
                              hint="Short description of the option, and how it is likely to achieve the goals/objectives."
                              persistent-hint="true"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-textarea
                              label="Option 5"
                              rows="3"
                              hint="Short description of the option, and how it is likely to achieve the goals/objectives."
                              persistent-hint="true"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm12>
                            <v-textarea
                              label="Option 6"
                              rows="3"
                              hint="Short description of the option, and how it is likely to achieve the goals/objectives."
                              persistent-hint="true"
                            ></v-textarea>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="grey darken-3 ripple"
                      @click="frmwzd--"
                      class="white--text"
                    >Previous</v-btn>
                    <v-btn @click="frmwzd++" color="primary ripple">Next</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="7">
                <v-card color="transparent" class="elevation-0">
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-layout row wrap>
                          <v-flex xs12 sm12>
                            <v-card flat tile color="grey darken-3" class="flex white--text">
                              <v-card-title>
                                <div>
                                  <h5 class="headline">Cost Estimates and Economic Appraisal</h5>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <h5 class="subheading">Cost Estimation</h5>
                                <div>
                                  <p>The proponent should provide P50 and P90 cost estimates for the project in outturn dollars. Where the total project value is greater than $25 million, estimates should be developed using probabilistic estimate methods. Projects under $25 million may use a deterministic methodology but are encouraged to also use a probabilistic estimate.</p>
                                  <p>The Department of Infrastructure and Regional Development will set jurisdiction specific escalation rates based on forecast composite index series developed by specialist consultants who will draw on economic factors and “in-market” intelligence to inform their forecasts. It is anticipated that jurisdictions will be provided with a copy of the applicable consultant’s report and model, noting that there may well be legitimate jurisdiction specific factors which may result in a slightly different escalation rate applying to each jurisdiction. This approach is being taken to ensure that the Outturn costs of proposed projects being considered for Australian Government funding are defensible and estimated on a consistent basis. As such, it is another element of the cost estimate review process foreshadowed in the National Partnership Agreement and articulated in the Notes On Administration.</p>
                                  <p>The Department of Infrastructure and Regional Development will set jurisdiction specific escalation rates based on forecast composite index series developed by specialist consultants who will draw on economic factors and “in-market” intelligence to inform their forecasts. It is anticipated that jurisdictions will be provided with a copy of the applicable consultant’s report and model, noting that there may well be legitimate jurisdiction specific factors which may result in a slightly different escalation rate applying to each jurisdiction. This approach is being taken to ensure that the Outturn costs of proposed projects being considered for Australian Government funding are defensible and estimated on a consistent basis. As such, it is another element of the cost estimate review process foreshadowed in the National Partnership Agreement and articulated in the Notes On Administration. Jurisdictions who wish to use alternative escalation rates will need to provide an alternative composite index series (which may involve different weightings for the components of the Department provided composite index series), and justify, with robust supporting data, why they consider they that the Department set escalation rates are not appropriate. See further comments in Attachment B.</p>
                                  <p>In preparing cost estimates, proponents must</p>
                                  <ul class="md-5">
                                    <li>provide a completed Project Cost Breakdown (PCB) Template (see Attachment C);</li>
                                    <li>
                                      refer to the guidance on cost estimation that appears in the Notes on Administration for Land Transport Infrastructure Projects 2014–15 to 2018–19 (the NOA)
                                      , particularly at Appendix B to the NOA. The NOA can be downloaded from:
                                      <a
                                        href="http://investment.infrastructure.gov.au/funding/projects"
                                        target="_balnk"
                                      >here</a>
                                    </li>
                                  </ul>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm8>
                            <v-textarea label="Cost Estimation" rows="58"></v-textarea>
                          </v-flex>

                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <h5 class="subheading">Cost Benefit Analysis</h5>
                                <div>
                                  <p>
                                    In undertaking detailed cost benefit analysis, proponents should refer to the National Guidelines for Transport System Management in Australia 2015 (the NGTSM). The NGTSM can be found at
                                    <a
                                      href="http://ngtsmguidelines.com"
                                      target="_blank"
                                    >here</a>
                                  </p>
                                  <p>Jurisdictions must complete the BCR template for each submission by filling in the blue and yellow coloured cells, as well as the Appraisal Summary Table to capture qualitative benefits. Both templates are at Attachment D.</p>
                                  <p>For projects under $25 million, the Department will accept a Rapid BCR</p>
                                  <p>It is expected that CBAs will be evaluated on the basis of 30-year life for the infrastructure. Where a different evaluation period has been used (such as for an Intelligent Transport System with a short life-span), a brief explanation of evaluation period should be detailed here. In addition to the 30-year assessments, the BCR template also includes an assessment of the present value of the benefits and costs at Year 10 as a sensitivity test.</p>
                                  <p></p>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex xs12 sm8>
                            <v-textarea label="Cost Benefit Analysis" rows="22"></v-textarea>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="grey darken-3 ripple"
                      @click="frmwzd--"
                      class="white--text"
                    >Previous</v-btn>
                    <v-btn @click="frmwzd++" color="primary ripple">Next</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
              <v-stepper-content step="8">
                <v-card color="transparent" class="elevation-0">
                  <v-card-text>
                    <v-form>
                      <v-container>
                        <v-layout row wrap>
                          <v-flex xs12 sm12>
                            <v-card flat tile color="grey darken-3" class="flex white--text">
                              <v-card-title>
                                <div>
                                  <h5 class="headline">Deliverability Asessment</h5>
                                </div>
                              </v-card-title>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm8>
                            <v-textarea
                              label="1. Is the risk being managed appropriately?"
                              rows="30"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <div>
                                  <p>Key issues to consider on Risk Management:</p>
                                  <ul class="md-5">
                                    <li>Have risks been formally identified, assessed and addressed through a management strategy?</li>
                                    <li>Does the delivery strategy effectively deal with the risks identified?</li>
                                    <li>Does the delivery strategy introduce new risks, e.g., design, construction or operation interfaces?</li>
                                  </ul>
                                  <p>Information and documentation you may wish to consider providing includes:</p>
                                  <ul class="md-5">
                                    <li>Risk assessment reports;</li>
                                    <li>Risk management strategy;</li>
                                    <li>Peer review of risk assessment and management strategy; and</li>
                                    <li>Analysis of staging options. This may include consideration of:
                                      <ul class="md-5">
                                        <li>economies of scale (for procurement and usage); and</li>
                                        <li>Best time to deliver relevant stages – taking into account future demand forecasts, flexibility and uncertainty for other stages of the initiative.</li>
                                      </ul>
                                    </li>
                                  </ul>
                                  <p>Key issues to consider on Environmental Risks:</p>
                                  <ul class="md-5">
                                    <li>What are the significant environmental risks?</li>
                                    <li>What community engagement/consultation has been / is planned to be undertaken?</li>
                                    <li>What land use/environmental/planning approvals need to be obtained?</li>
                                    <li>What approvals/licences have already been obtained?</li>
                                  </ul>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm8>
                            <v-textarea
                              label="2. Have alternative funding and financing options been considered?"
                              rows="19"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <div>
                                  <p>If ‘NO’ – outline the reasons behind this decision. If it is not the intention to investigate alternative funding or financing, outline the reasons behind this decision (eg project is too small to be feasible for alternative funding and financing)</p>
                                  <p>If ‘YES’ – provide detail of the options. You may wish to consider:</p>
                                  <ul class="md-5">
                                    <li>Is there a possibility of generating a revenue stream that could fund the project (i.e. tolling; user charging etc.)?</li>
                                    <li>Is there capacity for additional value capture (such as through the sale of air rights / excess land for urban projects or tax incremental financing)?</li>
                                    <li>Can the private sector add value by financing and delivering the infrastructure and related services?</li>
                                    <li>If so, is private financing proposed?</li>
                                    <li>Where private financing is envisaged, is a competitive market for the provision of private capital likely given the location and type of initiative?</li>
                                  </ul>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm8>
                            <v-textarea
                              label="3. Is there a need for Commonwealth funding?"
                              rows="15"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <div>
                                  <p>Key issues you may wish to consider on the case for Commonwealth Funding:</p>
                                  <ul class="md-5">
                                    <li>Why should the Commonwealth rather than State/Territory or Council fund the initiative – what is the national interest?</li>
                                    <li>Is Commonwealth funding likely to lead to a displacement of State/Territory infrastructure spending?</li>
                                    <li>What is the proposed State/Territory/Council funding contribution for the initiative?</li>
                                    <li>What other sources of Commonwealth funding are being provided for the initiative?</li>
                                    <li>Outline the proposed timing of cashflows for each contributor and what the each contributor’s funds will be used for (include details of the inflator used to derive nominal amounts)?</li>
                                  </ul>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm8>
                            <v-textarea
                              label="4. Does the delivery strategy provide confidence that the initiative benefits will be delivered?"
                              rows="15"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <div>
                                  <p>Key issues you may wish to consider on Delivery Strategy Issues:</p>
                                  <ul class="md-5">
                                    <li>At what phase is the initiative in its development, e.g. identification, scoping, development or delivery (refer to Project Phases within the Notes on Administration)</li>
                                    <li>What are the initiative’s key milestones?</li>
                                    <li>What is the proposed delivery strategy, including source of finance, contract type and procurement process?</li>
                                    <li>Can the initiative be staged to, for example, reduce risks, improve manageability or better align project outcomes to cashflows?</li>
                                    <li>What is the proposed strategy for operations and maintenance of the infrastructure?</li>
                                    <li>What are the project evaluation mechanisms? How will the proponent evaluate whether benefits have been realised?</li>
                                  </ul>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>

                          <v-flex xs12 sm8>
                            <v-textarea
                              label="5. Does the project’s governance model provide confidence that claimed benefits will be delivered?"
                              rows="8"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-card color="blue-grey darken-2" class="white--text">
                              <v-card-text>
                                <div>
                                  <p>Key issues you may wish to consider on the Initiative’s Governance include:</p>
                                  <ul class="md-5">
                                    <li>What are the proposed governance arrangements for the project?</li>
                                    <li>Who are they key stakeholders and what role will they play in the initiative’s governance?</li>
                                    <li>Is the initiative subject to a Gateway or similar review process?</li>
                                  </ul>
                                </div>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="grey darken-3 ripple"
                      @click="frmwzd--"
                      class="white--text"
                    >Previous</v-btn>
                    <v-btn color="error ripple">Submit Aplication</v-btn>
                  </v-card-actions>
                </v-card>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-window-item>

        <!-- Step 3 -->
        <v-window-item :value="3" class="pa-3"></v-window-item>
      </v-window>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TitlePanel from "../components/TitlePanel.vue";
@Component({
  components: {TitlePanel}
})
export default class Proposal extends Vue {
  @Prop({ default: 1 }) public step!: number;
  @Prop({ default: 1 }) public assp!: number;
  @Prop({ default: 1 }) public frmwzd!: number;

  get Crumbs() {
    return [
      { text: "Submissions", disabled: false, to: "submissions" },
      { text: "New Proposal", disabled: true, to: "proposal" }
    ];
  }

  get States() {
    return [
      "Western Australia",
      "Victoria",
      "Tasmania",
      "South Australia",
      "Queensland",
      "Northern Territory",
      "Norfolk Island",
      "New South Wales",
      "Jervis Bay Territory",
      "Heard Island and McDonald Islands",
      "Coral Sea Islands",
      "Cocos (Keeling) Islands",
      "Christmas Island",
      "Australian Capital Territory",
      "Australian Antarctic Territory",
      "Ashmore and Cartier Islands"
    ];
  }
}
</script>
