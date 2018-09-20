import React from 'react';
import {shallow} from 'enzyme';
import { CreditHealthReport, CreditHealthStatus, CreditRequirementsList } from '../components/CreditHealthReport';

describe('<CreditHealthReport />', () => {
    it('renders one <CreditHealthStatus /> components', () => {
        const wrapper = shallow(<CreditHealthReport />);
        expect(wrapper.find(CreditHealthStatus).length).toBe(1);
    })

    it('renders one <CreditRequirementsList /> component', () => {
        const wrapper = shallow(<CreditHealthReport />);
        expect(wrapper.find(CreditRequirementsList).length).toBe(1);
    })
});