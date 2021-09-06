import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import CardsPerPage from '../components/cardsPerPage';

Enzyme.configure({ adapter : new Adapter() });
describe('<CardsPerPage', () => {
    it('Selecting list from dropdown', () => {
        const wrapper = shallow(<CardsPerPage />);
        const expectedOption0 = '<option value="Select cards per page">Select cards per page</option>';
        const expectedOption1 = '<option value="10">10</option>';
        const expectedOption2 = '<option value="20">20</option>';
        const expectedOption3 = '<option value="50">50</option>';
      
        expect(wrapper.find('select').childAt(0).html()).toEqual(expectedOption0);
        expect(wrapper.find('select').childAt(1).html()).toEqual(expectedOption1);
        expect(wrapper.find('select').childAt(2).html()).toEqual(expectedOption2);
        expect(wrapper.find('select').childAt(3).html()).toEqual(expectedOption3);
       });
})