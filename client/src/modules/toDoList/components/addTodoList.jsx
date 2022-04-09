import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { ToDoActions } from '../redux/action';
import moment from "moment";

function AddToDoList(props) {
    const [reload,setReload] = props.reload
    const [state, setState] = useState({
        name: "",
        description:"",
        dueDate: moment().format("YYYY-MM-DD"),
        status: 0,
        piority: 1
    })
    const { name, description, dueDate, status, piority } = state;
    console.log(dueDate);

    const handleChangeName = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            name: value
        });
    }

    const handleChangeDescription = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            description: value
        });
    }

    const handleChangeDueDate = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            dueDate: value
        });
    }

    const handleChangePiority = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            piority: value
        });
    }

    const handleSubmit = () => {
        props.addToDoList(state);
        setReload(true);
    }

    return (
       <div className='box-add'>
            <p className='title'>New Task</p>
            <form className='container-add' onSubmit={handleSubmit}>
                <input 
                   value={name}
                   className='input-add-name' 
                   onChange={handleChangeName} 
                   placeholder="Add new task ..."/>
                <label className='label'>Description</label>
                <textarea 
                   value={description}
                   rows={8}
                   className='textarea-add' 
                   onChange={handleChangeDescription} 
                   placeholder=""/>
                
                <div className='box'>
                    <div className='item-box'>
                        <label className='label'>Due Date</label>
                        <input 
                           value={dueDate}
                           className='input-date'
                           onChange={handleChangeDueDate} 
                           type="date"/>
                    </div>
                    <div className='item-box'>
                        <label className='label'>Piority</label>
                        <select
                           value={piority}
                           className='select'
                           onChange={handleChangePiority}>
                            <option value={0}>Low</option>
                            <option value={1}>Normal</option>
                            <option value={2}>High</option>
                        </select>
                    </div>
                </div>
                <button className='submit' type="submit">Add</button>
            </form>
       </div>
    )
}

function mapStateToProps(state) {
    const toDoList = state.toDoList;
    return { toDoList };
}
const mapDispatchToProps = {
    addToDoList: ToDoActions.addToDoList
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDoList);