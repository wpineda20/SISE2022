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
          <!-- Organization units -->
          <!-- <v-col cols="12" sm="12" md="6" offset-md="3">
            <base-select
              label="Unidad organizativa"
              v-model.trim="$v.parameters.ou_name.$model"
              :items="organizationalUnits"
              item="ou_name"
              :validation="$v.parameters.ou_name"
            />
          </v-col> -->

          <!-- Years -->
          <!-- <v-col cols="12" sm="12" md="6" offset-md="3">
            <base-select
              label="Años"
              v-model.trim="$v.parameters.value.$model"
              :items="years"
              item="value"
              :validation="$v.parameters.value"
            />
          </v-col> -->

          <!-- Months -->
          <!-- <v-col cols="12" sm="12" md="6" offset-md="3">
            <base-select
              label="Mes"
              v-model.trim="$v.parameters.month_name.$model"
              :items="months"
              item="month_name"
              :validation="$v.parameters.month_name"
            />
          </v-col> -->

          <!-- Plans -->
          <!-- <v-col cols="12" sm="12" md="6" offset-md="3">
            <base-select
              label="Tipo de planificación"
              v-model.trim="$v.parameters.planification_name.$model"
              :items="planifications"
              item="planification_name"
              :validation="$v.parameters.planification_name"
            />
          </v-col> -->

          <!-- Type report -->
          <v-col cols="12" sm="12" md="6" offset-md="3">
            <base-select
              label="Reporte"
              v-model.trim="$v.parameters.type_name.$model"
              :items="reportTypes"
              item="type_name"
              :validation="$v.parameters.type_name"
            />
          </v-col>

          <!-- Axis -->
          <v-col cols="12" sm="12" md="6" offset-md="3">
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
            <v-btn class="btn btn-normal w-100" @click="generateReport">
              Generar reporte
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import monthApi from "../../apis/monthApi";
import yearApi from "../../apis/yearApi";
import organizationalUnitApi from "../../apis/organizationalUnitApi";
import axisCuscaApi from "../../apis/axisCuscaApi";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      organizationalUnits: [],
      years: [],
      months: [],
      planifications: [
        { planification_name: "Plan cuscatlán" },
        { planification_name: "Política crecer juntos" },
        { planification_name: "Plan control territorial" },
        { planification_name: "Plan desarrollo social" },
      ],
      reportTypes: [
        { type_name: "Reporte mensual" },
        { type_name: "Reporte acumulado" },
        { type_name: "Reporte despacho" },
      ],
      parameters: {
        axis_description: "",
        ou_name: "",
        value: "",
        month_name: "",
        type_name: "",
        planification_name: "",
      },
      axis: [],
      redirectSessionFinished: false,
      textAlert: "",
      alertEvent: "",
      showAlert: false,
      loading: false,
    };
  },

  validations: {
    parameters: {
      axis_description: {
        required,
        minLength: minLength(1),
      },
      ou_name: {
        required,
        minLength: minLength(1),
      },
      value: {
        required,
        minLength: minLength(1),
      },
      month_name: {
        required,
        minLength: minLength(1),
      },
      type_name: {
        required,
        minLength: minLength(1),
      },
      planification_name: {
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
        // organizationalUnitApi.get(),
        // monthApi.get(),
        // yearApi.get(),
        axisCuscaApi.get(),
      ];

      const responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(true, "Campos obligatorios.", "fail");
      });

      if (responses) {
        // this.organizationalUnits = responses[0].data.organizationalUnits;
        // this.months = responses[1].data.months;
        // this.years = responses[2].data.years;
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

      window.open(
        `/generatePdf/${this.parameters.ou_name}/${this.parameters.month_name}/${this.parameters.value}/${this.parameters.planification_name}/${this.parameters.type_name}`
      );
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
