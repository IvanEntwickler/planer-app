import React from 'react';
import './todo-item.styles.css';

const TodoItem = ({item, removeItem}) =>{
    return(
        <div>
            <ul className='theList'>
                <li className='element-container' key={item.key}>
                    {item.text}
                    <button className='remove-button' onClick={()=>removeItem(item.key)} >X</button>
                </li>
            </ul>
        </div>
    );
}
 
  export default TodoItem;