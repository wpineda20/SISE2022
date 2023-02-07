<template>
  <div data-app>
    <v-container>
      <v-card class="p-4" style="border-radius: 15px">
        <h3>Reportes {{ param.planification_name }}</h3>
        <hr />
        <v-row>
          <!-- Planifications -->
          <v-col cols="12" sm="12" md="6" offset-md="3">
            <base-select
              label="Tipo de proyecto"
              v-model.trim="$v.param.planification_name.$model"
              :items="planifications"
              item="planification_name"
              :validation="$v.param.planification_name"
            />
          </v-col>
          <!-- Planifications -->
        </v-row>
        <hr />
        <!-- Reports Content -->
        <reports-cusca v-if="param.planification_name == 'Plan Cuscatlán'" />
        <!-- Reports Content -->
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import ReportsCusca from "./ReportsCusca.vue";

export default {
  components: { ReportsCusca },
  data() {
    return {
      planifications: [
        { planification_name: "Plan Cuscatlán" },
        { planification_name: "Política Crecer Juntos" },
        { planification_name: "Plan Control Territorial" },
        { planification_name: "Plan Desarrollo Social" },
      ],
      param: {
        planification_name: "",
      },
    };
  },

  validations: {
    param: {
      planification_name: {
        required,
        minLength: minLength(1),
      },
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style>
</style>
