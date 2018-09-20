import React, { Component } from 'react';
import HandshakePng from './assets/handshake.png';
import AddButtonPng from './assets/add.png';
import styled from 'styled-components';

const TermLoanFormContainer = styled.div`
    border: 1px solid #D0D2D6;
    border-radius: 4px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px;
    }
    p {
        padding: 0;
        margin: 15px;
    }
`;

class TermLoanForm extends Component {
    render() {
        return (
            <TermLoanFormContainer>
                <div>
                    <img height="100" width="100" src={HandshakePng} alt="SmallBizIcon"/>
                    <h2>Add your business</h2>
                    <p>For term loan options, add your business</p>
                    <img height="50" width="50" src={AddButtonPng} alt="AddButtonIcon"/>
                </div>
            </TermLoanFormContainer>
        );
    }
}

export default TermLoanForm;