<template>
  <div>
    <v-card :elevation="1" height="max-content" :class="`rounded-lg`" class="d-flex justify-center mx-auto mb-2 px-6 py-6">
      <v-row class="align-center">
        <p class="col-9 px-0 py-0 mb-0">{{plan.name}}</p>
        <v-spacer />
        <div class="col-3 px-0 py-0 d-flex align-center">
          <div class="row align-center">
            <v-icon :color="plan.status.toLowerCase().includes('complete') ? 'green lighten-1' : plan.status.toLowerCase().includes('booked') ? 'blue darken-2' : 'blue lighten-2'">
              {{plan.icon}}
            </v-icon>
            <!-- class="red--text text--lighten-5" -->
            <p class="ml-3 font-weight-medium mb-0 text-subtitle-1" :class="[plan.status.toLowerCase().includes('complete') ? 'green--text text--lighten-3' : plan.status.toLowerCase().includes('booked') ? 'blue--text text--darken-2' : 'blue--text text--lighten-2']">{{plan.status}}</p>
          </div>
          <v-spacer />
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="white" depressed > -->
              <v-icon v-bind="attrs" v-on="on" large color="grey lighten-2">
                mdi-dots-horizontal
              </v-icon>
              <!-- </v-btn> -->
            </template>
            <v-list :elevation="1" class="py-0">
              <v-list-item class="py-0">
                <v-list-item-title class="py-0 px-0 grey--text text--lighten-1">Edit</v-list-item-title>
              </v-list-item>
              <v-list-item class="py-0">
                <v-list-item-title @click="$emit('delete',plan.id)" class="py-0 px-0 grey--text text--lighten-1">Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    plan: Object
  }
}

</script>
<style lang="scss" scoped>
@import '~/assets/index.scss';

.mdi-dots-horizontal {
  cursor: pointer;

  &:active {
    transform: scale(.90);
  }
}

.v-list-item {
  min-height: 30px;
  cursor:pointer;
}

</style>
