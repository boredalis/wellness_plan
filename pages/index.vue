<template>
  <v-row justify="center" height="100%">
    <v-col content-class="elevation-0" height="100%">
      <!--   <v-card class="logo py-4 d-flex justify-center">
      </v-card> -->
      <v-card :elevation="0" height="100%">
        <v-card-title class="title">
          2021 Wellness Plan
        </v-card-title>
        <v-card :elevation="1" width="98%" height="auto" :class="`rounded-lg`" class="d-flex justify-center mx-auto">
          <!-- <v-col> -->
          <v-expansion-panels v-model="panel" multiple>
            <v-expansion-panel>
              <v-expansion-panel-header :elevation="0" disable-icon-rotate>
                <!-- <v-row class="d-flex" align="center"> -->
                <v-row align="center">
                  <v-card-title class="py-2 px-2">Your Progress</v-card-title>
                  <v-card-subtitle class="mx-0 my-0 mt-1 py-0 px-0 subtitle">3 steps to complete</v-card-subtitle>
                </v-row>
                <v-spacer></v-spacer>
                <template v-slot:actions>
                  <v-card-subtitle class="mx-0 my-0 mt-1 py-0 px-0 subtitle text-decoration-underline hide" @click="isHidden = !isHidden">{{isHidden ? 'show' : 'hide'}}</v-card-subtitle>
                </template>
                <!-- </v-row> -->
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-row class="py-8 px-4">
                  <v-col class="col-3 text-center">
                    <vue-ellipse-progress thickness="19" emptyThickness="18" :size="150" :progress="value" :color="gradient" fontSize="1.5rem" fontWeight="bold">
                      <span slot="legend-value">%</span>
                    </vue-ellipse-progress>
                    <p class="text-center legend-caption">Completed
                      appointments</p>
                  </v-col>
                  <v-col class="col-9">
                    <v-card :elevation="1" height="max-content" :class="`rounded-lg`" class="d-flex justify-center mx-auto mb-6 px-6 py-6">
                      <v-row>
                        <v-col v-for="month in updatedMonths" class="text-center align-center">
                          {{month.name}}
                          <v-col v-for="plan in month.plans" class="py-0 px-0 mt-2">
                            <div class="ellipse" :class="[plan.status.toLowerCase().includes('complete') ? 'complete' : plan.status.toLowerCase().includes('booked') ? 'booked' : 'book']">
                            </div>
                          </v-col>
                        </v-col>
                      </v-row>
                    </v-card>
                    <plan v-for="plan in plans" :plan="plan" @delete="deletePlan"/>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <!-- </v-col> -->
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import VueEllipseProgress from 'vue-ellipse-progress';
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import { plansState, plansGetters } from '~/store/helpers'
export default {
  name: 'IndexPage',
  data: () => ({
    value: 0,
    interval: {},
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    gradient: {
      radial: false,
      colors: [{
          color: '#d4f2f9',
          offset: "0",
          opacity: '1',
        },
        {
          color: '#a4f0ff',
          offset: "25",
          opacity: '1',
        },
        {
          color: '#2b8b27',
          offset: "100",
          opacity: '0.6',
        },
      ]
    },
    isHidden: false,
    panel: [0]
  }),
  computed: {
    ...plansGetters,
    ...mapState({
      plans(state) {
        return this.getPlans()
      }
    }),
    updatedMonths(){
      return this.months.map(e => ({ name: e, plans: this.plans.filter(plan => e == moment(plan.date).format('MMM')) }))
    }
  },
  ...mapMutations,
  mounted() {
    setInterval(() => {
      if (this.value == ((this.plans.filter(e=>e.status.toLowerCase().includes('complete')).length*100)/this.plans.length).toFixed(0)) {
        return
      } else {
        this.value += 1;
      }
    }, 2);
  },
  methods: {
    moment(date) {
      return moment(date).format('MMM')
    },
    deletePlan(planId){
      let payload = this.plans.filter(plan=>plan.id!=planId)
      this.$store.commit('modules/plans/SET_PLANS',payload)
      this.value = 0
    }
  },
  // components: { CircleProgress }
}

</script>
<style lang="scss">
@import '~/assets/index.scss';
</style>
