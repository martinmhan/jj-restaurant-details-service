import React from 'react';
import axios from 'axios';
import { get } from 'https';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      restaurantInfo:[]
    }
    this.getInfo = this.getInfo.bind(this);
  }


  componentDidMount(){
    this.getInfo()
  }


  getInfo(){
    axios
    .get('/api/restaurant')
    .then((data)=> {
      // console.log(data.data)
      this.setState({restaurantInfo:data.data})
    })

  }



  render(){
    if(this.state.restaurantInfo.length !== 0){
    return(
      <div>
        restaurant name: {this.state.restaurantInfo[0].name}
      </div>
    )
  }
  else{
    return(
      <div>
        hello from App
      </div>
    )
  }
} 

}


export default App;
