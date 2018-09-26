<template>
  <div id="page-selection-controls">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12>
          <v-widget title="Raidio Buttons">
            <div slot="widget-content">
              <div class="basic">
                <v-subheader class="pa-0">Default vertical </v-subheader>
                <v-radio-group v-model="radio1" :mandatory="false">
                  <v-radio label="Primary" color="primary" value="radio-1"></v-radio>
                  <v-radio label="Success" color="success" value="radio-2"></v-radio>
                  <v-radio label="Info" color="info" value="radio-3"></v-radio>
                </v-radio-group>
              </div>
              <div class="basic">
                <v-subheader class="pa-0">Horizontal </v-subheader>
                <v-radio-group v-model="radio2" :mandatory="false" row>
                  <v-radio label="Radio 1" value="radio-1" color="pink"></v-radio>
                  <v-radio label="Radio 2" value="radio-2" color="secondary"></v-radio>
                  <v-radio label="Radio 3" value="radio-3" color="teal"></v-radio>
                </v-radio-group>
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
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: false,
      radio5: false,      

    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>