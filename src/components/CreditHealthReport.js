import React, {Component} from 'react';
import styled from 'styled-components';
import { getLendingRequirements } from "../reducers/reducer_reqs";
import { connect } from 'react-redux';

export const CreditHealthStatus = styled.div`
    background-color: #DCE8E3;
    font-family: 'Old Standard TT', serif;
    border-radius: 4px;
    div {
        padding: 15px;
    }
    p {
        margin: 0;
        font-family: sans-serif;
    }
    h3 {
        margin: 0 0 20px 0;
    }
`;

export const CreditRequirementsList = styled.ul`
    margin-top: 10px;
    list-style: none;
    padding: 0;
    li:last-child {
        border-bottom: 1px solid lightgray;
        padding-bottom: 8px;
    }
`;
const CreditRequirement = styled.li`
    display: flex;
    border-top: 1px solid lightgray;
    margin-top: 8px;
    span {
        padding-top: 8px;
        flex: 1;
    }
    span:nth-child(2) {
        text-align: right;
        padding-right: 20px;
    }
`;

const jsonReqs = [
    {requirement: "Personal credit score", value: "706", id: "1"},
    {requirement: "Personal credit age", value: "16yr.", id: "2"},
    {requirement: "Personal inquiries", value: "2", id: "3"},
    {requirement: "Personal bankruptcies", value: "0", id: "4"},
    {requirement: "Personal credit utilization", value: "32%", id: "5"},
    {requirement: "Personal credit limit", value: "$49,300", id: "6"}
  ];

export class CreditHealthReport extends Component {
    renderRequirementsList() {
        return jsonReqs.map(req => {
            return (
                <CreditRequirement key={req["id"]}>
                    <span>{req["requirement"]}</span>
                    <span>{req["value"]}</span>
                </CreditRequirement>
            );
        });
    }

    render() {
        return (
            <div>
                <CreditHealthStatus>
                    <div>
                        <h3>Yay! You qualify for a credit card <span role="img" aria-label="party">🎉</span></h3>
                        <p>A credit card is a great option for you right now.</p>
                    </div>
                </CreditHealthStatus>
                <h3>Here's what the issuers are looking for</h3>
                <CreditRequirementsList>
                    {this.renderRequirementsList()}
                </CreditRequirementsList>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        requirements: getLendingRequirements(state),
    };
}
export default connect(mapStateToProps)(CreditHealthReport);