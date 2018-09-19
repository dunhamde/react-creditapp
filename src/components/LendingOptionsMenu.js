import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showCreditHealthView, showTermLoanView } from '../actions/lending'
import CreditCardPng from './card.png';
import BankPng from './bank3.png';

const LendingButton = styled.div`
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
    border: 1px solid black;
`

const LendingOptionsContainer = styled.div`
    display: flex;
`
class LendingOptionsMenu extends Component {
    render() {
        return (
            <LendingOptionsContainer>
                <LendingButton onClick={this.props.showCreditHealthView} left>
                    <img height="32" width="32" src={CreditCardPng}/>
                    <span>Credit Card</span>
                </LendingButton>
                <LendingButton onClick={this.props.showTermLoanView} right>
                    <img height="32" width="32" src={BankPng} />
                    <span>Term Loan</span>
                </LendingButton>
            </LendingOptionsContainer>
        )
    }
}

export default connect(null, { showCreditHealthView, showTermLoanView })(LendingOptionsMenu);