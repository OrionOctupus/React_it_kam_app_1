import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

function mapStateToProps(state) {
    return {
        dialogsPage: state.dialogsPage
    }
};

function mapDispatchToProps(dispatch) {
    return {
        updateNewMessageBody: () => dispatch(sendMessageCreator()),
        sendMessage: (body) => dispatch(updateNewMessageBodyCreator(body)),
    }
};

export default DialogsContainer;

// function DialogsContainer(props) {
//     // debugger;
//     // let state = props.store.getState().dialogsPage;

//     // let onSendMessageClick = () => {
//     //     props.store.dispatch(sendMessageCreator());
//     // };

//     // let onNewMessageChange = (body) => {
//     //     props.store.dispatch(updateNewMessageBodyCreator(body));
//     // };

//     // return (
//     //     <StoreContext.Consumer>
//     //         {
//     //             (store) => {
//     //                 let state = store.getState().dialogsPage;

//     //                 let onSendMessageClick = () => {
//     //                     store.dispatch(sendMessageCreator());
//     //                 };

//     //                 let onNewMessageChange = (body) => {
//     //                     store.dispatch(updateNewMessageBodyCreator(body));
//     //                 };
//     //                 return (
//     //                     <Dialogs
//     //                         updateNewMessageBody={onNewMessageChange}
//     //                         sendMessage={onSendMessageClick}
//     //                         dialogsPage={state}
//     //                     />
//     //                 )
//     //             }
//     //         }
//     //     </StoreContext.Consumer>
//     // );
// }