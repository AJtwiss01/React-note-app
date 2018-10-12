import React, { Component } from 'react';
import Note from './Note'
import { FaPlus } from 'react-icons/fa';

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            notes: []
        }
    }
    add = (text) => {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextID(),
                    notes: text
                }
            ]
        }))
    }
    nextID = () => {
        this.uniqueID = this.uniqueID || 0 
        return this.uniqueID++
    }
    remove = (id) =>{
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))
    }
    update = (newText, i) => {
          console.log(newText, i)
        
          this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
    } 
    render() {
        return (
            <div className="board">
                {
                    this.state.notes.map( (note, i) => {
                      return (
                          <Note key={i} index={note.id}
                            onChange={this.update}
                            onRemove={this.remove}> 
                             {note.note}
                          </Note>
                      )
                    })
                }

                <button onClick={this.add.bind(null, 'New Note')} id="add"><FaPlus /></button>
                
            </div>
        );
    }
}

export default Board;