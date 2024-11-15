import React from "react";
import Button from "react-bootstrap/Button";

export default function TempoPorDia({voltar, onNext}) {
    return (
        <div>
            <h1>Teste</h1>
            <Button variant="primary" onClick={voltar}>Voltar</Button>
            <Button variant="primary" onClick={onNext}>Gerar Cronograma</Button>
        </div>
)
}