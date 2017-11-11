import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description: '',
                      list :[]}

        this.handlerAdd = this.handlerAdd.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handlerSearch = this.handlerSearch.bind(this)
        this.handlerClear = this.handlerClear.bind(this)

        this.refresh(this.state.description)
 
    }
  
    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get( `${URL}?sort=-createdAt${search}`)
            .then(resp => {
                this.setState({...this.state, 
                    description: description,
                    list: resp.data
                })
            })
    }

    handlerSearch(){
        this.refresh(this.state.description)
    }

    handlerAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then( resp => console.log('funcionou!'))
            .then( resp => this.refresh() )
    }

    handlerClear(){
        this.refresh()
    }

    handleRemove(todo){
        axios.delete( `${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handlerChange(e){
        this.setState({...this.state, description: e.target.value })
    }
    
    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.description))
    }
    
    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh(this.state.description))
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefa" small="cadastro"/>
                <TodoForm description = {this.state.description}
                     handlerChange = {this.handlerChange}
                     handlerAdd={this.handlerAdd}
                     handlerSearch={this.handlerSearch}
                     handlerClear={this.handlerClear}/>
                <TodoList list={this.state.list}
                   handleRemove = {this.handleRemove}
                   handleMarkAsDone = {this.handleMarkAsDone}
                   handleMarkAsPending = {this.handleMarkAsPending}
                />

            </div>
        )
    }
}



