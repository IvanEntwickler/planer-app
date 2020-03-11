import React from 'react';
import TodoItem from '../todo-item/todo-item.componet';

const TodoMaps = ({entries, removeItem}) =>{
    return(
    <div>
      {entries.map((item)=>{
        return <TodoItem key={item.key} item={item} removeItem={removeItem}/>
      })

      }
    </div>
  );
}

export default TodoMaps;