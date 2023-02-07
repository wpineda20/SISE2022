<template>
  <div data-app>
    <alert-time-out
      :redirect="redirectSessionFinished"
      @redirect="updateTimeOut($event)"
    />
    <alert
      :text="textAlert"
      :event="alertEvent"
      :show="showAlert"
      @show-alert="updateAlert($event)"
      class="mb-2"
    />

    <loader v-show="loading" />
    <v-row v-if="!loading" class="pt-4">
      <!-- <h3>Reportes Plan Cuscatlán</h3> -->
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

      <!-- Start Month -->
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
          label="Mes inicial"
          v-model.trim="$v.parameters.start_month_name.$model"
          :items="months"
          item="month_name"
          :validation="$v.parameters.start_month_name"
        />
      </v-col>
      <!-- Start Month -->
      <!-- End Month -->
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
          label="Mes final"
          v-model.trim="$v.parameters.end_month_name.$model"
          :items="months"
          item="month_name"
          :validation="$v.parameters.end_month_name"
        />
      </v-col>
      <!-- End Month -->

      <!-- Generate report -->
      <v-col cols="12" sm="6" md="6" offset-md="3" align="center">
        <v-btn class="btn btn-normal w-100" @click="generateReport()">
          Generar reporte
        </v-btn>
      </v-col>
      <alert-dialog :text="textReportDialog" :dialog="reportDialog" />
    </v-row>
  </div>
</template>

<script>
import axisCuscaApi from "../../apis/axisCuscaApi";
import organizationalUnitApi from "../../apis/organizationalUnitApi";
import monthApi from "../../apis/monthApi";
import periodApi from "../../apis/periodApi";
import userApi from "../../apis/userApi";
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
        start_month_name: "",
        end_month_name: "",
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
      actualUser: {},
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
      start_month_name: {
        minLength: minLength(1),
      },
      end_month_name: {
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

  methods: {
    async initialize() {
      this.loading = true;
      const requests = [
        axisCuscaApi.get(),
        organizationalUnitApi.get(),
        monthApi.post("/monthsAllowed"),
        periodApi.get(),
        userApi.post("/actualUser"),
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
        this.actualUser = responses[4].data.user;

        this.parameters.axis_description = "General";
        this.parameters.ou_name = this.organizationalUnits[0].ou_name;
        this.parameters.month_name =
          this.months[new Date().getMonth()].month_name;
        this.parameters.period_name = this.periods[0].period_name;
      }
      this.validateTypeReport();
      this.loading = false;
    },

    updateTimeOut(event) {
      this.redirectSessionFinished = event;
    },

    async generateReport() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      switch (this.parameters.reportTypes) {
        case "Reporte mensual":
          this.reportDialog = true;
          this.textReportDialog = "Generando reporte mensual";
          this.showReport();
          break;
        case "Reporte acumulado":
          this.reportDialog = true;
          this.textReportDialog = "Generando reporte acumulado";
          this.showReport();
          break;
        case "Reporte despacho":
          this.reportDialog = true;
          this.textReportDialog = "Generando reporte despacho";
          this.showReport();
          break;
      }
    },

    async showReport() {
      console.log(this.parameters);
      if (this.parameters.reportTypes == "Reporte mensual") {
        setTimeout(() => {
          window.open(
            `/pdf/mensual?ou_name=${this.parameters.ou_name}&month_name=${this.parameters.month_name}&reportTypes=${this.parameters.reportTypes}`
          );
          this.reportDialog = false;
        }, 1000);
        return;
      }
      if (this.parameters.reportTypes == "Reporte acumulado") {
        setTimeout(() => {
          window.open(
            `/pdf/acumulado?ou_name=${this.parameters.ou_name}&start_month=${this.parameters.start_month_name}&end_month=${this.parameters.end_month_name}&reportTypes=${this.parameters.reportTypes}`
          );
          this.reportDialog = false;
        }, 1000);
        return;
      }
      if (this.parameters.reportTypes == "Reporte despacho") {
        setTimeout(() => {
          window.open(
            `/pdf/despacho?axis_description=${this.parameters.axis_description}&reportTypes=${this.parameters.reportTypes}`
          );
          this.reportDialog = false;
        }, 1000);
        return;
      }
    },

    validateTypeReport() {
      if (this.actualUser.role == "Auditor") {
        this.reportTypes.pop();
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
