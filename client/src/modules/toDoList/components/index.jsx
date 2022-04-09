import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import  AddToDoList from './addTodoList';
import { ToDoActions } from '../redux/action';
import ToDoCard from './toDoCard';


function ToDoList (props) {

  const [ toDo, setToDo] = useState();
  const [ lists, setLists] = useState();
  const { toDoList } = props;
  const [ reload, setReload] = useState(false);

  useEffect(()=> {
    props.getToDoList();
  },[]);

  useEffect(() => {
    if (toDoList && toDoList.list) {
        //console.log(toDoList.list); 
        setLists(toDoList.list);
    }
  })

  let querry = "";
  const handleChangeSearch = (e) => {
    const value = e.target.value;
    querry = value;
    console.log(querry);
    if (querry !== "") {
      props.searchToDoList(querry);
    } else {
      props.getToDoList();
    }
  }

  let checkBox = useMemo(() => {
    if (lists) {
      let check = false
      lists.map((e) => {
        if (e.status == true) check = true;
      })
      return check;
    }
  }, [lists]);
  
  const handleClickRemoveMany = () => {
    lists.map((e) => {
      if (e.status == true) {
        props.deleteToDoList(e._id);
      };
    })
    setReload(true);
  }

  return (
    <div className='container'>
        <AddToDoList reload={[reload, setReload]}/>
        <div className='box-list'>
            <p className='title-list'>To Do List</p>
            <input 
                className='search'
                placeholder='Search ...'
                onChange={handleChangeSearch}/>
            <div>
                {lists && lists.length ? 
                    lists
                    .sort( (a,b) => new Date(a.dueDate) - new Date(b.dueDate))
                    .map((toDo, index) => (
                    <ToDoCard key={index} detail = {toDo} update={[lists, setLists]} reload ={[reload,setReload]}/>
                )): null}
            </div>
            {
            checkBox && (
              <div className='bulk-action'>
                 <p>Bulk Action</p>
                 <div>
                    <button className='button-done'>Done</button>
                    <button className='button-remove' onClick={()=>handleClickRemoveMany()}>Remove</button>
                 </div>
              </div>
            )
            }
        </div>
    </div>
  )
}

function mapStateToProps(state) {
  const toDoList = state.toDoList;
  return { toDoList };
}

const mapDispatchToProps = {
  getToDoList: ToDoActions.getToDoList,
  deleteToDoList: ToDoActions.deleteToDoList,
  searchToDoList: ToDoActions.searchToDoList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);