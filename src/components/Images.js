import React, {Component} from 'react';
import Image from "./Image";

// Componente que recorre los datos y envía por props al componente Image
class Images extends Component {
    render() {
        if (!this.props.data.results) return null;
        return (
            <div>
                {
                    Object.keys(this.props.data.results).map(key => (
                        <Image
                            key={key}
                            info={this.props.data.results[key]}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Images;
