import React, { Component } from "react";
import styled from "styled-components";
import LendingOptionsMenu from './LendingOptionsMenu';
import CreditHealthReport from "./CreditHealthReport";
import TermLoanForm from "./TermLoanForm";
import { connect } from 'react-redux';
import { showCreditHealthView } from '../actions/lending'
import { getCreditViewStatus } from '../reducers/reducer_reqs'

const AppContainer = styled.div`
  max-width: 640px;
  height: 480px;
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
  margin: 20px;
  display: grid;
  grid-template-rows: 1fr 5fr;
`;

class LendingCard extends Component {

  componentDidMount() {
    this.props.showCreditHealthView();
  }

  render() {
    const showCreditHealth = this.props.creditHealth;
    let currentLendingView;
    currentLendingView = showCreditHealth ? <CreditHealthReport /> : <TermLoanForm />;
    
    return (
      <AppContainer>
        <LendingCardContainer>
          <LendingOptionsMenu />
          <LendingViewContainer>
            {currentLendingView}
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
