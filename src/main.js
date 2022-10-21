//import './assets/lib/css/bootstrap.min.css';
import './assets/lib/js/vue.global.js';

import PrimeVue from 'primevue/config';
import Button  from 'primevue/button';
import InputText  from 'primevue/inputtext';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import PanelMenu from 'primevue/panelmenu';
import TabMenu from 'primevue/tabmenu';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Panel from 'primevue/panel';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';
//import InputSwitch from 'primevue/inputswitch';
import RadioButton from 'primevue/radiobutton';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
//optional for column grouping
import Row from 'primevue/row';                     //optional for row
//import ConfirmationService from 'primevue/confirmationservice';
//import ConfirmDialog from 'primevue/confirmdialog';

import 'primevue/resources/themes/saga-blue/theme.css'        //theme
import 'primevue/resources/primevue.min.css'                 //core css               //core css
import './assets/lib/css/primeflex.min.css'                 //core css               //core css
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


const app = createApp(App);
app.component('Button',Button);
app.component('InputText',InputText);
app.component('Password',Password);
app.component('Divider',Divider);
app.component('Dropdown',Dropdown);
app.component('PanelMenu',PanelMenu);
app.component('Panel',Panel);
app.component('TabMenu',TabMenu);
app.component('Calendar',Calendar);
app.component('Checkbox',Checkbox);
app.component('Dialog',Dialog);
app.component('InputNumber',InputNumber);
app.component('DataTable',DataTable);
app.component('Column',Column);
app.component('Row',Row);
app.component('RadioButton',RadioButton);
//app.component('ConfirmationService',ConfirmationService);
//app.component('ConfirmDialog',ConfirmDialog);

app.use(PrimeVue).use(store).use(router).mount('#app')
