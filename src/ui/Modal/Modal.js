import React, {useEffect, useMemo, useRef, useState} from 'react';
import ReactDOM from "react-dom";
import './Modal.scss';
import {useDispatch, useSelector} from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import {closeModal} from "../../store/slice/modalSlice";
import useOutsideClick from "../../utils/useOutsideClick";

import ButtonGroup from "../ButtonGroup/ButtonGroup";
import TextField from "../TextField/TextField";
import {addTodo, updateTodo} from "../../store/slice/todoSlice";
import SuccessIcon from "../Icons/SuccessIcon/SuccessIcon";

const Modal = () => {

    const modalState = useSelector((state)=>state.modal);
    const modalActionType = useSelector((state)=>state.modal.action.type);
    const payload = useSelector((state)=>state.modal.action.payload);
    const dispatch = useDispatch();

    const [domReady,setDomReady] = useState(false);
    const modalRef = useRef(null);
    const [objValueFields, setObjValueFields] = useState({});
    const [objErrorsField, setObjectErrorsField] = useState(false)
    const [success,setSuccess] = useState(false);
    const timerId = useRef(null);


    useEffect(()=> {
        setDomReady(true);
    },[domReady])


    const hideModal = ()=> {
        dispatch(closeModal());
        setObjValueFields({})
        setSuccess(false)
    }

    const getValueChangeField = (value)=> {
        setObjectErrorsField(false)
        setObjValueFields({ ...objValueFields, id:uuidv4(), ...value,completed:false})
    }

    const receiveAction = (data,action,payload)=> (dispatch)=> {
        switch (action) {
            case 'addTodo':
                setSuccess(true);
                setTimeout(()=> {
                    hideModal();
                },1700)
                return dispatch(addTodo(data))
            case 'updateTodo':
                setSuccess(true);
                setTimeout(()=> {
                    hideModal();
                },1700)
                return dispatch(updateTodo({...payload,data}))
        }
    }


    useOutsideClick(modalRef,hideModal);

    return setDomReady && modalState.isOpen
        ?  ReactDOM.createPortal(
        <div className={`Modal ${modalState.isOpen ? 'is-show' : ''} `}>
            <div className="Modal__wrapper">
                <div className="Modal__inner">
                    <div className="Modal__content" ref={modalRef}>
                        <button className="Modal__close" onClick={()=> hideModal()}>&times;</button>
                        { success
                            ? <SuccessIcon/>
                            : <div className="Modal__elements">
                                <header className="Modal__header">
                                    <h1 className="Modal__title">Add a task</h1>
                                </header>
                                <TextField
                                    info="Title"
                                    name="title"
                                    error={objErrorsField}
                                    onChangeCallBack={getValueChangeField}
                                    value={payload ? payload.title : ''}
                                />
                                <TextField
                                    type="multiline"
                                    info="Description"
                                    name="description"
                                    onChangeCallBack={getValueChangeField}
                                    value={payload ? payload.description : ''}
                                />
                                <ButtonGroup
                                    accept={()=>receiveAction(objValueFields,modalActionType,payload)(dispatch)}
                                    cancel={()=>hideModal()}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    , document.getElementById('modal'))
    : null
};

export default Modal;