import React, { Component } from 'react';
import HandshakePng from "./handshake.png";
import AddButtonPng from "./add.png";
import styled from "styled-components";

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
    img:nth-child(2) {
        cursor: pointer;
    }
`;

class TermLoanForm extends Component {
    render() {
        return (
            <TermLoanFormContainer>
                <div>
                    <img height="100" width="100" src={HandshakePng} alt="SmallBizIcon"/>
                    <h1>Add your business</h1>
                    <p>For term loan options, add your business</p>
                    <img height="50" width="50" src={AddButtonPng} alt="AddButtonIcon"/>
                </div>
            </TermLoanFormContainer>
        );
    }
}

export default TermLoanForm;