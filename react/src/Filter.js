import React, { useContext } from 'react';
import { todoContext } from './context-manager';
import FetchData from './fetchData';

function Filter() {
    const {todo, setTodo, hash, setHash, dataUrl} = useContext(todoContext);
    const hostUrl = 'http://localhost:9000';

    function todoCount(){
        for(var i=0, n=0, m=0; i<todo.length; ++i){
            if(!todo[i].completed){
                m = ++n;
            }
        }
        let countTodo = null;
        if(m === 1){
            countTodo = `${m} item left`;
        }else{
            countTodo = `${m} items left`;
        }

        return countTodo;
    }

    function clearCompleted() {
        let arr = todo.filter(item => item.completed === false);

        FetchData('post', arr, dataUrl);
        FetchData('get', setTodo, dataUrl);
    }
    
    function initialButton(hash, value) {
        switch(value) {
            case hash:
                return 'click'
            default:
                return 'noclick';
        }
    }

    function hideOrNot() {
        if(todo.some(x => x.completed === true)) {
            return 'show';
        }else {
            return 'hide';
        }
    }

    if(todo.length === 0) {
        return null;
    } else {
        return (
            <div id='foot'>
                <div id='left'>{todoCount()}</div>
                <div id='center'>
                    <div id='p1' className={initialButton(hash,'#1')} onClick={() => setHash('#1')}><a href={hostUrl + '#1'}>All</a></div>
                    <div id='p2' className={initialButton(hash,'#2')} onClick={() => setHash('#2')}><a href={hostUrl + '#2'}>Active</a></div>
                    <div id='p3' className={initialButton(hash,"#3")} onClick={() => setHash('#3')}><a href={hostUrl + '#3'}>Completed</a></div>
                </div>
                <div id='right' className={hideOrNot()} onClick={clearCompleted}>Clear completed</div>
            </div>
        );
    }
}

export default Filter;