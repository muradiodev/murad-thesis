<template>
  <div class="container">

    <div v-if="m2===1">

      <h3 class="text-start my-3">
        Best selling
      </h3>

      <div class="row">

        <div class="col-md-3 mb-3" v-for="p in productData" :key="p.id">
          <div class="card">
            <img :src="p.photo" class="card-img" :alt="p.name">
            <div class="card-img-overlay">

              <div class="row">
                <div class="col">
                  <span class="badge bg-danger" v-if="p.discount>0">{{ p.discount }}%</span>
                </div>
                <div class="col text-end">
                  <font-awesome-icon icon="heart" size="2x" class="text-white"/>
                </div>
              </div>

            </div>
            <div class="card-body">
              <div class="card-title">{{ p.name }}</div>
              <p class="card-text">
                <s class="me-2" v-if="p.oldPrice>p.price">{{ p.oldPrice }} $</s>
                <strong class="text-danger">{{ p.price }} $</strong>
              </p>
              <div>
                <button type="button" class="btn btn-outline-success w-100">
                  <font-awesome-icon icon="basket-shopping"/>
                  add to basket
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>








    <div v-else-if="m2===2">

      <h3 class="text-start my-3">
        Best selling
      </h3>

      <div class="my-3">

        <div class="card border-0 mb-5" v-for="p in productData" :key="p.id">
          <div class="row g-0">
            <div class="col-md-4 col-lg-3 position-relative">
              <img :src="p.photo" class="card-img" :alt="p.name">
              <div class="card-img-overlay">

                <div class="row">
                  <div class="col">
                    <span class="badge bg-danger" v-if="p.discount>0">{{ p.discount }}%</span>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-md-5  col-lg-6">

              <div class="card-body">
                <h4 class="card-title">{{ p.name }}</h4>
                <p class="card-text">
                  {{ p.description }}
                </p>
                <p class="card-text lead">
                  <s class="me-2" v-if="p.oldPrice>p.price">{{ p.oldPrice }} $</s>
                  <strong class="text-danger">{{ p.price }} $</strong>
                </p>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 p-3">


              <div class="my-3">
                <button type="button" class="btn btn-danger w-100">
                  <font-awesome-icon icon="basket-shopping"/>
                  add to basket
                </button>
              </div>

              <div class=" text-center text-danger">
                <font-awesome-icon icon="heart" size="1x"/>
                Add to wishlist
              </div>

            </div>
          </div>

        </div>

      </div>


    </div>









    <div v-else>

      <h3 class="text-start my-3">
        Best selling
      </h3>

      <div class="my-3">

        <div class="card border-0 mb-5" v-for="(p,i) in productData" :key="p.id">
          <div class="row g-0">
            <div class="col-md-4 col-lg-3 position-relative" :class="{'order-3': i%2===1}">
              <img :src="p.photo" class="card-img" :alt="p.name">
              <div class="card-img-overlay">

                <div class="row">
                  <div class="col">
                    <span class="badge bg-danger" v-if="p.discount>0">{{ p.discount }}%</span>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-md-5  col-lg-6" :class="{'order-2 text-end': i%2===1}">

              <div class="card-body">
                <h4 class="card-title">{{ p.name }}</h4>
                <p class="card-text">
                  {{ p.description }}
                </p>
                <p class="card-text lead">
                  <s class="me-2" v-if="p.oldPrice>p.price">{{ p.oldPrice }} $</s>
                  <strong class="text-danger">{{ p.price }} $</strong>
                </p>
              </div>
            </div>
            <div class="col-md-4 col-lg-3 p-3" :class="{'order-1': i%2===1}">


              <div class="my-3">
                <button type="button" class="btn btn-danger w-100">
                  <font-awesome-icon icon="basket-shopping"/>
                  add to basket
                </button>
              </div>

              <div class=" text-center text-danger">
                <font-awesome-icon icon="heart" size="1x"/>
                Add to wishlist
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>


  </div>
</template>
<script>
export default {
  name: 'ProductsModule',
  props: {
    m2: {},
    productData: {}
  }
}
</script>
<style lang="scss" scoped>


section {
  padding: 20px;
  position: relative;


}

</style>