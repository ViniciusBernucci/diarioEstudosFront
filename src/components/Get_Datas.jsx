
import React from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function GetDatas({ onNext }) {
    return (
        <Stack gap={2} className="col-md-5 mx-auto">
                    <div>
                        <h3>Defina a data do seu plano de estudos</h3>
                        <p>Escolha um intervalo para que possamos fazer seu planejamento</p>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>DATA DE INÍCIO</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Label>DATA DE TÉRMINO</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                        <Button variant="primary" onClick={onNext}>Próximo Passo</Button>
                    </div>
        </Stack>
    );
}

export default GetDatas;