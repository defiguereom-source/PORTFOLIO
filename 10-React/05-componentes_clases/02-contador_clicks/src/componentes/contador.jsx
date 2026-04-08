import React from 'react';

class Contador extends React.Component {
    render() {
    return(
        <div className="contador">
            {this.props.numeroClicks}
        </div>
    );        
    }

}

export default Contador;