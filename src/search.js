import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class search extends Component {
    static propTypes = {
        prop: PropTypes
    }

 state = {term : 'Across the Globe'}

onFormSubmit = event => {
    event.preventDefault()
   this.props.onSearch(this.state.term)
}

    render() {
        
        return (
        
            <div>
             <div className="ui form" style = {{margin : "20px"}}>
                 <form className = "ui form " onSubmit={event =>this.onFormSubmit(event)}> 
  <div className="field">
    <label>Search WALLPYYY</label>
    <input type="text"  placeholder = "Get Your Best Wallpaper" onChange={(e) =>this.setState({term:e.target.value})} />
  <p1> Searching  {this.state.term} </p1>
    
  </div>
  </form>
</div>
    
            </div>
        )
    }
}
