<template>
  <v-container data-app ref="top">
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
    <div class="container" v-if="actualUser.role == 'Administrador'">
      <v-row>
        <v-col align="start" cols="12" md="12" sm="12">
          <v-btn href="/actionsCuscatlan" class="btn-normal-close" rounded>
            Volver
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="container">
      <v-row>
        <v-tabs grow background-color="#f4f7fd">
          <v-tab @click="filterTracking('Mensuales')">Mensuales</v-tab>
          <v-tab @click="filterTracking('Atrasado')">Atrasados</v-tab>
          <v-tab @click="filterTracking('Ejecutado')">Ejecutados</v-tab>
          <v-tab @click="filterTracking('Completado')">Completados</v-tab>
        </v-tabs>
      </v-row>
    </div>

    <v-data-table
      :headers="headers"
      :items="recordsFiltered"
      :loading="loading"
      sort-by="action_description"
      class="elevation-3 shadow p-3 mt-3"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Seguimientos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="700px" persistent>
            <template v-slot:activator="{}">
              <v-row>
                <v-col
                  xs="12"
                  sm="12"
                  md="12"
                  class="d-none d-md-block d-lg-block"
                  align="end"
                >
                  <v-text-field
                    dense
                    label="Buscar"
                    outlined
                    type="text"
                    class=""
                    v-model="search"
                    @keyup="searchValue()"
                  ></v-text-field>
                </v-col>
              </v-row>
            </template>
            <v-card class="flexcard" height="100%">
              <v-card-title>
                <h1 class="mx-auto pt-3 mb-3 text-center black-secondary">
                  {{ formTitle }}
                </h1>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <!-- Form -->
                  <!-- User -->
                  <v-row>
                    <!-- Tracking Detail -->
                    <v-col cols="12" sm="12" md="12">
                      <base-text-area
                        label="¿Qué? ¿Cuándo? ¿Dónde? ¿Cuántos beneficiarios/asistentes?"
                        v-model.trim="$v.editedItem.tracking_detail.$model"
                        :validation="$v.editedItem.tracking_detail"
                        validationTextType="default"
                        :validationsInput="{
                          required: true,
                          minLength: true,
                          maxLength: true,
                        }"
                        :min="15"
                        :max="4000"
                        :rows="6"
                        auto-grow
                      />
                    </v-col>
                    <!-- Tracking Detail -->

                    <!-- Bubget executed -->
                    <v-col cols="12" sm="12" md="6">
                      <base-input
                        label="Presupuesto ejecutado"
                        v-model.trim="$v.editedItem.budget_executed.$model"
                        :validation="$v.editedItem.budget_executed"
                        type="number"
                        :disabled="true"
                      />
                    </v-col>
                    <!-- Bubget executed -->

                    <!-- Year Goal Actions -->
                    <v-col cols="12" sm="6" md="6">
                      <base-input
                        label="Meta de acciones anuales"
                        v-model.trim="$v.editedItem.year_goal_actions.$model"
                        :validation="$v.editedItem.year_goal_actions"
                        type="number"
                        :disabled="true"
                      />
                    </v-col>
                    <!-- Year Goal Actions -->
                    <!-- Annual Actions -->
                    <v-col cols="12" sm="6" md="12">
                      <base-input
                        label="Número de acciones"
                        v-model.trim="$v.editedItem.number_actions.$model"
                        :validation="$v.editedItem.number_actions"
                        v-mask="'####'"
                        type="number"
                        :min="2000"
                        :max="2050"
                      />
                      <p
                        v-show="verifyActionsText"
                        class="mb-0 orange-text"
                        style="display: flex; align-items: center"
                      >
                        <i class="material-icons">error_outline</i>
                        El número de acciones no debe ser mayor a la meta de
                        acciones anuales.
                      </p>
                    </v-col>
                    <!-- Annual Actions -->

                    <!-- Executed -->
                    <v-col cols="12" sm="12" md="12" class="pt-0">
                      <v-checkbox
                        v-model="$v.editedItem.executed.$model"
                        label="Ejecutado"
                      ></v-checkbox>
                    </v-col>
                    <!-- Executed -->
                    <!-- Tracking Status -->

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                      v-if="role == 'Administrador'"
                    >
                      <base-select-search
                        label="Estado de seguimiento"
                        v-model.trim="$v.editedItem.status_name.$model"
                        :items="trakingStatuses"
                        item="status_name"
                        :validation="$v.editedItem.status_name"
                        :validationsInput="{
                          required: true,
                          minLength: true,
                        }"
                      />
                    </v-col>
                    <!-- Tracking Status -->
                    <!-- Observation -->

                    <v-col cols="12" sm="12" md="12">
                      <base-text-area
                        label="Observación"
                        v-model.trim="$v.editedItem.observation.$model"
                        :validation="$v.editedItem.observation"
                        validationTextType="none"
                        :validationsInput="{
                          required: false,
                        }"
                        :readonly="role == 'Enlace'"
                        :disabled="role == 'Enlace'"
                        :min="0"
                        :max="500"
                        :rows="4"
                      />
                    </v-col>
                    <!-- Observation -->

                    <!-- Reply -->

                    <!-- <v-col cols="12" sm="12" md="12">
                      <base-text-area
                        label="Respuesta"
                        v-model.trim="$v.editedItem.reply.$model"
                        :validation="$v.editedItem.reply"
                        validationTextType="default"
                        :validationsInput="{
                          required: false,
                          minLength: true,
                          maxLength: true,
                        }"
                        :readonly="role == 'Enlace'"
                        :min="0"
                        :max="500"
                        :rows="4"
                      />
                    </v-col> -->
                    <!-- Reply -->
                  </v-row>
                  <!-- Form -->
                  <v-row>
                    <v-col align="center">
                      <v-btn
                        color="btn-normal no-uppercase mt-3"
                        rounded
                        @click="save"
                      >
                        Guardar
                      </v-btn>

                      <v-btn
                        color="btn-normal-close no-uppercase mt-3"
                        rounded
                        @click="close"
                      >
                        Cancelar
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="400px">
            <v-card class="h-100">
              <v-container>
                <h3 class="black-secondary text-center mt-3 mb-3">
                  Eliminar registro
                </h3>
                <v-row>
                  <v-col align="center">
                    <v-btn
                      color="btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto"
                      rounded
                      @click="deleteItemConfirm"
                      >Confirmar</v-btn
                    >
                    <v-btn
                      color="btn-normal-close no-uppercase mt-3 mb-3"
                      rounded
                      @click="closeDelete"
                    >
                      Cancelar
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
              v-bind="attrs"
              v-on="on"
            >
              mdi-clipboard-check-multiple
            </v-icon>
          </template>
          <span>Dar seguimiento</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              small
              @click="deleteItem(item)"
              v-bind="attrs"
              v-on="on"
              v-if="role == 'Administrador'"
            >
              mdi-delete
            </v-icon>
          </template>
          <span>Eliminar</span>
        </v-tooltip>
      </template>
      <template v-slot:no-data>
        <a
          href="#"
          class="btn btn-normal-secondary no-decoration"
          @click="initialize"
        >
          Reiniciar
        </a>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import userApi from "../../apis/userApi";
import trakingStatusApi from "../../apis/trakingStatusApi";
import roleApi from "../../apis/roleApi";
import lib from "../../libs/function";
import {
  required,
  minLength,
  maxLength,
  helpers,
} from "vuelidate/lib/validators";
import trackingCuscaApi from "../../apis/trackingCuscaApi";

export default {
  data: () => ({
    search: "",
    dialog: false,
    loading: false,
    dialogDelete: false,
    headers: [
      { text: "UNIDAD ORGANIZATIVA", value: "ou_name" },
      { text: "ACCIÓN", value: "action_description" },
      { text: "ESTADO", value: "status_name" },
      { text: "MES", value: "month_name" },
      { text: "AÑO", value: "year_name" },
      { text: "EJECUTADO", value: "executed" },
      { text: "ACCIONES", value: "actions", sortable: false },
    ],
    records: [],
    recordsFiltered: [],
    editedIndex: -1,
    editedItem: {
      tracking_detail: "",
      budget_executed: 0,
      user_name: "",
      status_name: "",
      executed: false,
      observation: "",
      // reply: "",
      number_actions: 0,
      year_goal_actions: "",
    },
    defaultItem: {
      tracking_detail: "",
      budget_executed: 0,
      user_name: "",
      status_name: "",
      executed: false,
      observation: "",
      // reply: "",
      number_actions: 0,
      year_goal_actions: "",
    },

    verifyActionsText: false,
    textAlert: "",
    alertEvent: "success",
    showAlert: false,
    users: [],
    trakingStatuses: [],

    redirectSessionFinished: false,
    filter: "Mensuales",
    role: "",
    loadingDataForm: false,
    actualUser: {},
  }),

  // Validations
  validations: {
    editedItem: {
      tracking_detail: {
        required,
        minLength: minLength(15),
        maxLength: maxLength(500),
      },
      year_goal_actions: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(10),
      },
      number_actions: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(10),
      },
      budget_executed: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(10),
      },
      user_name: {
        //required,
        minLength: minLength(1),
      },
      status_name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
      },
      executed: {},
      observation: {
        minLength: minLength(0),
        maxLength: maxLength(500),
      },
      // reply: {
      //   minLength: minLength(0),
      //   maxLength: maxLength(500),
      // },
    },
  },

  // Validations
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Nuevo registro"
        : "Realizar Seguimiento Mensual";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.loading = true;
      this.records = [];
      this.recordsFiltered = [];

      let requests = [
        trackingCuscaApi.get(null, {
          params: {
            filter: this.filter,
          },
        }),
        userApi.get(null, {
          params: { skip: 0, take: 200 },
        }),
        trakingStatusApi.get(),
        roleApi.get("/user"),
        userApi.post("/actualUser"),
      ];
      let responses = await Promise.all(requests).catch((error) => {
        this.updateAlert(true, "No fue posible obtener los registros.", "fail");
        this.redirectSessionFinished = lib.verifySessionFinished(
          error.response.status,
          401
        );
      });
      if (responses && responses[0].data.message == "success") {
        this.records = responses[0].data.trackingsCusca;
        this.users = responses[1].data.users;
        this.trakingStatuses = responses[2].data.trakingStatuses;
        this.role = responses[3].data.roles[0];
        this.actualUser = responses[4].data.user;

        this.editedItem.user_name = this.actualUser.user_name;

        this.recordsFiltered = this.records;
      }

      this.loading = false;
    },

    editItem(item) {
      this.dialog = true;
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);

      this.editedItem.tracking_detail = this.editedItem.tracking_detail;
      this.editedItem.number_actions = this.editedItem.number_actions;
      this.editedItem.observation = this.editedItem.observation;
      this.editedItem.executed =
        this.editedItem.executed == "SI" ? true : false;
    },

    deleteItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      const res = await trackingCuscaApi
        .delete(`/${this.editedItem.id}`)
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible eliminar el registros.",
            "fail"
          );
          this.close();
        });

      if (res.data.reason) {
        this.updateAlert(true, res.data.reason, "fail");
      }

      if (res.data.message == "success" && !res.data.reason) {
        this.redirectSessionFinished = lib.verifySessionFinished(
          res.status,
          200
        );
        this.updateAlert(true, "Registro eliminado.", "success");
      }

      this.initialize();
      this.closeDelete();
    },

    closeVerifyActions() {
      this.dialog = false;
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = this.defaultItem;
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.$nextTick(() => {
        this.editedItem = this.defaultItem;
        this.editedIndex = -1;
      });

      this.dialogDelete = false;
    },

    async save() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.updateAlert(true, "Campos obligatorios.", "fail");

        return;
      }

      if (this.editedIndex > -1) {
        const res = await trackingCuscaApi
          .put(`/${this.editedItem.id}`, this.editedItem)
          .catch((error) => {
            this.updateAlert(
              true,
              "No fue posible modificar el registro.",
              "fail"
            );
            this.close();
            this.redirectSessionFinished = lib.verifySessionFinished(
              error.response.status,
              419
            );
          });
        // console.log(res);
        if (res.data.reason) {
          this.updateAlert(true, res.data.reason, "fail");
          this.close();
          this.initialize();
        }

        if (res.data.verifyActions) {
          // this.upd<ateAlert(true, res.data.verifyActions, "fail");
          this.verifyActionsText = true;
          setTimeout(() => {
            this.verifyActionsText = false;
          }, 6000);
        }

        if (
          res.data.message == "success" &&
          !res.data.reason &&
          !res.data.verifyActions
        ) {
          this.updateAlert(
            true,
            "Registro actualizado correctamente.",
            "success"
          );
          this.close();
          this.initialize();
        }
      } else {
        const res = await trackingCuscaApi
          .post(null, this.editedItem)
          .catch((error) => {
            this.updateAlert(true, "No fue posible crear el registro.", "fail");
            this.close();
          });

        if (res.data.message == "success") {
          this.updateAlert(
            true,
            "Registro almacenado correctamente.",
            "success"
          );
        }
        this.close();
        this.initialize();
      }
    },

    searchValue() {
      this.recordsFiltered = [];

      if (this.search != "") {
        this.records.forEach((record) => {
          let searchConcat = "";
          for (let i = 0; i < record.action_description.length; i++) {
            searchConcat += record.action_description[i].toUpperCase();
            if (
              searchConcat === this.search.toUpperCase() &&
              !this.recordsFiltered.some((rec) => rec == record)
            ) {
              this.recordsFiltered.push(record);
            }
          }
        });
        return;
      }

      this.recordsFiltered = this.records;
    },

    updateAlert(show = false, text = "Alerta", event = "success") {
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;

      if (show) {
        this.$refs.top.scrollIntoView();
      }
    },

    updateTimeOut(event) {
      this.redirectSessionFinished = event;
    },

    openModal() {
      this.dialog = true;

      console.log(this.actualUser);
      this.editedItem.user_name = "leolopez48";
      this.editedItem.status_name = this.trakingStatuses[0].status_name;
      this.editedItem.tracking_detail = "";
      this.editedItem.observation = "";
      // this.editedItem.reply = "";
      this.editedItem.budget_executed = 0;
      this.editedItem.number_actions = 0;
      this.editedItem.executed = false;
    },

    async filterTracking(filter = "Mensuales") {
      this.loading = true;
      this.filter = filter;

      const response = await trackingCuscaApi
        .get(null, {
          params: {
            filter: filter,
          },
        })
        .catch((error) => {
          this.updateAlert(
            true,
            "No fue posible obtener los registro del filtro.",
            "fail"
          );
          this.redirectSessionFinished = lib.verifySessionFinished(
            error.response.status,
            419
          );
        });

      this.records = response.data.trackingsCusca;
      this.recordsFiltered = this.records;
      this.loading = false;
    },
  },
};
</script>
