import React from 'react';
import { render } from 'react-dom';
import MyPlugin from './components/MyPlugin';

export const setupReactApp = (element: Element) => {
    render(
        <MyPlugin />,
        element
    );
};
