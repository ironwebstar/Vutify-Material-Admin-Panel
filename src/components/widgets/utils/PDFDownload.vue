<template>
  <div id="home">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-card>
            <v-toolbar card prominent color="primary" dark="">
              <v-toolbar-title class="body-2">PDF Download</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-flex lg12 sm12>
                <v-textarea outline id="name" textarea label="Enter Content here" v-model="name"></v-textarea>
              </v-flex> 
            </v-card-text>
            <v-card-actions>
              <v-btn
                  :loading="loading3"
                  @click.native="loader = 'loading3'"
                  @click="download"
                  :disabled="loading3"
                  color="blue-grey"
                  class="white--text"
                >
                  Download
                  <v-icon right dark>cloud_download</v-icon>
                </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>

</template>

<script>
import * as jsPDF from 'jspdf';

export default {
  data () {
    return {
      name: 'Hello Rocky! How are you?',
      loader: null,
      loading3: false
    };
  },
  computed: {
  }, 
  watch: {
    loader () {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => {
        this[l] = false;
      }, 1000);
      this.loader = null;
    }
  }, 
  methods: {
    download () {
      let pdfName = 'test';
      const JsPDF = jsPDF;
      let doc = new JsPDF();
      doc.text(this.name, 10, 10);
      doc.save(pdfName + '.pdf');
    }
  }
};
</script>
