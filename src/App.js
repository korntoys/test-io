import React, {Component} from 'react';
import axios from 'axios';
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Images from "./components/Images";

// Componente principal, se crea un state, se consulta API y se envian datos a componente Images

class App extends Component {
    // Se inicializa el State
    state = {
        query : {},
        result: {},
        error : false
    }
    // Actualizamos el state con datos actualizados
    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            this.queryApi();
        }
    }

    // Al terminar de montar el componente definimos el valor de error en false
    componentDidMount() {
        this.setState({
            error : false
        })
    }

    // Funcion para consultar API
    queryApi = () => {
        const {word} = this.state.query;
        if (!word) return null;
        const client_id = '274591c94c0963c17c6e7a331589fdd40eea06bb68279791912d5fb5e2c5144b';
        let url = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${word}&per_page=20`;

        // Consultar api con Axios
        axios.get(url)
            .then(response => {
                this.setState({
                    result : response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    // Seteamos state
    dataQuery = response => {
        if (response.word === '') {
            this.setState({
                error : true
            })
        } else {
            this.setState({
                error : false,
                query : response
            })
        }
    }

    render() {

        const error = this.state.error;

        let result;

        /* Validamos si la propiedad error del state esta en true, si es el caso se mostrara un error, en caso contrario
        se mostrara el componente Images
        */
        if (error) {
            result = <Error message="El campo de búsqueda es obligatorio"/>
        } else {
            result = <Images data={this.state.result }/>
        }


        return (
            <div className="App">
                <Header
                    title="Listado de imágenes"
                />
                <Form
                    dataQuery={this.dataQuery}
                />
                <div className="container">
                    <div className="d-flex flex-row">
                        <div className="d-flex flex-column">
                            {result}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
