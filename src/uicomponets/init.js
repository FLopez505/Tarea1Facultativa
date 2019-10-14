import React, { Component} from 'react';
import Pagina1 from './pagina1';
import Pagina2 from './pagina2';

class Init extends Component {

    constructor (props){
        super(props);
        this.state = {
            vistaActual: 'pagina1',
        }
    }

    render(){
        var vista = this.state;
        if(vista.vistaActual == 'pagina1'){
            return(
                <Pagina1 
                 cambiarPagina={this.cambiarPagina}
                 />
            );
        }else{
            return(
            <Pagina2 
            cambiarPagina={this.cambiarPagina}
            />
            );
        }
    }

    cambiarPagina = () => {
        var vistaA = this.state;
        switch (vistaA.vistaActual){
            case 'pagina1':{

                this.setState({
                    vistaActual: 'pagina2'
                });
                break;
            }
            case 'pagina2':{
                this.setState({
                    vistaActual: 'pagina1'
                });
                break;
            }
        }

       /* if(vistaA.vistaActual == 'pagina1'){
            this.setState({
                vistaActual: 'pagina2'
            });
        }
        else if(vistaA.vistaActual == 'pagina2'){
            this.setState({
                vistaActual: 'pagina1'
            });
        }*/


    }
}
export default Init;