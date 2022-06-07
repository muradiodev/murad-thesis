<template>
  <div class="container">

    <div v-if="m1===1">
      <h3 class="text-center my-3">
        Categories
      </h3>

      <div class="row">

        <div class="col-md-4 mb-3" v-for="c in categoryData" :key="c.id">
          <div class="card shadow">
            <img :src="c.photo" class="card-img-top" :alt="c.name">
            <div class="card-body bg-light">{{ c.description }}</div>
          </div>
        </div>

      </div>
    </div>






    <div v-else-if="m1===2">
      <h3 class="text-center my-3">
        Categories
      </h3>

      <div class="row">
        <div class="col-md-4 mb-3" v-for="(c,i) in categoryData" :key="c.id">
          <div class="card shadow">
            <img :src="c.photo" class="card-img-top" :alt="c.name" v-if="i%2===1">
            <div class="card-body bg-light">{{ c.description }}</div>
            <img :src="c.photo" class="card-img-bottom" :alt="c.name" v-if="i%2===0">
          </div>
        </div>
      </div>
    </div>






    <div v-else>

      <h3 class="text-center my-3">
        Categories
      </h3>

      <div class="row">

        <div class="col-md-4 mb-3" v-for="c in categoryData" :key="c.id">
          <div class="card shadow">
            <img :src="c.photo" class="card-img w-100" :alt="c.name">
            <div class="card-img-overlay" style="top: auto; background: rgba(0,0,0,0.5); color: white">
              <h5 class="card-title">{{ c.name }}</h5>
              <p class="card-text">{{ c.description }}</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>
<script>
export default {
  name: 'CategoriesModule',
  props: {
    categoryData: {},
    m1: {}
  }
}
</script>
<style lang="scss" scoped>


section {
  padding: 20px;
  position: relative;


}

</style>