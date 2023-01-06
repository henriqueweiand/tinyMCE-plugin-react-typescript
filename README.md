# tinyMCE-plugin-react-typescript

### Overview

This is a basic project using:

- ReactJS
- Webpack
- TinyMCE 6
- Styled-components

To have an example of a plugin using ReactJS.

### Tips

- The project is using styled-components because I had problems using CSS directly on Webpack, so I decided to use something as a workaround.
- The file `Plugin.ts` is the core of the behaviors between the Plugin and the component, and it is not a good way, because the correct would be to have it inside or close to the component in fact. Maybe its interesting to think in change it and putting this control over there.
- Sometimes is necessary save two times in order for the LiveReload get the changes.

### To-do

- [x] Running ReactJS inside TinyMCE
- [x] Add solution for stylilization
- [x] Add build (without test)
- [ ] Improve the way that the component has control of the communication between it and TinyMCE
- [ ] Test build version

### Running

1. Install dependencies (pay attention NodeJS version)
2. Install Live Server extension (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Execute `yarn start`
4. Access `demo/html/index.html` and execute with Live Server

### Preview

![Preview](https://raw.githubusercontent.com/henriqueweiand/tinyMCE-plugin-react-typescript/master/assets/preview.gif)

---

##### Ref

Thanks André Marques for your post and contents! Part of your code was used as reference for this project https://levelup.gitconnected.com/create-tinymce-plugins-with-react-typescript-jest-and-webpack-6edd19ac378f
