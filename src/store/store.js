import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    parameters: []
  },
  mutations: {
    updateParameter(state, parameterData) {
      const idIndex = state.parameters.findIndex((parameter) => {
        return parameterData.id === parameter.id
      });
      if (idIndex === -1) {
        state.parameters.push({
          id: parameterData.id,
          key: parameterData.key,
          value: parameterData.value,
        });
      }
      else {
        state.parameters[idIndex] = {
          id: parameterData.id,
          key: parameterData.key,
          value: parameterData.value,
        }
      }
    },
    removeParameter(state, parameterId) {
      const tempParams = state.parameters.filter((parameter) => {
        return parameterId !== parameter.id
      });
      state.parameters = [ ...tempParams ];
    }
  },
  getters: {
    parameters: state => state.parameters,
    count: state => state.count
  },
})
