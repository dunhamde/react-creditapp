import React, {Component} from 'react';
import styled from 'styled-components';

const CreditHealthStatus = styled.div`
    background-color: #DCE8E3;
    border-radius: 4px;
    div {
        padding: 15px;
    }
    p {
        margin: 0;
    }
    h3 {
        margin: 0 0 20px 0;
    }
`;

const CreditHealthRequirements = styled.ul`
    margin-top: 10px;
    list-style: none;
    li {
        border-bottom: 1px solid gray;
        padding: 5px;
    }
`;



class CreditHealthReport extends Component {
    render() {
        return (
            <div>

                <CreditHealthStatus>
                    <div>
                        <h3>Yay! You qualify for a credit card 🎉</h3>
                        <p>A credit card is a great option for you right now.</p>
                    </div>
                </CreditHealthStatus>
                <CreditHealthRequirements>
                    <li>Personal credit score</li>
                    <li>Personal credit age</li>
                    <li>Personal inquiries</li>
                    <li>Personal bankruptcies</li>
                    <li>Personal credit utilization</li>                
                    <li>Personal credit limit</li>
                </CreditHealthRequirements>
            </div>
        );
    }
}

export default CreditHealthReport;