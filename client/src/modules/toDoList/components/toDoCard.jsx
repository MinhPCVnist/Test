import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import EditToDoList from './editToDoList';
import { ToDoActions } from '../redux/action';

function ToDoCard(props) {
    const { _id, name, description, dueDate, status, piority} = props.detail;
    const [reload,setReload] = props.reload;
    const [lists, setLists] = props.update;
    const [ showDetail, setShowDetail] = useState(false);


    const handleDelete = () => {
        props.deleteToDoList(_id);
        setReload(true);
    }

    const handleDetail = () => {
        if (showDetail == false) { 
            setShowDetail(true);
        } else {
            setShowDetail(false);
        }
    }

    const handleClickCheckBox = (e) => {
        const checked = e.target.checked;
        setLists(lists.map((e) => {
            if (e._id == _id) {
                e.status = checked;
            }
            return e;
        }));
    }

    return (
        <div className='container-list'>
            <div className='item-list'>
                <input 
                    className='checkbox'
                    type="checkbox"
                    checked={status}
                    onChange={handleClickCheckBox}
                />
                <label className='todo'>{name}</label>
                <button className='button_detail' onClick={()=>handleDetail()}>{showDetail ? "Hide" : "Detail"}</button>
                <button className='button_remove' onClick={()=>handleDelete()} >Remove</button>
            </div>
            <div>
                {showDetail && (
                    <EditToDoList 
                        key={_id}
                        reload={[reload, setReload]}
                        _id={_id}
                        name={name}
                        description={description}
                        dueDate={dueDate}
                        status={status}
                        piority={piority}/>
                )}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {
    deleteToDoList: ToDoActions.deleteToDoList
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoCard);
