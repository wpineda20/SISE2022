<template>
  <v-dialog v-model="dialog" width="500" persistent>
    <v-card>
      <v-card-text>
        <loader />
        <h4 class="text-center">{{ titleCard }}</h4>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      titleCard: "",
      totalDots: 4,
      counterDots: 0,
      textDots: "",
      interval: "",
    };
  },
  props: {
    dialog: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
      default: "",
    },
    intervalTime: {
      type: Number,
      default: 500,
    },
  },

  mounted() {
    this.intervalDots();
  },
  update() {
    window.clearInterval(this.interval);
    this.intervalDots();
  },
  methods: {
    intervalDots() {
      this.interval = setInterval(() => {
        if (this.counterDots === this.totalDots) {
          this.counterDots = 0;
          this.textDots = "";
        } else {
          this.textDots += ".";
        }
        this.titleCard = this.text + this.textDots;
        this.counterDots++;
      }, this.intervalTime);
    },
  },
};
</script>

<style>
</style>
