import React from 'react'
import PropTypes from 'prop-types'
import Faker from 'faker'
function comment(props) {
    return (
        <>
            <div className="ui comments">
  <h3 className="ui dividing header">Comments</h3>
  <div className="comment">
    <a className="avatar">
      <img src= {Faker.image.avatar()}/>
    </a>
    <div className="content">
      <a className="author">{props.name}</a>
      <div className="metadata">
        <span className="date">Today at 5:42PM</span>
      </div>
      <div className="text">{props.post}</div>
      <div className="actions">
        <a className="reply">Reply</a>
      </div>
    </div>
  </div>
</div>

  
        </>
    )
}

comment.propTypes = {

}

export default comment

