import React from 'react'

export default React.createClass({

  propTypes: {
    value: React.PropTypes.object.isRequired
  },

  render: function() {
      return (
        <form>
          <input type="text" placeholder="email" ref="email"/>
          <input type="text" placeholder="title" ref="title"/>
          <input type="text" placeholder="body" ref="body"/>
          <input type="submit"/>
        </form>
      )
    }
  });
