<template>
  <div class="container">

    <div v-if="m3===1">

      <h4 class="text-center my-5">
        Collections
      </h4>

      <div class="row">

        <div class="col-md-3 mb-3" v-for="c in collectionData" :key="c.id">
          <div class="card  border-0">
            <img :src="c.photo" class="card-img-top" :alt="c.name">
            <div class="card-body text-center">{{ c.name }}</div>
          </div>
        </div>

      </div>



    </div>
    <div v-else-if="m3===2">
      <h4 class="text-center my-5">
        Collections
      </h4>

      <div class="row">
        <div class="col-md-6 mb-5" v-for="c in collectionData" :key="c.id">
          <div class="row">
            <div class="col-md-5">
              <img :src="c.photo" class="w-100" :alt="c.name" >
            </div>
            <div class="col-md-7 d-flex justify-content-between flex-column">

              <div class="lead fw-bold mb-3">{{ c.name }}</div>
              <p class="">{{ c.description }}</p>

              <div class="row">
                <div class="col-3" v-for="(p,i) in c.photos" :key="i"  >
                  <img :src="p" class="img-fluid img-thumbnail" alt="photo">
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    </div>
    <div v-else>

      <h4 class="text-center my-5">
        Collections
      </h4>

      <div class="row">
        <div class="col-md-6 mb-5" v-for="c in collectionData" :key="c.id">
          <div class="row">
            <div class="col-md-6">
              <img :src="c.photo" class="w-100" :alt="c.name" >
            </div>
            <div class="col-md-6 d-flex justify-content-between flex-column">

              <div class="row">
                <div class="col-4 mb-3" v-for="(p,i) in c.photos" :key="i" :class="{'offset-1': i%2===1}">
                  <img :src="p" class="img-fluid img-thumbnail" alt="photo">
                </div>
              </div>


              <div class="lead fw-bold mb-3">{{ c.name }}</div>

            </div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>
<script>
export default {
  name: 'CollectionModule',
  props: {
    collectionData: {},
    m3: {}
  }
}
</script>
<style lang="scss" scoped>


section {
  padding: 20px;
  position: relative;


}

</style>