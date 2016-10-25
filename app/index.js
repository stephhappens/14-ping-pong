import 'whatwg-fetch';
import AppController from './controllers/app';


const el = document.querySelector('.full-page');
const application = new AppController(el);

application.start();
