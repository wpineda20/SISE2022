<template>
  <div data-app>
    <alert-time-out
      :redirect="redirectSessionFinished"
      @redirect="redirectSessionFinished = $event"
    />

    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      @show-alert="updateAlert($event)"
      class="mb-2"
    />

    <v-card class="p-4" style="border-radius: 15px">
      <v-container>
        <h3>Reportes</h3>
        <hr />
        <v-row v-if="!loading">
          <!-- Type report -->
          <v-col cols="12" sm="12" md="6" offset-md="3">
            <base-select
              label="Tipo de reporte"
              v-model.trim="$v.parameters.reportTypes.$model"
              :items="reportTypes"
              item="text"
              :validation="$v.parameters.reportTypes"
            />
          </v-col>

          <!-- Axis -->
          <v-col
            cols="12"
            sm="12"
            md="6"
            offset-md="3"
            v-if="
              parameters.reportTypes != 'Reporte acumulado' &&
              parameters.reportTypes != 'Reporte mensual'
            "
          >
            <base-select
              label="Ejes"
              v-model.trim="$v.parameters.axis_description.$model"
              :items="axis"
              item="axis_description"
              :validation="$v.parameters.axis_description"
            />
          </v-col>

          <!-- Generate report -->
          <v-col cols="12" sm="6" md="6" offset-md="3" align="center">
            <v-btn class="btn btn-normal w-100" @click="generateReport()">
              Generar reporte
            </v-btn>
          </v-col>
          <alert-dialog :text="textReportDialog" :dialog="reportDialog" />
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axisCuscaApi from "../../apis/axisCuscaApi";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import AlertDialog from "../base-components/AlertDialog.vue";

export default {
  components: { AlertDialog },
  data() {
    return {
      reportTypes: [
        { text: "Reporte mensual" },
        { text: "Reporte acumulado" },
        { text: "Reporte despacho" },
      ],
      parameters: {
        axis_description: "",
        reportTypes: "Reporte mensual",
      },
      axis: [],
      items: [],
      redirectSessionFinished: false,
      textAlert: "",
      alertEvent: "",
      showAlert: false,
      loading: false,
      textReportDialog: "",
      reportDialog: false,
      uploadFinished: false,
      filterApplied: false,
    };
  },

  validations: {
    parameters: {
      axis_description: {
        minLength: minLength(1),
      },
      reportTypes: {
        required,
        minLength: minLength(1),
      },
    },
  },

  mounted() {
    this.initialize();
  },

  watch: {
    // uploadFinished() {
    //   if (this.filterApplied) {
    //     this.showReport();
    //     this.filterApplied = false;
    //   }
    // },
  },

  methods: {
    async initialize() {
      this.loading = true;
      const requests = [axisCuscaApi.get()];

      const responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(true, "Campos obligatorios.", "fail");
      });

      if (responses) {
        this.axis = responses[0].data.axisCuscas;
        this.axis.unshift("TODOS");
      }

      this.loading = false;
    },
    async generateReport() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.updateAlert(true, "Campos obligatorios.", "fail");
        return;
      }

      this.reportDialog = true;

      switch (this.parameters.reportTypes) {
        case "Reporte mensual":
          this.textReportDialog = "Generando reporte";
          this.showReport();
          break;
        case "Reporte acumulado":
          this.textReportDialog = "Generando reporte";
          this.showReport();
          break;
        case "Reporte despacho":
          this.textReportDialog = "Generando reporte";
          this.showReport();
          break;
      }
    },

    async showReport() {
      this.uploadFinished = false;
      if (this.parameters.reportTypes == "Reporte mensual") {
        console.log("reporte mensual");
      }
      if (this.parameters.reportTypes == "Reporte acumulado") {
        console.log("reporte mensual");
      }
      if (this.parameters.reportTypes == "Reporte despacho") {
        window.open(
          `/api/pdf?axis_description=${this.parameters.axis_description}&reportTypes=${this.parameters.reportTypes}`
        );
        this.reportDialog = false;
        return;
      }
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    },
  },
};
</script>

<style>
</style>
