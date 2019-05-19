import React, {Component} from 'react';
/*
* Formulario para enviar los datos y obtener las imágenes con base en la búsqueda
 */
class Form extends Component {

    // Crear los refs
    wordRef = React.createRef();

    searchImage = (e) => {
        e.preventDefault();
        // Leer el los refs y crear el objeto
        const response = {
            word : this.wordRef.current.value
        }

        // Enviar por props
        this.props.dataQuery(response);

    }

    render() {
        return (
               <div className="container">
                   <form onSubmit={this.searchImage}>
                       <div className="form-group">
                           <label htmlFor="word">Escribe tu búsqueda</label>
                           <input ref={this.wordRef} id="word" type="text" className="form-control"/>
                       </div>
                       <input type="submit" className="btn btn-primary float-right" value="Buscar"/>
                   </form>
               </div>
        );
    }
}

export default Form;
