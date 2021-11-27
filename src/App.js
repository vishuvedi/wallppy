import logo from './logo.svg';
import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './header'
import Search from './search';
import Image from './imagelist'
class App extends React.Component{
  state = {image :  [] };
 onSubmitSearch = async (term) =>
{
  
  const response = await axios.get('https://api.unsplash.com/search/photos',{
params : {query : term},  
headers : {
  Authorization: 'Client-ID m3gmLiCbu9gFm3woo0qpMpZlZ-w06Ky3rDwRzGwTI64'
}


});

console.log(response.data.results)
this.setState({image:response.data.results}); 
}


render() {
  return (
    <div>
 <Header/>
 
 <Search onSearch = {this.onSubmitSearch}/>
<Image image = {this.state.image}/>
    </div>
  );
}
}

export default App;
