import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TempoPorDia({ voltar, onNext }) {
    // Estado para controlar o valor atual do range
    const [tempo, setTempo] = useState(1); // Valor inicial de 1 hora por dia

    return (
        <div>
            <h1>Quanto tempo deseja estudar por dia?</h1>

            {/* Label mostrando o valor atual */}
            <Form.Label>Horas por dia: {tempo} hora(s)</Form.Label>

            {/* Range Slider com valores definidos */}
            <Form.Range
                min={1} // Valor mínimo
                max={6} // Valor máximo
                step={1} // Incrementos de 1 hora
                value={tempo} // Conecta o estado ao range
                onChange={(e) => setTempo(e.target.value)} // Atualiza o estado ao mover o slider
            />

            <br />
            <Button variant="primary" onClick={voltar}>Voltar</Button>
            <Button variant="primary" onClick={() => onNext(tempo)}>Gerar Cronograma</Button>
        </div>
    );
}
