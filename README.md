# preact-rails
Preact integration for Ruby on Rails.

## Getting started

1. Add `webpacker` and `preact-rails` to your Gemfile
```
gem 'webpacker'
gem 'preact-rails'
```
2. Install the gems by running `bundle install`
3. Install Preact by running `yarn add preact`
4. To transpile JSX, you need a Babel plugin that converts it to valid JavaScript code. Install [@babel/plugin-transform-react-jsx](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx#installation) by running `yarn add --dev @babel/plugin-transform-react-jsx`
5. Install the Preact UJS driver by running `yarn add preact_ujs` or `npm i preact_ujs`
6. Include your Preact components in your application.js
   Update `app/javascript/packs/application.js`, add the following lines:
   ```
   var componentRequireContext = require.context("components", true);
   var PreactRailsUJS = require("preact_ujs");

   PreactRailsUJS.useContext(componentRequireContext)
   ```
7. Create the directory `app/javascript/components`. That's where your Preact components will reside.
8. Create your first Preact component - create the file `app/javascript/components/Button.js` and add the following lines:
    ```
    import { h, Component } from "preact"

    class Button extends Component {
      render (props, state) {
        return (
          <button className="button" type={props.type}>{props.label}</button>
        );
      }
    }

    export default Button
    ```
 9. Ensure the javascript Pack is linked in Rails; the tag `<%= javascript_pack_tag 'application' %>` is included in `app/views/layouts/application.html.erb`
 10. Render your Preact component in a view
    ```
    <%= preact_component('Button', { type: 'submit', label: 'Get started!'}) %>
    ```
    
