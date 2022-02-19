export const state = () => ({
  plans: [
    { id: 1, name: 'NAD', status: 'Complete', icon: 'mdi-checkbox-marked-circle-outline', date: '2021-01-23' },
    { id: 2, name: 'Hormone Replacement Therapy', status: 'Complete', icon: 'mdi-checkbox-marked-circle-outline', date: '2021-01-23' },
    { id: 3, name: 'Ozone Therapy', status: 'Booked', icon: 'mdi-calendar-check', date: '2021-03-23' },
    { id: 4, name: 'NAD', status: 'Booked', icon: 'mdi-calendar-check', date: '2021-03-24' },
    { id: 5, name: 'Hormone Replacement Therapy', status: 'Book Now', icon: 'mdi-calendar-blank', date: '2021-06-23' },
    { id: 6, name: 'NAD', status: 'Book Now', icon: 'mdi-calendar-blank', date: '2021-07-23' },
  ],
  plan: null
});

export const mutations = {
  SET_PLANS(state, data) {
    state.plans = data
  },
  SET_PLAN(state, data) {
    state.plan = data
  },
};
export const actions = {
  async fetchPlans({}, {}) {
    //API endpoint
  },
};
export const getters = {
  getPlans: (state) => () => {
    return state.plans;
  },
  getPlan: (state) => (id) => {
    return state.plans.find(e => e.id == id);
  }
}
