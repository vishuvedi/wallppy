import React from 'react'
import Season from './season';
class vishu extends React.Component{

constructor()
{
    super()
    this.state = {lat:78};
  
}

render()
{
    window.navigator.geolocation.getCurrentPosition(
        position =>
      {
this.setState({lat:position.coords.latitude})

      }
        );
        
      
        return <Season l1 = {this.state.lat}/>
    }
    


}
export default vishu
