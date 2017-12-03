const React = require('react')
const ReactDOM = require('react-dom')
const UserView = require('./userview.jsx')

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data: []}
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleFetch = this.handleFetch.bind(this)
  }
  handleUrlChange(event) {
    this.setState({url: event.target.value})
  }
  handleFetch() {
    //TODO add some valiate and error messaging
    fetch(this.state.url)
      .then(response=>response.json())
      .then(json=>this.setState({data: json}))
      .catch(error=>console.error(error))
  }
  render() {
    return <div>
      Please enter the URL:
      <input type="text" 
        onChange={this.handleUrlChange} 
        value={this.state.url}/>

      <button className="btn btn-info" 
        onClick={this.handleFetch}>Fetch Data</button>
      
      <br/>
      <ul className="list-group">
        {this.state.data.map((user,i)=><UserView data={user} key={i}/>)}
      </ul>
    </div>
  }    
}

module.exports = List