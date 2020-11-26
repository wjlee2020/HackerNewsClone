import view from '../utils/view.js';

export default function Stories(path) {
    //display the html in the browser
    view.innerHTML = `<div>${path}</div>`;  
}