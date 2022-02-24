import React, { Component } from 'react';

class App extends Component {
    state = {
        num_1: '',
        num_2: '',
        operator: '',
        output: '',
        previousAnswer: ''
    }

    numbersGetter = (event) => {
        let currentNumber = event.target.innerText;
        let previousNumber = this.state.num_1;
        let operator = this.state.operator;
        if (operator === "") {
            let number = previousNumber += currentNumber
            this.setState({
                num_1: number,
                output: number,
            })
        } else if (previousNumber !== "" && operator !== "") {
            previousNumber = this.state.num_2;
            let number = previousNumber += currentNumber;
            let output = `${this.state.output}${currentNumber}`;
            this.setState({
                num_2: number,
                output: output,
            })
        }
    }

    operatorGetter = (event) => {
        let operator = this.state.operator;
        let num_1 = this.state.num_1;
        if (operator === "" && num_1 !== "") {
            let currentOperator = event.target.innerText;
            let output = `${this.state.output} ${currentOperator} `;
            this.setState({
                operator: currentOperator,
                output: output,
            })
        }
    }

    calculation = (event) => {
        let num_1 = this.state.num_1, num_2 = this.state.num_2, operator = this.state.operator, answer,
        previousAnswer = this.state.output;
        num_1 = parseFloat(num_1);
        num_2 = parseFloat(num_2);
        if (operator === "-"){
            answer = num_1 - num_2;
        }else if (operator === "+"){
            answer = num_1 + num_2;
        }else if (operator === "*"){
            answer = num_1 * num_2;
        }else if (operator === "/"){
            answer = num_1 / num_2;
        }
        this.setState({
            num_1 : answer,
            operator: '',
            num_2: '',
            output: answer,
            previousAnswer: previousAnswer
        })
    }

    render() {
        return (
            <div className="container">
                <div className="out-put">
                    <div className="previous-answer">
                        <label id="previous-answer-label">{this.state.previousAnswer}</label>
                    </div>
                    <div className="answer">
                        <label id="answer-label">{this.state.output}</label>
                    </div>
                </div>
                <div className="buttons-container">
                    <div className="row">
                        <button className="btn btn-danger">AC</button>
                        <button className="btn btn-danger">DEL</button>
                        <button className="btn btn-success" onClick={this.operatorGetter}>-</button>
                    </div>

                    <div className="row">
                        <button className="btn btn-dark" onClick={this.numbersGetter}>7</button>
                        <button className="btn btn-dark" onClick={this.numbersGetter}>8</button>
                        <button className="btn btn-dark" onClick={this.numbersGetter}>9</button>
                        <button className="btn btn-success" onClick={this.operatorGetter}>*</button>
                    </div>

                    <div className="row">
                        <button className="btn btn-dark" onClick={this.numbersGetter}>4</button>
                        <button className="btn btn-dark" onClick={this.numbersGetter}>5</button>
                        <button className="btn btn-dark" onClick={this.numbersGetter}>6</button>
                        <button className="btn btn-success" onClick={this.operatorGetter}>/</button>
                    </div>

                    <div className="row">
                        <button className="btn btn-dark" onClick={this.numbersGetter}>1</button>
                        <button className="btn btn-dark" onClick={this.numbersGetter}>2</button>
                        <button className="btn btn-dark" onClick={this.numbersGetter}>3</button>
                        <button className="btn btn-success" onClick={this.operatorGetter}>+</button>
                    </div>

                    <div className="row row-last">
                        <button className="btn btn-warning">.</button>
                        <button className="btn btn-warning" onClick={this.calculation}>=</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default App;