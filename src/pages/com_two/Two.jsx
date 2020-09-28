import React, { Component } from 'react';
import connect from '../../utlis/connect'
import {
    decrement,
    subNumber,
    addMulDataActions,
} from '../../store/actions'

class Two extends Component {
    render() {
        const {
            counter,
            banner,
            recommend,
            updateDecrement,
            updateSubnumber,
            updateMulData,
        } = this.props
        return (
            <div>
                <h2>counter: {counter}</h2>
                <br />
                <button onClick={() => updateDecrement()}>-1</button>
                <button onClick={() => updateSubnumber(5)}>-5</button>
                <br />
                <hr />
                <br />
                <button onClick={() => updateMulData()}>get multi data</button>
                {
                    banner.length !== 0 && (
                        <div>
                            <h2>banner</h2>
                            <ul>
                                {
                                    banner.map(item => (
                                        <li key={item.acm}>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
                {
                    recommend.length !== 0 && (
                        <div>
                            <h2>recommend</h2>
                            <ul>
                                {
                                    recommend.map(item => (
                                        <li key={item.acm}>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = ({ counter, banner, recommend }) => ({
    counter,
    banner,
    recommend,
})
const mapStateToDispatch = (dispatch) => ({
    updateDecrement: () => dispatch(decrement()),
    updateSubnumber: (num) => dispatch(subNumber(num)),
    updateMulData: () => dispatch(addMulDataActions)
})

export default connect(mapStateToProps, mapStateToDispatch)(Two);