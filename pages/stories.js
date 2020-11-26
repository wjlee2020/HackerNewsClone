import view from '../utils/view.js';

export default async function Stories(path) {
    //get stories and resolve it
    const stories = await getStories(path);
    //check if there are stories
    const hasStories = stories.length > 0;
    //display the html in the browser via ternary to make sure there are stories
    view.innerHTML = `<div>
        ${hasStories ? stories.map(story => JSON.stringify(story)) : 'No stories available'}
    </div>`;  
}

// from: https://node-hnapi.herokuapp.com routes
// / (TOP) -> /news
// /new (newest) -> /newest
// /ask (Ask) -> /ask
// /show (show) -> /show
// /jobs (jobs) -> /jobs

async function getStories(path) {
    //check to see if on home route
    const isHomeRoute = path === '/';
    const isNewRoute = path === '/new'
    if(isHomeRoute) {
        path = '/news';
    } else if(isNewRoute) {
        path = '/newest';
    }
    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    return stories;
}