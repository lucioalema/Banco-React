import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const ClientesList = ({clientes}) => (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Nombre</th>
                    <th>Fecha Nacimiento</th>
                </tr>
            </thead>
            <tbody>
                {
                    clientes.map(c =>
                        <tr>
                            <td>{c.Apellido}</td>
                            <td>{c.Nombre}</td>
                            <td>{c.FechaNacimiento}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    </div>
);

ClientesList.propTypes = {
    clientes: PropTypes.array.isRequired,
}

export default ClientesList;