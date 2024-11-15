import React from "react";
import Button from "react-bootstrap/Button";

export default  function Conteudos ({voltar, onNext}) {
    return (
        <div><h1>Teste Conteudos</h1>
            <Button variant="primary" onClick={voltar}>Voltar</Button>
            <Button variant="primary" onClick={onNext}>Próximo passo</Button>
        </div>
    );
}

