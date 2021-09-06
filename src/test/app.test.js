import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from '../App';
import { fetchPokemon } from '../services/fetchPokemon';
import { render, screen } from '@testing-library/react';

Enzyme.configure({ adapter: new Adapter() })

describe('render API call', () => {
    it('render pokemon API call', async() => {
        const link = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
        const wrapper = shallow(<App/>, fetchPokemon(link));
        expect(wrapper)
        

    })
})