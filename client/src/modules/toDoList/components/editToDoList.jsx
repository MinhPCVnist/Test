import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { ToDoActions } from '../redux/action';
import moment from "moment";

function EditToDolist (props) {
    const _id = props._id;
    const [reload,setReload] = props.reload

    const [state, setState] = useState({
        name: props.name,
        description: props.description,
        dueDate: props.dueDate,
        status: props.status,
        piority: props.piority
    })
    const { name, description, dueDate, status, piority } = state;
    //console.log(dueDate);
    //console.log(moment(dueDate).format("YYYY-MM-DD"));
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
        props.editToDoList(_id, state);
        setReload(true);
    }

    return (
        <div className='box-edit'>
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
                           value={moment(dueDate).format("YYYY-MM-DD")}
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
                <button className='submit' type="submit">Update</button>
            </form>
        </div>
    )

}

function mapStateToProps(state) {
    const toDoList = state.toDoList;
    return { toDoList };
}
const mapDispatchToProps = {
    editToDoList: ToDoActions.editToDoList
}

export default connect(mapStateToProps, mapDispatchToProps)(EditToDolist);