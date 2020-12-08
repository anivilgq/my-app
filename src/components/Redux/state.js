let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message:'Hi', like_counts: 11},
                {id: 2, message:'HRU?', like_counts: 5}
            ],
            newPostText: 'it-kamaz'
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
    },
    _callSubscriber() {
        console.log('State was changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                like_counts: 0
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;