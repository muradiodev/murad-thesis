export default {
    namespaced: true,
    state: {
        openModalCount: 0
    },
    mutations: {
        increaseOpenModalCount(state) {
            state.openModalCount++;
        },
        decreaseOpenModalCount(state) {
            state.openModalCount--;
        },
    },
    actions: {},
    modules: {}
}
