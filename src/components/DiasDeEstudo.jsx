import React from 'react';
import {useState} from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Form from 'react-bootstrap/Form';


export default function DiasDeEstudo ({voltar, onNext}) {

    const [checkedDays, setCheckedDays] = useState(
        {
            segunda: false,
            terça: false,
            quarta: false,
            quinta: false,
            sexta: false,
            sábado: false,
            domingo: false
        });

    const handleToggle = (day) => {
        setCheckedDays((prevState) => ({
            ...prevState, //ler o estado atual - o operador spread copia todos valores do estado anterior
            [day]: !prevState[day], // Inverte o valor do dia selecionado
        }));
    };


    return (
        <div><h3>Quais dias da semana você deseja estudar?</h3>
            <div>
                <Form>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check-segunda"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedDays.segunda}
                        onChange={() => handleToggle("segunda")}
                    >
                        Segunda
                    </ToggleButton>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check-terça"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedDays.terça}
                        onChange={() => handleToggle("terça")}
                    >
                        Terça
                    </ToggleButton>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check-quarta"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedDays.quarta}
                        onChange={() => handleToggle("quarta")}
                    >
                        Quarta
                    </ToggleButton>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check-quinta"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedDays.quinta}
                        onChange={() => handleToggle("quinta")}
                    >
                        Quinta
                    </ToggleButton>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check-sexta"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedDays.sexta}
                        onChange={() => handleToggle("sexta")}
                    >
                        Sexta
                    </ToggleButton>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check-sábado"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedDays.sábado}
                        onChange={() => handleToggle("sábado")}
                    >
                        Sábado
                    </ToggleButton>
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check-domingo"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedDays.domingo}
                        onChange={() => handleToggle("domingo")}
                    >
                        Domingo
                    </ToggleButton>
                    <br/>
                    <div><h3>Deseja Estudar nos feriados?</h3>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Sim"   //TO-DO - trocar o texto para Sim ou não de acordo com o checkbox
                        />
                    </div>
                    <div><h3>Quero Ter Férias</h3>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Sim"   //TO-DO - trocar o texto para Sim ou não de acordo com o checkbox
                        />
                    </div>
                </Form>


            </div>

            <Button variant="primary" onClick={voltar}>Voltar</Button>
            <Button variant="primary" onClick={onNext}>Próximo passo</Button>
        </div>
    )
}