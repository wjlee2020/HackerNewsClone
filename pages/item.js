import view from '../utils/view.js'
import Story from '../components/Story.js'
import Comment from '../components/Comment.js'
import baseUrl from '../utils/baseUrl.js'


export default async function Item() {
    let story = null;
    let hasError = false;
    let hasComments = false;

    try {
        story = await getStory();
        hasComments = story.comments.length > 0;
    } catch(err) {
        hasError = true;
        console.error(err);
    } 
    if (hasError) {
        view.innerHTML = `<div class="error">Error when fetching story. Check your URL</div>`
    }
    view.innerHTML = `
    <div>
        ${Story(story)}
    </div>
    <hr/>
    ${hasComments? story.comments.map(comment => Comment(comment)).join('') : 'no comments'}
    `
}

async function getStory() {
    //check and get remainder of url for the comments
    const storyId = window.location.hash.split('?id=')[1];
    // console.log(storyId);
    // /item/:storyId get request route
    const response = await fetch(`${baseUrl}/item/${storyId}`);
    const story = await response.json();
    return story;
}
