<template>
  <div id="page-selection-controls">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12>
          <v-widget title="Switches" class="mt-3">
            <div slot="widget-content">
              <div class="basic">
                <v-subheader class="pa-0">Default value: {{s1}} </v-subheader>
                  <v-switch :label="s1 ? 'On': 'Off'" v-model="s1"></v-switch>
              </div>
              <div class="basic">
                <v-subheader class="pa-0">Custom text value:  {{s2}} </v-subheader>
                <v-switch value="Yes" :label="s2 ? 'Yes': 'No'" v-model="s2" color="success"></v-switch>
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