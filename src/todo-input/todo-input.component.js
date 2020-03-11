import React from 'react';
import './todo-input.styles.css';


class TodoInput  extends  React.Component{

    componentDidMount(){
        this.props.inputElement.current.focus()
    }
    render(){
        const{onhandleSubmit, onhandleChange, inputElement, currentItem} = this.props;
        return(
            <div className='container'>
            <form className='form' onSubmit={onhandleSubmit}>
            <input
                className='input-field'
                placeholder='Enter your Plan'
                onChange={onhandleChange}
                value={currentItem.text}
                ref={inputElement}
            />
            <button type='submit' className='button-style'> Create your Plan </button>
                
            </form>
        </div>
    );
    }
    
}

export default TodoInput;
