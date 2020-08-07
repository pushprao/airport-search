import React from 'react';
import renderer from 'react-test-renderer';
import AirportsChooser from "./AirportsChooser";

it('renders airports chooser', () => {
    const tree = renderer
        .create(<AirportsChooser/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
