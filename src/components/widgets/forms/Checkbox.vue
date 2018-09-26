<template>
  <div id="page-selection-controls">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12>
          <v-widget title="Checkbox">
            <div slot="widget-content">
              <div class="basic">
                <v-subheader class="pa-0">Single</v-subheader>
                <v-checkbox
                  :label="`Default: ${checkbox1.toString()}`"
                  v-model="checkbox1"
                ></v-checkbox>
                <v-checkbox
                  :label="`Purple : ${checkbox2.toString()}`"
                  color="purple"
                  v-model="checkbox2"
                ></v-checkbox>
                <v-checkbox
                  :label="`Disabled : ${checkbox3.toString()}`"
                  color="success"
                  disabled
                  v-model="checkbox3"
                ></v-checkbox>
                <v-checkbox
                  :label="`Indeterminate : ${checkbox4.toString()}`"
                  color="success"
                  indeterminate
                  v-model="checkbox4"
                ></v-checkbox>
              </div>
              <div class="multile">
                <v-container fluid class="pa-0">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-subheader class="pa-0">Multple Selected : [{{ colors.toString() }}]</v-subheader>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="red"
                        v-model="colors"
                        color="red"
                        value="red"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="red darken-3"
                        v-model="colors"
                        color="red darken-3"
                        value="red darken-3"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="indigo"
                        v-model="colors"
                        color="indigo"
                        value="indigo"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="indigo darken-3"
                        v-model="colors"
                        color="indigo darken-3"
                        value="indigo darken-3"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="orange"
                        v-model="colors"
                        color="orange"
                        value="orange"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="orange darken-3"
                        v-model="colors"
                        color="orange darken-3"
                        value="orange darken-3"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="primary"
                        v-model="colors"
                        color="primary"
                        value="primary"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="secondary"
                        v-model="colors"
                        color="secondary"
                        value="secondary"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="success"
                        v-model="colors"
                        color="success"
                        value="success"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="info"
                        v-model="colors"
                        color="info"
                        value="info"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="warning"
                        v-model="colors"
                        color="warning"
                        value="warning"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="error"
                        v-model="colors"
                        color="error"
                        value="error"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-container>                
              </div>
              <div class="text-mixed  mt-3">
                <v-subheader class="pa-0">Inline with a textfield</v-subheader>
                <v-layout align-center class="ma-0">
                  <v-checkbox v-model="includeFiles" hide-details class="shrink mr-2"></v-checkbox>
                  <v-text-field label="Include files"></v-text-field>
                </v-layout>
                <v-layout align-center class="ma-0">
                  <v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox>
                  <v-text-field label="I only work if you check the box" :disabled="!enabled"></v-text-field>
                </v-layout>
              </div>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from '@/components/widgets/VWidget';
export default {
  components: {
    VWidget
  },
  data () {
    return {
      includeFiles: false,
      enabled: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,    
      colors: ['red', 'indigo', 'orange', 'primary']      

    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>