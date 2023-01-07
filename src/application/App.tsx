import React from 'react';
import { render } from 'react-dom';
import { Editor } from 'tinymce';
import MyPlugin from './components/MyPlugin';


export const setupReactApp = (element: Element, editor: Editor) => {
    render(
        <MyPlugin editor={editor} />,
        element
    );
};
