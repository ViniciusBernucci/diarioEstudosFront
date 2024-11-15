import React, { useState } from 'react';
import GetDatas from "./components/Get_Datas.jsx";
import DiasDeEstudo from "./components/DiasDeEstudo.jsx";
import Conteudos from "./components/Conteudos.jsx";
import TempoPorDia from "./components/TempoPorDia.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';


const App = () => {
    const [currentComponent, setCurrentComponent] = useState("GetDatas"); // Estado inicial
    const [progress, setProgress] = useState(15); // Progresso inicial (33% para 3 páginas)

    // Função para ir para o próximo componente
    const handleNextStep = () => {
        if(currentComponent === "GetDatas") {
            setCurrentComponent("DiasDeEstudo");
            setProgress(33)
        }else if(currentComponent === "DiasDeEstudo" ){
            setCurrentComponent("Conteudos");
            setProgress(66)
        }else if(currentComponent == "Conteudos") {
            setCurrentComponent("TempoPorDia")
            setProgress(99)
        }

    };
    // Função para voltar ao componente anterior
    const handlePreviousStep = () => {
        if(currentComponent === "DiasDeEstudo") {
            setCurrentComponent("GetDatas")   ;
            setProgress(15)
        }else if (currentComponent === "Conteudos"){
            setCurrentComponent( "DiasDeEstudo")
            setProgress(33)
        }else if (currentComponent === "TempoPorDia") {
            setCurrentComponent("Conteudos")
            setProgress(66)
        }
    }

    return (
        <div>
            <Card className="text-center">
                <Card.Header>Diário de Estudos</Card.Header>
                <Card.Body>
                    {currentComponent === "GetDatas" && <GetDatas onNext={handleNextStep} />}
                    {currentComponent === "DiasDeEstudo" && <DiasDeEstudo onNext={handleNextStep} voltar={handlePreviousStep}/>}
                    {currentComponent === "Conteudos" && <Conteudos onNext={handleNextStep} voltar={handlePreviousStep}/>}
                    {currentComponent === "TempoPorDia" && <TempoPorDia voltar={handlePreviousStep}/>}
                </Card.Body>
                <ProgressBar now={progress} label={`${progress}%`} className="mt-2" />
            </Card>
        </div>
    );
};

export default App;

