import React from 'react';
import axios from 'axios';
import styles from './style.css';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      restaurantInfo:[{name:null}],
      details: true,
      viewmore: true
    }
    this.getInfo = this.getInfo.bind(this);
    this.stars = this.stars.bind(this);
    this.click = this.click.bind(this);
  }


  componentDidMount(){
    this.getInfo()
  }


  getInfo(){
    axios
    .get('/api/restaurant',{params:{id:2}})
    .then((data)=> {
      console.log(data.data)
      this.setState({restaurantInfo:data.data})
    })

  }

  stars(a){
    var nodes = [];
      for(var i=1; i <= Math.floor(a); i++){
        nodes.push(<i key={i} className="material-icons stars">star</i>)
      }

      for(var i=0; i < 5-Math.floor(a); i++){
        nodes.push(<i key={i} className="material-icons stars">star_border</i>)
      }


    return nodes
  }


  click(){
    this.setState({details: false, viewmore: false})
  }

  partySize(){
    var node=[];
    for(var i = 1; i<=20; i++){
      node.push(<option>{i}</option>)
    }

    return node
  }

  timeRender(){
    let node=[];
    for(var i=0; i < 24; i++){
      if(i==0){
      node.push(<option>{12 + ":" + "00 AM" }</option>)
      node.push(<option>{12 + ":" + "30 AM"}</option>)
      }else if(i == 12){
        node.push(<option>{12 + ":" + "00 PM" }</option>)
        node.push(<option>{12 + ":" + "30 PM"}</option>)
      }else if(i < 13){
        node.push(<option>{i + ":" + "00 AM" }</option>)
        node.push(<option>{i + ":" + "30 AM"}</option>)
      }else{
        node.push(<option>{i-12 + ":" + "00 PM" }</option>)
        node.push(<option>{i-12 + ":" + "30 PM"}</option>)
      }
    }

    return node
  }



  render(){
    let detailId = this.state.details ? "details" : "details1";
    let viewId = this.state.viewmore ? "viewmore" : "viewmore1";
  return (
    <div>
  
        <div id="reservation">
          <div id="restitle">Make a reservation</div>
          <div id="partysize">
            <p>Party Size </p>

            <div id="for">
              For&nbsp;
              <select>
                {this.partySize()}
              </select>
            </div>
          </div>








        <div id="date">
        <p>Date</p>
        <select></select>
        </div>

        <div id="time">
        <p>Time</p>
        <select>{this.timeRender()}</select>
        </div>


        <div id="findtable"><div id="findtabletext">Find a table</div></div>
        <div id="booked"><i className="material-icons">trending_up</i>&nbsp;<div>Booked 134 times today</div></div>


      </div>


      <div id="nav"> 
        <div>Overview</div> 
        <div>Photos</div>
        <div>Menus</div>
        <div>Reviews</div>
        <div>Twitter</div>
      </div>

      <div id="box1"className="name">{this.state.restaurantInfo[0].name}</div>

      <div id="reviews">
      {this.stars(this.state.restaurantInfo[0].average_star)}&nbsp;
      {this.state.restaurantInfo[0].average_star}&nbsp;&nbsp;&nbsp;&nbsp;
      <i className="material-icons">chat_bubble_outline</i>&nbsp;
      {this.state.restaurantInfo[0].review_number}&nbsp;reviews
      </div>
      
      <div id="tags">
        Top Tags:
        <div>Good For Data</div>
        <div>Hot Spot</div>
        <div>Fit For Foodies</div>
      </div>

      <div id="box2" className="description">{this.state.restaurantInfo[0].description}</div>

      <div id={detailId} className='container'>
        <div id="box3" >
          <div className="container">
          <div><i className="material-icons">local_bar</i></div>
          <div><span className="titles">Dining style</span><br/>{this.state.restaurantInfo[0].dining_style}</div>
          </div>

          <div className="container">
          <i className="material-icons">local_dining</i>
          <div><span className="titles">Cuisines</span><br/>{this.state.restaurantInfo[0].cuisines}</div>
          </div>

          
          <div className="container">
          <i className="material-icons">access_time</i>
          <div><span className="titles">Hours of operation</span><br/>{this.state.restaurantInfo[0].operation_hours}</div>
          </div>      


          <div className="container">
          <i className="material-icons">call</i>
          <div><span className="titles">Phone</span><br/>{this.state.restaurantInfo[0].phone_number}</div>
          </div>


          <div className="container">
          <i className="material-icons">payment</i>
          <div><span className="titles">Payments</span><br/>{this.state.restaurantInfo[0].payments}</div>
          </div>


          <div className="container">
          <i className="material-icons">cast</i>
          <div id="website"><span className="titles">Website</span><br/><a href="https://www.google.com">{this.state.restaurantInfo[0].website}</a></div>
          </div>


          <div className="container">
          <i className="material-icons">mood</i>
          <div><span className="titles">Executive Chef</span><br/>{this.state.restaurantInfo[0].executive_chef}</div>
          </div>   
        </div>

        <div id="box4">

          <div><a href="https://www.google.com/maps"><img className="map" src="https://s3-us-west-1.amazonaws.com/table-it/google_maps_screenshot.png"/></a></div>
          <div className="container">
          <i className="material-icons">place</i>
          <div id="address"><span className="titles">Address</span><br/><a href="https://www.google.com">{this.state.restaurantInfo[0].address}</a></div>
          </div>


          <div className="container">
          <i className="material-icons">business</i>
          <div><span className="titles">Neighborhood</span><br/>{this.state.restaurantInfo[0].neighborhood}</div>
          </div>


          <div className="container">
          <i className="material-icons">local_parking</i>
          <div><span className="titles">Parking</span><br/>{this.state.restaurantInfo[0].parking_details}</div>
          </div>


          <div className="container">
          <i className="material-icons">warning</i>
          <div><span className="titles">Events and promotions</span><br/>{this.state.restaurantInfo[0].events_promotions}</div>
          </div>


          <div className="container">
          <i className="material-icons">turned_in_not</i>
          <div><span className="titles">Additional</span><br/>{this.state.restaurantInfo[0].additional}</div>
          </div>


        </div>
        <div id={viewId }className="special" ><div id="viewtext" onClick={()=>this.click()}>View all details</div></div>

      </div>

    </div>
    );




}
}


export default App;
