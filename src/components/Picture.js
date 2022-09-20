import React, {component, useEffect} from 'react'

export default function Picture() {
useEffect(()=>{
return ()=> console.log('composant picture démonté')
});

  return (
    <div>
 <img className="w-40 mx-auto" src="motos.jpg"></img>
    </div>
  )
}

// export default class Picture extends Component {

// //   constructor(props){
// //     super(props);
// //     this.state ={ timer: null};
// //   }

// //   componentDidMount(){
// //     this.setState({
// //       timer:   setInterval(() => {
// //         console.log('timer appelé');
// //       }, 1000)});
    
// //   }
// //   componentWillUnmount(){
// //     console.log('composant démonté');
// //     clearInterval(this.state.timer);
// //   }
// //   render() {
// //     return (
// //         <img className="w-40 mx-auto" src="motos.jpg"></img>
// //     )
// //   }
// }
