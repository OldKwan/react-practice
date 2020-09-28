import React, { Component } from 'react';
import connect from '../../utlis/connect'
import {
    increment,
    addNumber,
} from '../../store/actions'

class One extends Component {
    render() {
        const {
            counter,
            updateIncrement,
            updateAddnumber,
        } = this.props
        return (
            <div>
                <h2>counter: {counter}</h2>
                <br/>
                <button onClick={() => updateIncrement()}>+1</button>
                <button onClick={() => updateAddnumber(5)}>+5</button>
            </div>
        );
    }
}

const mapStateToProps = ({counter}) => ({
    counter,
})
const mapStateToDispatch = (dispatch) => ({
    updateIncrement: () => dispatch(increment()),
    updateAddnumber: (num) => dispatch(addNumber(num)),
})

export default connect(mapStateToProps, mapStateToDispatch)(One);