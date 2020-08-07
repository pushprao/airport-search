import React from 'react';
import renderer from 'react-test-renderer';
import AirportsDropDown from "./AirportsDropDown";

it('renders airports dropdown', () => {
    const tree = renderer
        .create(<AirportsDropDown/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
