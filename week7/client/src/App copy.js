import axios from 'axios';
import React from 'react';



class App extends React.Component {
  constructor (){
    super()
    this.state={
      array:[], idAcres:"", Pricecol:"", Landscape:""}
  }
 handleChange=(event)=>{
   const {name, value} = event.target
   console.log(name, value)
   console.log({[name]:value})
   this.setState({[name]:value})
 }
  componentDidMount(){
    axios.get("/SELECTdb")
    .then(response => {console.log(response.data)
        this.setState({array: response.data})
      })
    .catch(error => console.log(error))
  }
  handleSubmit=(event)=>{const newsong={price: this.state.Pricecol, landscape: this.state.Landscape,}

console.log(newsong)
axios.post("/", newsong)
.then(response => {console.log(response.data)
    this.setState({array: response.data})
  })
.catch(error => console.log(error))
}
  render(){  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
        <div>
              <ul id="nav">
                <li><a href="#">Log In</a></li>
                <li><a href="#">Log Out</a></li>
              </ul>
            </div>

           </nav>
          <div>
            {/* <input
          type = "text" 
          name = "idAcres"
          value = {this.state.idAcres}
          onChange = {this.handleChange}
          placeholder = "title"/> */}
          
          <input
          type = "text" 
          name = "Pricecol"
          value = {this.state.Pricecol}
          onChange = {this.handleChange}
          placeholder = "Pricecol"/>
          
          <input
          type = "text"
          name = "Landscape"
          value = {this.state.Landscape}
          onChange = {this.handleChange}
          placeholder = "Landscape"/>
          
          {/* <input
          text = "text"
          name = "type"
          value = {this.state.type}
          onChange = {this.handleChange}
          placeholder = "rock/pop/classic/rap"/> */}
          
          <button onClick = {this.handleSubmit}>Submit</button></div>
          <h1 className="header">
         Instrumental App
          </h1>
        {this.state.array.map((song, index) => {
          return(
            <div className="song"
                 key = {index}
                 id = {index}
            > 
              <h1>Song Title: { song.idAcres }</h1>
              <h2>Artist: { song.Pricecol }</h2>
              <h3>song date: { song.Landscape }</h3>
              {/* <h3>Type: { song.type }</h3> */}
            </div>
          )
        })}
        <p>
          <h1>
         Instrumental App
          </h1>
        </p>
      </header>
    </div>
  )}
}

export default App;
