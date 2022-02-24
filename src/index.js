import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
    return (
        <div class="container">
            <div class="out-put">
                <div class="previous-answer">
                    <label id="previous-answer-label">255</label>
                </div>
                <div class="answer">
                    <label id="answer-label">255</label>
                </div>
            </div>
            <div class="buttons-container">
                <div class="row">
                    <button class="btn btn-danger">AC</button>
                    <button class="btn btn-danger">DEL</button>
                    <button class="btn btn-success">-</button>
                </div>

                <div class="row">
                    <button class="btn btn-dark">7</button>
                    <button class="btn btn-dark">8</button>
                    <button class="btn btn-dark">9</button>
                    <button class="btn btn-success">*</button>
                </div>

                <div class="row">
                    <button class="btn btn-dark">4</button>
                    <button class="btn btn-dark">5</button>
                    <button class="btn btn-dark">6</button>
                    <button class="btn btn-success">/</button>
                </div>

                <div class="row">
                    <button class="btn btn-dark">1</button>
                    <button class="btn btn-dark">2</button>
                    <button class="btn btn-dark">3</button>
                    <button class="btn btn-success">+</button>
                </div>

                <div class="row row-last">
                    <button class="btn btn-warning">.</button>
                    <button class="btn btn-warning">=</button>
                </div>

            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));