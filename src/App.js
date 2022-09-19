import React from 'react';
import './index.css';

// function App( {title} ){
//     return(
//         <h1 className="text-center text-blue-500 text-4xl">{title}</h1>
       
//     )
// }

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = { show: false};
    }
   render(){
    return <div>
        <button className="bg-purple-900 text-white rounded py-2 px3"
         onClick={ ()=> this.setState( {show : !this.state.show})  }>Click !</button>
        {
            this.state.show ?
            <img className="w-40 mx-auto" src="motos.jpg"></img>
            :null
        }
       
    </div>;
   } 
}
export default App;