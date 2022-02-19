import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export const plansState = {
  ...mapState("modules/plans", {
    plans: state => state.plans,
    plan: state => state.organization,
  })
};

export const plansGetters = {
  ...mapGetters("modules/plans", [
    "getPlans",
    "getPlan"
  ])
}
export const plansMutations = {
  ...mapMutations("modules/plans", [
    "SET_PLANS",
  ])
}