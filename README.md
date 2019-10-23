# React + Throttle / Debounce

Este projeto é um exemplo do uso dos conceitos de __Throttle__ e __Debounce__, que explicarei logo a seguir.

Alguns eventos acontecem de forma mais rápida, necessitando de atualizações instantâneas e algumas é melhor ter uma maior espera. Com os conceitos que serão ensinados a seguir, vamos aprender a controlar a frequência de execução de um determinado trecho de código.

## Throttle
Esse conceito refere-se ao controle de quantidade de vezes que um dado trecho de código será executado durante um determinado expaço de tempo. Com essa técnica, garantimos que __um trecho não será executado mais que 1 vez a cada X milisegundos__.

## Debounce
O debounce, assim como o throttle, limita a quantidade de vezes que determinado trecho de código é executado em relação ao tempo. Porém diferente do throttle (que assegura que aconteçam no máximo 1 execução a cada X milisegundo), __o debounce irá adiar a execução do código caso ele seja enviado novamente em menos de X milisegundos__.

## Resumo
* Throttle: __O trecho de código será executado a cada X milisegundos__.
* Debounce: __O trecho de código será executado a cada X milisegundos, após a ultima chamada do mesmo__.

## Problema
Imagine que temos uma tabela de registros com um formulário de buscas, e conforme seja digitado pelo usuário, ele busque na API. Só que aqui surge um problema. Conforme o usuário vai digitando cada letra é feito uma nova requisição para a API, que ao digitar a próxima letra ele acaba sendo descartado. Nesses casos, pode acabar gerando muitas requisições inúteis para a API.

## Exemplo
Este exemplo está sendo feito em JavaScript, com Redux e Hooks. Para um uso facil desses conceitos junto dessas bibliotecas, utilizarei aqui as bibliotecas __use-throttle__ e __use-debounce__.

```javascript
import React, { useState } from "react";
import { useThrottle } from "use-throttle";
import { useDebounce } from "use-debounce";

function App() {
    const [text, setText] = useState("");

    const throttleText = useThrottle(text, 1000);
    const debounceText = useDebounce(text, 1000);

    return (
        <div className="App">
            <label>Input</label> <br />
            <input type="text" onChange={e => setText(e.target.value)} />
            <hr />
            <span>
                <b>Text atual: </b> {text}
            </span>
            <br />
            <span>
                <b>Text Throttle: </b> {throttleText}
            </span>
            <br />
            <span>
                <b>Text Debounce: </b> {debounceText}
            </span>
        </div>
    );
}

export default App;
```