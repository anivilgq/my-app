import React from "react";
import {Redirect} from "react-router-dom"
import d from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;


    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);

    }
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;


    return (
        <div className={d.dialogs}>
            <div className={d.dialogItems}>
                {dialogsElements}
            </div>
            <div className={d.messages}>

                {messagesElements}

                <div className={d.messages}>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange}/>
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>

    )
}

export default Dialogs;