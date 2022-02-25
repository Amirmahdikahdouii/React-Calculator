import React, { Component } from 'react';

class App extends Component {
    state = {
        num_1: '',
        num_2: '',
        operator: '',
        output: '',
        previousAnswer: '',
    }

    hasDot = (number) => {
        number = number.split('.');
        if (number.length > 1) {
            return true
        } else if (number.length === 1) {
            return false
        }
    }

    hasNegetive = (number) => {
        number = number.split('-');
        if (number.length > 1) {
            return true
        } else {
            return false
        }
    }

    numbersGetter = (event) => {
        let currentNumber = event.target.innerText;
        let previousNumber = this.state.num_1;
        let { operator } = this.state;
        if (operator === "") {
            if (this.hasDot(previousNumber) && currentNumber === '.') {
                return null
            }
            let number = previousNumber += currentNumber
            if (number.length > 6) {
                return null;
            }
            this.setState({
                num_1: number,
                output: number,
            })
        } else if (previousNumber !== "" && operator !== "") {
            previousNumber = this.state.num_2;
            if (this.hasDot(previousNumber) && currentNumber === '.') {
                return null
            }
            let number = previousNumber += currentNumber;
            if (number.length > 6) {
                return null;
            }
            let output = `${this.state.output}${currentNumber}`;
            this.setState({
                num_2: number,
                output: output,
            })
        }
    }

    operatorGetter = (event) => {
        let { operator, num_1 } = this.state;
        let negative = event.target.innerText == '-' ? true : false;
        if (negative && num_1 === "") {
            console.log(negative);
            let output = '-'
            this.setState({
                num_1: output,
                output: output,
            })
            return null
        } else if (negative && num_1 === '-') {
            return null
        }
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
        let { num_1, num_2, operator } = this.state;
        let answer, previousAnswer = this.state.output;
        if (num_2 === '') {
            return null
        }
        num_1 = parseFloat(num_1);
        num_2 = parseFloat(num_2);

        if (operator === "-") {
            answer = num_1 - num_2;
        } else if (operator === "+") {
            answer = num_1 + num_2;
        } else if (operator === "*") {
            answer = num_1 * num_2;
        } else if (operator === "/") {
            answer = num_1 / num_2;
            answer = answer.toFixed(2)
        }
        answer = answer.toString()
        if (answer.length > 6) {
            this.setState({
                num_1: '',
                operator: '',
                num_2: '',
                output: "Error",
                previousAnswer: ''
            })
            return null
        }
        this.setState({
            num_1: answer,
            operator: '',
            num_2: '',
            output: answer,
            previousAnswer: previousAnswer
        })
    }

    ACButtonHandler = (event) => {
        this.setState({
            num_1: '',
            num_2: '',
            operator: '',
            output: '',
            previousAnswer: ''
        })
    }

    DELButtonHandler = (event) => {
        let { num_1, num_2, operator, previousAnswer } = this.state;
        if (num_1 === "") {
            return null;
        } else if (num_1 !== "" && operator === "") {
            num_1 = num_1.substring(0, num_1.length - 1);
            if (previousAnswer !== "") {
                this.setState({
                    previousAnswer: '',
                })
            }
            this.setState({
                num_1: num_1,
                output: num_1,
            })
        } else if (operator !== "" && num_2 === "") {
            let hasDot = num_1.split('.')
            this.setState({
                operator: '',
                output: `${num_1} `
            })
        } else if (num_2 !== '') {
            num_2 = num_2.substring(0, num_2.length - 1);
            this.setState({
                num_2: num_2,
                output: `${num_1} ${operator} ${num_2}`
            })
        }
    }

    render() {
        let props = [
            [
                {
                    type: 'clearButton',
                    class: 'btn btn-danger',
                    value: 'AC',
                    method: this.ACButtonHandler
                },
                {
                    type: 'clearButton',
                    class: 'btn btn-danger',
                    value: 'DEL',
                    method: this.DELButtonHandler,
                },
                {
                    type: 'operationButton',
                    class: 'btn btn-success',
                    value: '-',
                    method: this.operatorGetter
                },
            ],
            [
                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '7',
                    method: this.numbersGetter
                },
                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '8',
                    method: this.numbersGetter
                },
                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '9',
                    method: this.numbersGetter
                },
                {
                    type: 'operationButton',
                    class: 'btn btn-success',
                    value: '*',
                    method: this.operatorGetter
                },
            ],
            [
                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '4',
                    method: this.numbersGetter
                },
                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '5',
                    method: this.numbersGetter
                },
                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '6',
                    method: this.numbersGetter
                },
                {
                    type: 'operationButton',
                    class: 'btn btn-success',
                    value: '/',
                    method: this.operatorGetter
                },
            ],
            [
                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '1',
                    method: this.numbersGetter
                },
                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '2',
                    method: this.numbersGetter
                },
                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '3',
                    method: this.numbersGetter
                },
                {
                    type: 'operationButton',
                    class: 'btn btn-success',
                    value: '+',
                    method: this.operatorGetter
                },
            ],
            [

                {
                    type: 'numberButton',
                    class: 'btn btn-dark',
                    value: '0',
                    method: this.numbersGetter
                },
                {
                    type: 'numberButton',
                    class: 'btn btn-warning',
                    value: '.',
                    method: this.numbersGetter
                },
                {
                    type: 'numberButton',
                    class: 'btn btn-warning',
                    value: '=',
                    method: this.calculation
                },
            ],
        ]
        let result = props.map((items, index) => {
            return (
                <div className='row' key={index}>{items.map((button, i) => {
                    return (
                        <button className={button.class} key={i} onClick={button.method}>{button.value}</button>
                    )
                })}</div>
            )
        })
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
                    {result}
                </div>
            </div>
        )
    }
}

export default App;