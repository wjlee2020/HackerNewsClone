
import Stories from './pages/stories.js';
import Item from './pages/item.js';

//initializing router, using hash router, prepended with # mark
const router = new Navigo(null, true, '#');
console.log(router);

//create individual routes using class RouterHandler. export RouterHandler to app.js to instantiate
export default class RouterHandler {
  constructor() {
      //method that will create routes
    this.createRoutes()  
  }  
  
  createRoutes() {
      //take an array of routes, each route will consist of object w/ properties: path and page (from stories.js)
    const routes = [
      { path: '/', page: Stories },
      { path: '/new', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/show', page: Stories },
      { path: '/item', page: Item}
    ];
    
    //to create each route, iterate over routes array
    routes.forEach(({path, page}) => {
      router.on(path, () => {
         page(path); 
      }).resolve();
    })
  }
}