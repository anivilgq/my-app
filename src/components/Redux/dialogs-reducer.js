const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}]
            };

        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
    }
}

export default dialogsReducer;
