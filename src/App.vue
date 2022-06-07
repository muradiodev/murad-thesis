<template>
    <router-view/>
</template>

<script>

    import {mapState} from "vuex";

    export default {
        computed: {
            ...mapState({
                openModalCount: state => state.app.openModalCount
            })
        },
        watch: {
            openModalCount(newCount) {
                if (newCount > 0) {
                    document.body.className += 'modal-open';
                } else {
                    document.body.classList.remove('modal-open');
                }
            }
        }
    }

</script>


<style lang="scss">

    @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

    @import "~ag-grid-community/dist/styles/ag-grid.css";
    @import "~ag-grid-community/dist/styles/ag-theme-alpine.css";

    .fullHeight {
        min-height: 100vh;
    }

    .modal-open {
        overflow: hidden;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .ql-container{
      height: 100px !important;
    }

</style>

