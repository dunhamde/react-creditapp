import React, { Component } from 'react';
import styled from 'styled-components';
import LendingOptionsMenu from './LendingOptionsMenu';
import CreditHealthReport from './CreditHealthReport';
import TermLoanForm from './TermLoanForm';
import { connect } from 'react-redux';
import { showCreditHealthView, initCreditRequirements } from '../actions/lending'
import { getCreditViewStatus } from '../reducers/reducer_reqs'

const AppContainer = styled.div`
  max-width: 640px;
  background-color: white;
  margin: 0 auto;
  display:grid;
  border-radius: 4px;
  margin-top: 10px;
  -moz-box-shadow: 0 0 3px black ;
  -webkit-box-shadow: 0 0 3px black;
  box-shadow: 0 0 3px black;
`;

const LendingViewContainer = styled.div`
  display: grid;
  margin-top: 10px;
  border-radius: 4px;
`;

const LendingCardContainer = styled.div`
  margin: 25px;
  display: grid;
  grid-template-rows: 75px; 5fr;
`;

export class LendingCard extends Component {

  componentDidMount() {
    this.props.showCreditHealthView();
  }

  render() {    
    return (
      <AppContainer>
        <LendingCardContainer>
          <LendingOptionsMenu />
          <LendingViewContainer>
            {this.props.creditHealth ? <CreditHealthReport /> : <TermLoanForm />}
          </LendingViewContainer>
        </LendingCardContainer>
      </AppContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    creditHealth: getCreditViewStatus(state),
  };
}

export default connect(mapStateToProps, { showCreditHealthView })(LendingCard);
