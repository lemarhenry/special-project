<template>
  <div fluid>
    <!--carousel for moblie view-->
    <v-flex xs12>
      <v-card flat light height="250px" class="hidden-sm-and-up">
        <v-carousel hide-controls hide-delimiters d-block>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-flex>
    <!--end of mobile carousel-->
    <!--carousel desktop view -->
  
    <v-card flat light class="hidden-xs-only" ma-0 pa-0>
      <v-carousel hide-controls hide-delimiters d-block class="hidden-xs-only">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src ">
        </v-carousel-item>
      </v-carousel>
    </v-card>
  
    <!-- end of carousel desktop view 
  

                        <v-flex>
                          <v-card flat light color="" height="100px" ma-0 pa-0 class="hidden-sm-and-up">
                            <v-carousel hide-controls hide-delimiters d-block >
                              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
                            </v-carousel>
                          </v-card>
                        </v-flex> -->
                    <!-- testimonial carousel-->
                        <v-flex >
                          <v-card flat light color="" height="120px"   class="hidden-xs-only">
                          </v-card>
                        </v-flex>
                       
<!--what we offer-->
    <v-flex>
      <v-card light flat color="" height="140px" class="hidden-xs-only">
        <v-card-text class="text">
          What we offer
          <hr>
        </v-card-text>
      </v-card>
    </v-flex>
  
    <v-flex>
      <v-card light flat color="" height="80px" ma-0 pa-0 class="hidden-sm-and-up">
        <v-card-text class="mobile">
          What we offer
        </v-card-text>
      </v-card>
    </v-flex>
  
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card light flat>
          <v-card-title class="list">Product we sell</v-card-title>
          <v-card-text>
            <ul class="content">
              <a href="http://buy.fenntechltd.com/index.php?main_page=index&amp;cPath=1_12" class="link">
                <li>Computer Systems</li>
              </a><br>
              <a href="http://buy.fenntechltd.com/index.php?main_page=index&amp;cPath=1_13" class="link">
                <li>Laptops</li>
              </a><br>
              <a href="http://buy.fenntechltd.com/index.php?main_page=index&amp;cPath=1_14" class="link">
                <li>Tablet Computers</li>
              </a><br>
              <a href="http://buy.fenntechltd.com/index.php?main_page=index&amp;cPath=2" class="link">
                <li>Accessories</li>
              </a><br>
              <a href="http://buy.fenntechltd.com/index.php?main_page=index&amp;cPath=7" class="link">
                <li>Software</li>
              </a><br><br>
              <router-link to="/Compsystems" tag="span">
                <v-btn large color="success"  class="">More</v-btn>
              </router-link>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
  
  
      <v-flex d-flex xs12 sm6 md4>
        <v-card light flat>
          <v-card-title class="list">Repair & Installation</v-card-title>
          <v-card-text>
            <ul class="content">
              <li>General PC Repairs</li><br>
              <li>In-Home,In-Office</li><br>
              <li>Virus Removal</li><br>
              <li>Accessories</li><br>
              <li>Maintenace</li><br><br><br>
              <router-link to="/Repairs and Installations" tag="span">
                <v-btn large color="success"  class="">More</v-btn>
              </router-link>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
  
  
      <v-flex d-flex xs12 sm6 md4>
        <v-card light flat>
          <v-card-title primary class="list">Home & Office Security</v-card-title>
          <v-card-text>
            <ul class="content">
              <li>Security Camera (CCTV)</li><br>
              <li>Alarm & Panic Setup</li><br>
              <li>Access Control</li><br>
              <li>Laptop & PC Security</li><br>
              <li>General Security Products</li><br><br>
              <router-link to="/Home and Office Security" tag="span" cursor="pointer">
                <v-btn large color="success"  class="">More</v-btn>
              </router-link>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
  
  
      <v-flex d-flex xs12 sm6 md4>
        <v-card light flat>
          <v-card-title primary class="list">Networking & Cabling</v-card-title>
          <v-card-text>
            <ul class="content">
              <li>Networking Supplies (CCTV)</li><br>
              <li>Cables</li><br>
              <li>Networking Services</li><br>
              <li>Wireless Setup</li>
              <br><br>
              <router-link to="/Networking and Cabling" tag="span" cursor="pointer">
                <v-btn large color="success"  class="">More</v-btn>
              </router-link>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
  
  
      <v-flex d-flex xs12 sm6 md4>
        <v-card light flat>
          <v-card-title primary class="list">Corporate & Institutions</v-card-title>
          <v-card-text>
            <ul class="content">
              <li>Technology Procurement</li><br>
              <li>Point-Of-Sale Solution</li><br>
              <li>Wireless Networking Development</li><br>
              <br><br>
              <router-link to="/Corparate and Institutions" tag="span" cursor="pointer">
                <v-btn large color="success"  class="">More</v-btn>
              </router-link>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
  
  
      <v-flex d-flex xs12 sm6 md4>
        <v-card light flat>
          <v-card-title primary class="list">Website Design & Development</v-card-title>
          <v-card-text>
            <ul class="content">
              <li>Website solutions</li><br>
              <li>Web Applications</li><br>
              <li>Software Solution</li><br>
              <li>Intranet & CMS</li>
              <br><br>
              <router-link to="/Website Design and Development" tag="span" cursor="pointer">
                <v-btn large class="" color="success" raised>More</v-btn>
              </router-link>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  
    <!--end of what we offer-->
    <!-- cleints
      <v-flex>
        <v-card flat dark color="" height="120px" class="hidden-xs-only">
          <v-card-text class="text">Clients</v-card-text>
        </v-card>
      </v-flex>
    -->
    <footer></footer>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .link {
    color: black;
  }
  
  .text {
    text-align: center;
    font-size: 80px;
    font-weight: 200;
    color: #616161;
    font-family: 'Raleway', 'sans-serif';
  }
  
  .content {
    list-style: none;
    font-size: 17px;
    line-height: 1.5;
    text-align: left;
  }
  
  .list {
    font-size: 34px;
    text-align: left;
    font-weight: 400;
    color: #616161;
    margin-bottom: 1px;
    margin-top: 1px;
    line-height: 1.2;
    font-family: 'Raleway', 'sans-serif';
  }
  
  .mobile {
    font-weight: 400;
    color: #616161;
    text-align: center;
    font-size: 45px;
    font-weight: 400;
    font-family: 'Raleway', 'sans-serif';
  }
  
  .client {
    color: #30c27e;
    font-family: 'Raleway', 'sans-serif';
    font-size: 15px;
    align-content: left;
    font-weight: 400;
    margin-bottom: 1px;
    margin-top: 1px;
}

</style>

<script>
  export default {
    data() {
      return {
        items: [{
            src: 'https://firebasestorage.googleapis.com/v0/b/fenntech-79b71.appspot.com/o/FennTech%20Carosel%2F1.jpg?alt=media&token=410b485d-584a-4d10-8f53-e6f3be13e6c1'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/fenntech-79b71.appspot.com/o/FennTech%20Carosel%2F2.jpg?alt=media&token=e9fe0821-c096-473e-94d5-fa45e16f01c0'
          },
  
        ],
      }
  
  
    }
  }
</script>