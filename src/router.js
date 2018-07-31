import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ContactUs from './views/main/ContactUs.vue';
import Jobs from './views/main/Jobs.vue';
import Products from './views/innerpages/Products.vue';
import About from './views/main/About.vue';
import Portfolio from './views/main/Portfolio.vue';
import Ourclients from './views/main/Ourclients.vue';
import repairs_and_installation from './views/innerpages/repairs_and_installation.vue';
import home_and_office from './views/innerpages/home_and_office.vue';
import networking_and_cabling from './views/innerpages/networking_and_cabling.vue';
import corporate_and_Institutions from './views/innerpages/corporate_and_ Institutions.vue';
import website_design_and_development from './views/innerpages/website_design_and_development.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/About',
      name: 'about',
      component: About,
    },
    {
      path: '/ContactUs',
      name: 'contact Us',
      component: ContactUs,
    },
    {
      path: '/Jobs',
      name: 'Jobs',
      component: Jobs,
    },
    {
      path: '/Compsystems',
      name: 'Product',
      component: Products,
    },
    {
      path: '/Portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/Ourclients',
      name: 'clients',
      component: Ourclients,
    },
    {
      path: '/Repairs and Installations',
      name: 'Repairs_and_installation',
      component: repairs_and_installation,
    },
    {
      path: '/Home and Office Security',
      name: 'home_and_office',
      component: home_and_office,
    },
    {
      path: '/Networking and Cabling',
      name: 'networking_and_cabling',
      component: networking_and_cabling,
    },
    {
      path: '/Corparate and Institutions',
      name: 'corparate_and_institutions',
      component: corporate_and_Institutions,
    },
    {
      path: '/Website Design and Development',
      name: 'website_design_and_development',
      component: website_design_and_development,
    },
  ],
  mode: 'history',
});
