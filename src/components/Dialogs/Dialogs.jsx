import React from "react";
import {Redirect} from "react-router-dom"
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;


    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>

                {messagesElements}

                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>

        </div>

    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={d.messages}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"} />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;