import React, {useEffect, useState} from 'react';
import Picture from './components/Picture';
import './index.css';

function App(  ){

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('Coucou les Amis !');

    useEffect(() => console.log('composant app monté'), []);

    function handleClick(){
        setShow(!show);
        
    }

        return  (
        <div>
            {console.log('jsx render')}
        <h1 className="text-4xl text-purple-700 my-5">{title}</h1>
        <button className="bg-purple-900 text-white rounded py-2 px3"
         onClick={ handleClick }>Click !</button>
        {
            show ?
         <Picture />
            :null
        }
       
    </div>
    );
       
}

// class App extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = { show: false, title:"coucou"};
//     }

//     componentDidMount(){
//         this.setState({ title:'composant ok '})
//     }

//     componentDidUpdate(){
//         console.log('composant mis à jour');
//     }
//    render(){
//     return <div>
//         <h1 className="text-4xl text-purple-700 my-5">{this.state.title}</h1>
//         <button className="bg-purple-900 text-white rounded py-2 px3"
//          onClick={ ()=> this.setState( {show : !this.state.show})  }>Click !</button>
//         {
//             this.state.show ?
//          <Picture />
//             :null
//         }
       
//     </div>;
//    } 
// }
export default App;