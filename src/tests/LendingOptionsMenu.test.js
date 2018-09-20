import React from 'react';
import {shallow} from 'enzyme';
import { LendingOptionsMenu, LendingButton } from '../components/LendingOptionsMenu';

describe('<LendingOptionsMenu />', () => {
    it('renders two <LendingButton /> components', () => {
        const wrapper = shallow(<LendingOptionsMenu />);
        expect(wrapper.find(LendingButton).length).toBe(2);
    })
});