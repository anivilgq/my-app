import {rerenderEntireTree} from "../../render";

let state = {
    profilePage: {
        postsData: [
            {id: 1, message:'Hi', like_counts: 11},
            {id: 2, message:'HRU?', like_counts: 5}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Dasha'},
            {id: 4, name: 'Pasha'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are u?'},
            {id: 4, message: 'I am fine ) What about u ?'}
        ]
    }
}
export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        like_counts: 0
    };

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}
export default state;