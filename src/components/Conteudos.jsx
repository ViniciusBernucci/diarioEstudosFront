import React from "react";
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import Form from "react-bootstrap/Form";


export default  function Conteudos ({voltar, onNext}) {
    return (
        <div><h1>Selecione o conteúdo que deseja estudar</h1>
            <p>você pode criar planejamentos selecionando apenas parte do conteúdo cobrado no ENEM</p>
            <Form>
            <Accordion defaultActiveKey={null}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>HISTÓRIA GERAL</Accordion.Header>
                    <Accordion.Body>
                        <h4>Customize o conteúdo deste módulo</h4>
                        <p>Selecione abaixo os assuntos que deseja estudar ou remover do seu planejamento</p>

                            <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Introdução"
                            />
                                <a>Duração: 347 minutos</a>
                            <hr />
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Pré História"
                            />
                            <a>Duração: 189 minutos</a>
                            <hr />

                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Antiguidade Oriental"
                            />
                            <a>Duração: 398 minutos</a>
                            <hr />

                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Antiguidade Clássica"
                            />
                            <a>Duração: 427 minutos</a>
                            <hr />


                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="História Medieval"
                            />
                            <a>Duração: 245 minutos</a>
                            <hr />

                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Mundo Moderno"
                            />
                            <a>Duração: 718 minutos</a>
                            <hr />

                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Transição para a contemporaneidade"
                            />
                            <a>Duração: 270 minutos</a>
                            <hr />

                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="História Contemporânea"
                            />
                            <a>Duração: 270 minutos</a>
                            <hr />

                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Guerra Fria"
                            />
                            <a>Duração: 223 minutos</a>
                    </Accordion.Body>

                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>HISTÓRIA DA ÁFRICA E DA AMÉRICA</Accordion.Header>
                    <Accordion.Body>
                        <h4>Customize o conteúdo deste módulo</h4>
                        <p>Selecione abaixo os assuntos que deseja estudar ou remover do seu planejamento</p>

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="História da África"
                        />
                        <a>Duração: 330 minutos</a>
                        <hr/>

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="História da América"
                        />
                        <a>Duração: 490 minutos</a>
                        <hr/>

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Independências das 13 colônias"
                        />
                        <a>Duração: 56 minutos</a>
                        <hr/>

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="EUA no século XIX"
                        />"
                        <a>Duração: 191 minutos</a>
                        <hr/>

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="América Latina no século XX"
                        />
                        <a>Duração: 128 minutos</a>
                        <hr/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </Form>
            <br />
            <Button variant="primary" onClick={voltar}>Voltar</Button>
            <Button variant="primary" onClick={onNext}>Próximo passo</Button>
        </div>
    );
}

