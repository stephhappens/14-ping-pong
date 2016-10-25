import 'whatwg-fetch';
import AppController from './controllers/app';


const el = document.querySelector('.grid');
const application = new AppController(el);

application.start();
