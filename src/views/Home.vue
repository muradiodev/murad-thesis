<template>
  <div class="container my-3 py-4">

    <div class="row">
      <div class="col-md-3">
        <h2>Logo</h2>
      </div>
      <div class="col-md-4">

      </div>
      <div class="col-md-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search">
          <button class="btn btn-success" type="button">
            <font-awesome-icon icon="search"/>
          </button>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="container">
    <ul class="nav">
      <li class="nav-item" v-for="(m,i) in menuData" :key="i">
        <router-link class="nav-link" aria-current="page" :to="m.link">{{ m.label }}</router-link>
      </li>
    </ul>
  </div>
  <HeroBanner/>
  <hr>
  <section :class="{'journey-enabled': journeyIsActive, active: journeyIsActive && activeModule===1}" id="section_1">
    <div class="toolbox" v-if="journeyIsActive && activeModule === 1 ">
      <div class="card">
        <div class="card-body">
          <strong>Choose alternative</strong>
          <div class="mt-3">
            <select v-model.number="m1" class="form-control">
              <option value="1">variant 1</option>
              <option value="2">variant 2</option>
              <option value="3">variant 3</option>
            </select>
          </div>

          <div class="mt-3">
            <button class="btn btn-sm btn-outline-primary me-3" @click.prevent="activateModule(2)">next</button>
          </div>
        </div>
      </div>

    </div>
    <CategoriesModule :category-data="categoryData" :m1="m1"/>
    <div class="tent" v-if="activeModule>0 && activeModule!==1" @click="activateModule(1)"></div>
  </section>


  <section :class="{'journey-enabled': journeyIsActive, active: journeyIsActive && activeModule===2}"
           style="background: #eee" id="section_2">

    <div class="toolbox" v-if="journeyIsActive && activeModule === 2 ">
      <div class="card">
        <div class="card-body">
          <strong>Choose alternative</strong>
          <div class="mt-3">
            <select v-model.number="m2" class="form-control">
              <option value="1">variant 1</option>
              <option value="2">variant 2</option>
              <option value="3">variant 3</option>
            </select>
          </div>

          <div class="mt-3">
            <button class="btn btn-sm btn-outline-primary me-3" @click.prevent="activateModule(1)">prev</button>
            <button class="btn btn-sm btn-outline-primary me-3" @click.prevent="activateModule(3)">next</button>
          </div>
        </div>
      </div>

    </div>
    <ProductsModule :m2="m2" :product-data="productData"/>
    <div class="tent" v-if="activeModule>0 && activeModule!==2" @click="activateModule(2)"></div>
  </section>


  <section :class="{'journey-enabled': journeyIsActive, active: journeyIsActive && activeModule===3}" id="section_3">

    <div class="toolbox" v-if="journeyIsActive && activeModule === 3 ">
      <div class="card">
        <div class="card-body">
          <strong>Choose alternative</strong>
          <div class="mt-3">
            <select v-model.number="m3" class="form-control">
              <option value="1">variant 1</option>
              <option value="2">variant 2</option>
              <option value="3">variant 3</option>
            </select>
          </div>


          <div class="mt-3">
            <button class="btn btn-sm btn-outline-primary me-3" @click.prevent="activateModule(2)">prev</button>
            <button class="btn btn-sm btn-outline-success me-3" @click.prevent="finishJourney">finish</button>
          </div>

        </div>
      </div>

    </div>
    <div class="container">

      <CollectionModule :m3="m3" :collection-data="collectionData"/>
    </div>
    <div class="tent" v-if="activeModule>0 && activeModule!==3" @click="activateModule(3)"></div>
  </section>


  <div class="bg-dark py-4 text-white">

    <div class="container">

      <div class="row">
        <div class="col-md-3">
          <h2>Logo</h2>
        </div>
      </div>

    </div>


  </div>


  <div class="fixed-bottom bg-dark" v-if="journeyIsActive">
    <div class="container text-end py-3">
      <div class="btn-group rounded-0">
        <button class="btn btn-success  rounded-0 active" @click.prevent="finishJourney">Submit</button>
        <button class="btn btn-success  rounded-0" @click.prevent="finishJourney">
          <font-awesome-icon icon="arrow-alt-circle-right"/>
        </button>
      </div>
    </div>
  </div>


  <div v-if="!journeyIsActive">
    <a class="stat-journey-button" @click.prevent="startJourney">
      Join a feedback
    </a>
  </div>


  <Modal v-if="personalInfoModalIsOpen" size="lg" title="Start journey" @modalClose="personalInfoModalIsOpen=false"
         :z-index="960">


    <form @submit.prevent="personalInfoModalSubmit">

      <div class="mb-3">
        <label for="name">Name</label>
        <div>
          <input type="text" required class="form-control" v-model.trim="name" id="name">
        </div>
      </div>
      <div class="mb-3">
        <label for="email">Email</label>
        <div>
          <input type="email" required class="form-control" v-model.trim="email" id="email">
        </div>
      </div>

      <div class="mb-3">
        <label for="gender">Gender</label>
        <div>
          <select required class="form-control" v-model.trim="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div class="mb-3">
        <label for="range">Please rate your <em><strong>technical</strong></em> skills:</label>
        <div class="row mt-2">

          <div class="col-1">
            Bad
          </div>
          <div class="col-1 text-center" v-for=" i in 10" :key="i">
            <label>
              <input type="radio" name="mySkill" v-model="skillRate" :value="i"> <br>
              <strong :class="{'text-danger': i<5, 'text-warning': i>4 && i < 8, 'text-success': i>7}">{{ i }}</strong>
            </label>
          </div>
          <div class="col-1">
            Good
          </div>
        </div>
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-success">Start</button>
      </div>


    </form>


  </Modal>
  <Modal v-if="finishModalIsOpen" size="md" title="Finish journey" @modalClose="finishModalIsOpen=false"
         :z-index="960">


    <form @submit.prevent="finishModalSubmit">

      <div class="mb-3">
        <label for="range">Rate your experience:</label>
        <div class="row mt-2">

          <div class="col-1">
            Worst
          </div>
          <div class="col-1 text-center" v-for=" i in 10" :key="i">
            <label>
              <input type="radio" name="mySkill" v-model="satScore" :value="i"> <br>
              <strong :class="{'text-danger': i<7, 'text-warning': i>6 && i < 9, 'text-success': i>8}">{{ i }}</strong>
            </label>
          </div>
          <div class="col-1">
            Best
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="comment">Suggestions for improvement? (optional) </label>
        <div>
          <textarea class="form-control" v-model.trim="comment" id="comment" rows="7">

          </textarea>
        </div>
      </div>


      <div class="mb-3">
        <button type="submit" class="btn btn-success">Submit feedback</button>
      </div>


    </form>


  </Modal>

</template>

<script>

import HeroBanner from "@/views/HeroBanner";
import Modal from "@/components/Modal";
import {customAlert, customAsk} from "@/utils/utils";
import {submitData} from "@/repositories/GeneralDataRepository";
import CategoriesModule from "@/views/CategoriesModule";
import ProductsModule from "@/views/ProductsModule";
import CollectionModule from "@/views/CollectionsModule";

const dayjs = require('dayjs');

const menuData = require('../data/menu.json');
const categoryData = require('../data/categories.json');
const productData = require('../data/products.json');
const collectionData = require('../data/collections.json');


export default {
  name: 'Home',
  components: {CollectionModule, ProductsModule, CategoriesModule, HeroBanner, Modal},
  data() {

    return {
      menuData: [],
      categoryData: [],
      productData: [],
      collectionData: [],


      personalInfoModalIsOpen: false,
      journeyIsActive: false,
      finishModalIsOpen: false,

      activeModule: 0,

      startTime: null,
      endTime: null,

      name: '',
      email: '',
      gender: '',
      browserName: '',
      browserFontSize: '15',
      screenResolution: {
        width: 0,
        height: 0
      },
      m1: 1,
      m2: 1,
      m3: 1,
      comment: '',
      skillRate: 0,
      satScore: 0,
    }
  },
  methods: {

    startJourney() {

      customAsk("Info", "Please consider that your info...", 'question', () => {
        this.personalInfoModalIsOpen = true;
        //2022-06-02T17:46:31.181Z
        this.startTime = dayjs().format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z";
      }, () => {

      });

    },
    personalInfoModalSubmit() {
      this.journeyIsActive = true;
      this.personalInfoModalIsOpen = false;
      this.activateModule(1);
    },


    finishJourney() {
      this.finishModalIsOpen = true;
    },

    finishModalSubmit() {

      this.endTime = dayjs().format("YYYY-MM-DDTHH:mm:ss.SSS") + "Z";

      let data = {
        "name": this.name,
        "email": this.email,
        "browserName": this.browserName,
        "browserFontSize": this.browserFontSize,
        "screenResolution": {
          "width": this.screenResolution.width,
          "height": this.screenResolution.height
        },
        "userIp": "192.168.1.1",
        "skillRate": this.skillRate,
        "satScore": this.satScore,
        "m1": this.m1,
        "m2": this.m2,
        "m3": this.m3,
        "gender": this.gender,
        "finaldesc": this.comment,
        "startTime": this.startTime,
        "endTime": this.endTime,

      };

      submitData(data).then(({code, message}) => {
        if (code === 200) {
          customAlert(`Success`, "Thanks for feedback", 'success', () => {
            this.journeyIsActive = false;
            this.finishModalIsOpen = false;
            this.activeModule = 0;
          })
        } else {
          customAlert(`Error ${code}`, message, 'danger')
        }
      })


    },

    activateModule(id) {
      if (this.journeyIsActive) {
        this.activeModule = id;

        document.getElementById('section_' + id).scrollIntoView();
      }
    },

    detectBrowser() {
      if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        return 'Opera';
      } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        return 'Chrome';
      } else if (navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
      } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        return 'Firefox';
      } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        return 'IE';//crap
      } else {
        return 'Unknown';
      }
    }
  },
  mounted() {

    this.browserName = this.detectBrowser();

    this.screenResolution.width = window.innerWidth
    this.screenResolution.height = window.innerHeight

    this.menuData = menuData;
    this.categoryData = categoryData;
    this.productData = productData;
    this.collectionData = collectionData;

  }
}
</script>

<style lang="scss">


.nav-link {
  text-decoration: none;
  color: green;
  font-weight: bold;
}


.stat-journey-button {
  position: fixed;
  right: 0;
  top: 50%;
  color: purple;
  border: 3px dashed purple;
  border-radius: 10px;
  padding: 10px 30px;
  text-decoration: none;
  cursor: pointer;
  background: #ffffff;

  transform: rotate(-90deg);
  /* Legacy vendor prefixes that you probably don't need... */
  /* Safari */
  -webkit-transform: rotate(-90deg);
  /* Firefox */
  -moz-transform: rotate(-90deg);
  /* IE */
  -ms-transform: rotate(-90deg);
  /* Opera */
  -o-transform: rotate(-90deg);
  /* Internet Explorer */
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);

  &:hover {
    background: purple;
    color: white;
    border-style: solid;
  }
}

section {
  padding: 20px;
  position: relative;


  &.journey-enabled {
    border: 1px solid red;
    cursor: pointer;

  }

  &.active {
    padding-top: 100px;
    border: 3px dashed red;
    margin: 20px 0;
  }

  .tent {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
  }

  .toolbox {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 1000;
    width: 300px;
  }

}

</style>
