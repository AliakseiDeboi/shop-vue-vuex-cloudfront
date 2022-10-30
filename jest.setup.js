import Vue from 'vue';
import Vuetify from 'vuetify';
import { config } from '@vue/test-utils';

config.mocks.$t = key => key;

Vue.config.productionTip = false;
Vue.use(Vuetify);
