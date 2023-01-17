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
          <!-- Axis -->

          <!-- Organizational Units -->
          <v-col
            cols="12"
            sm="12"
            md="6"
            offset-md="3"
            v-if="parameters.reportTypes != 'Reporte despacho'"
          >
            <base-select
              label="Unidad/Dirección"
              v-model.trim="$v.parameters.ou_name.$model"
              :items="organizationalUnits"
              item="ou_name"
              :validation="$v.parameters.ou_name"
            />
          </v-col>
          <!-- Organizational Units -->

          <!-- Month -->
          <v-col
            cols="12"
            sm="12"
            md="6"
            offset-md="3"
            v-if="
              parameters.reportTypes != 'Reporte acumulado' &&
              parameters.reportTypes != 'Reporte despacho'
            "
          >
            <base-select-search
              label="Mes"
              v-model.trim="$v.parameters.month_name.$model"
              :items="months"
              item="month_name"
              :validation="$v.parameters.month_name"
            />
          </v-col>
          <!-- Month -->

          <!-- Periods -->
          <v-col
            cols="12"
            sm="12"
            md="6"
            offset-md="3"
            v-if="
              parameters.reportTypes != 'Reporte mensual' &&
              parameters.reportTypes != 'Reporte despacho'
            "
          >
            <base-select-search
              label="Periodo"
              v-model.trim="$v.parameters.period_name.$model"
              :items="periods"
              item="period_name"
              :validation="$v.parameters.period_name"
            />
          </v-col>
          <!-- Periods -->

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
import organizationalUnitApi from "../../apis/organizationalUnitApi";
import monthApi from "../../apis/monthApi";
import periodApi from "../../apis/periodApi";
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
        ou_name: "",
        month_name: "",
        period_name: "",
        reportTypes: "Reporte mensual",
      },
      axis: [],
      organizationalUnits: [],
      months: [],
      periods: [],
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
      ou_name: {
        minLength: minLength(1),
      },
      month_name: {
        minLength: minLength(1),
      },
      period_name: {
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
      const requests = [
        axisCuscaApi.get(),
        organizationalUnitApi.get(),
        monthApi.post("/monthsAllowed"),
        periodApi.get(),
      ];

      const responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(true, "Campos obligatorios.", "fail");
      });

      if (responses) {
        this.axis = responses[0].data.axisCuscas;
        this.axis.unshift("General");
        this.organizationalUnits = responses[1].data.organizationalUnits;
        this.months = responses[2].data.monthsAllowed;
        this.periods = responses[3].data.periods;

        this.parameters.axis_description = "General";
        this.parameters.ou_name = this.organizationalUnits[0].ou_name;
        this.parameters.month_name =
          this.months[new Date().getMonth()].month_name;
        this.parameters.period_name = this.periods[0].period_name;
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
      console.log(this.parameters);
      switch (this.parameters.reportTypes) {
        case "Reporte mensual":
          this.textReportDialog = "Generando reporte mensual";
          this.showReport();
          break;
        case "Reporte acumulado":
          this.textReportDialog = "Generando reporte acumulado";
          this.showReport();
          break;
        case "Reporte despacho":
          this.textReportDialog = "Generando reporte despacho";
          this.showReport();
          break;
      }
    },

    async showReport() {
      console.log(this.parameters);
      if (this.parameters.reportTypes == "Reporte mensual") {
        window.open(
          `/pdf/mensual?ou_name=${this.parameters.ou_name}&month_name=${this.parameters.month_name}&reportTypes=${this.parameters.reportTypes}`
        );
        this.reportDialog = false;
        return;
      }
      if (this.parameters.reportTypes == "Reporte acumulado") {
        window.open(
          `/pdf/acumulado?ou_name=${this.parameters.ou_name}&reportTypes=${this.parameters.reportTypes}`
        );
        this.reportDialog = false;
        return;
      }
      if (this.parameters.reportTypes == "Reporte despacho") {
        window.open(
          `/pdf/despacho?axis_description=${this.parameters.axis_description}&reportTypes=${this.parameters.reportTypes}`
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
