import React from 'react';
import {shallow} from 'enzyme';
import TermLoanForm from '../components/TermLoanForm';

describe('<TermLoanForm />', () => {
    it('renders two <img />', () => {
        const wrapper = shallow(<TermLoanForm />);
        expect(wrapper.find("img").length).toBe(2);
    })
    it('renders one <h2 />', () => {
        const wrapper = shallow(<TermLoanForm />);
        expect(wrapper.find("h2").length).toBe(1);
    })
    it('renders one <p />', () => {
        const wrapper = shallow(<TermLoanForm />);
        expect(wrapper.find("p").length).toBe(1);
    })
});