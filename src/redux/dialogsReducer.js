const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
    dialogs: [
        {id: '1', userName: "Nurzhan"},
        {id: '2', userName: "Dauren"},
        {id: '3', userName: "Kusaiyn"},
        {id: '4', userName: "Birzhan"},
        {id: '5', userName: "Tamirkhan"}
    ],
    messages: [
        {id: 1, message: 'What\'s app?'},
        {id: 2, message: 'I\'m fine, thanks.'},
        {id: 3, message: 'Where are you from?'}
    ],
    newMessageBody: ''

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = ''
            state.messages.push({
                id: state.dialogs.length++,
                message: body
            })
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyAC = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body})

export default dialogsReducer;