import React, { Component } from 'react';
import Axios from 'axios';
import '../Main/Main.css';
import { URL } from '../constants'

class Main extends Component {


    constructor() {
        super();
        this.state = { inputValue: '', medianValues: [], error: '' };
        this.getPrimeNumbers = this.getPrimeNumbers.bind(this);
        this.changeInputValue = this.changeInputValue.bind(this);

    }

    getPrimeNumbers = () => {

        if (this.state.inputValue.length > 0) {

            Axios.get(`${URL}${this.state.inputValue}`).then((response) => {
                console.log(response.data.output);
                this.setState({ medianValues: response.data.output, isError: false });
            }).catch((err) => {

                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    this.setState({
                        error: err.response.data.message,
                        medianValues: []
                    });
                } else if (err.request) {
                    // client never received a response, or request never left
                    this.setState({
                        error: 'Network Error! Try Again after some time',
                        medianValues: []
                    });
                }

            });

        } else {
            alert('Enter the Value');
        }

    }

    changeInputValue(event) {

        this.setState({
            inputValue: event.target.value,
            error: '',
            medianValues: []
        })
    }

    render() {
        return (
            <div className="main">

                <div className="input-form">
                    <input type="number" id="user-input" value={this.state.inputValue} onChange={this.changeInputValue}
                        placeholder="Enter a number" required />
                    <button id="submit-btn" onClick={() => this.getPrimeNumbers()}>Submit</button>
                </div>

                <div>
                    Ouput is Shown Below
                   {
                        (this.state.error) ?
                            <div id="error">
                                {this.state.error}
                            </div> :
                            <div id="output-values" className="median-values">
                                {this.state.medianValues.map((element, index) => (
                                    <p key={index} className="values">{element}</p>
                                ))}
                            </div>
                    }
                </div>
            </div>

        );
    }
}

export default Main