import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showCreditHealthView, showTermLoanView } from '../actions/lending';
import { getCreditViewStatus } from '../reducers/reducer_reqs';
import CreditCardPng from './assets/card.png';
import BankPng from './assets/bank3.png';

export const LendingButton = styled.div`
    span {
        margin-top: 5px;
    }
    display:flex;
    cursor: pointer;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: ${props => props.left ? "4px" : 0};
    border-top-right-radius: ${props => props.right ? "4px" : 0};
    border-bottom-left-radius: ${props => props.left ? "4px" : 0};
    border-bottom-right-radius: ${props => props.right ? "4px" : 0};
    border: 1px solid #D0D2D6;
    background-color: ${props => (props.status && props.left) || (!props.status && props.right) ? "#D0D2D6" : "white"};
`;

const LendingOptionsContainer = styled.div`
    display: flex;
`;

export class LendingOptionsMenu extends Component {
    render() {
        return (
            <LendingOptionsContainer>
                <LendingButton onClick={this.props.showCreditHealthView} left status={this.props.creditHealth}>
                    <img height="32" width="32" src={CreditCardPng} alt="CreditIcon"/>
                    <span>Credit Card</span>
                </LendingButton>
                <LendingButton onClick={this.props.showTermLoanView} right status={this.props.creditHealth}>
                    <img height="32" width="32" src={BankPng} alt="BankIcon"/>
                    <span>Term Loan</span>
                </LendingButton>
            </LendingOptionsContainer>
        )
    }
}

function mapStateToProps(state) {
    return {
        creditHealth: getCreditViewStatus(state),
    };
}

export default connect(mapStateToProps, { showCreditHealthView, showTermLoanView })(LendingOptionsMenu);