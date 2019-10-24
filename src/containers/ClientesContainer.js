import React, { Component } from 'react';
import ClientesList from '../components/ClientesList';

const clientes = [
    {Apellido: "Perez", Nombre: "Juan", FechaNacimiento: "01/01/1990"},
    {Apellido: "Lopez", Nombre: "Luis", FechaNacimiento: "20/11/2001"},
];

class ClientesContainer extends Component {
    render() {
        return (
            <div>
                <ClientesList clientes={clientes} />
            </div>
        );
    }
}

export default ClientesContainer;