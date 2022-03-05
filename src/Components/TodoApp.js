import React, { useState } from 'react';
import './TodoApp.css';


function TodoApp() {
  const [state, setState] = useState('');
  const [newitem, setNewitem] = useState('');

  const submitbutton = () => {
    if (state === "") {
      return alert("Please Input the Field")
    }
    else {
      setNewitem((preval) => {
        // console.log([...preval, state])
        return [...preval , state]
      });
      setState('')
    }
  }
  console.log(state)

  // const submitbutton = () =>{
  //   (setNewitem(state))
  //   console.log(newitem)
  // }

  const deletebutton = (i) => {
    // console.log(i)
    const updated = newitem.filter((elem, index) => {
      return index !== i;
    })
    setNewitem(updated);
  }
  return (
    <>
      <div className='container-wrapper'>
        <div className='wrapper'>
          <div className='heading'>
            <h2 >Todo App</h2>
          </div>
          <div className='form'>
            <input className='input-form' placeholder='Enter the Items' type='text' value={state}
              onChange={(e) => setState(e.target.value)} />
            <button onClick={submitbutton} className='btn'>Add</button>
          </div>
          <div className='todo-wrapper'>
            <div className='todo-items'>
              <ul >
                {newitem.map((val, index) => {
                  return <> <li className='listtodo'>{val}
                    <i key={index} onClick={() => deletebutton(index)} className="fa fa-trash " aria-hidden="true"></i> </li>
                  </>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;

