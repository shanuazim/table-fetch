const React = require('react')
const ReactDOM = require('react-dom')

class UserView extends React.Component{
    render(){
      return <li>
        id: 1,
        first_name: {this.props.data.first_name}<br/>
        last_name: {this.props.data.last_name}<br/>
        email: {this.props.data.email}<br/>
        gender:{this.props.data.gender}<br/>
        ip_address:{this.props.data.ip_address}<br/>
        <hr/>
     </li>
    }
}
module.exports = UserView