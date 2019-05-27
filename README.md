# preact-rails
Preact integration for Ruby on Rails.

## Getting started

1. Add `webpacker` and `preact-rails` to your Gemfile
```
gem 'webpacker'
gem 'preact-rails'
```
2. Install the gems by running `bundle install`
3. Install the Preact UJS driver by running `yarn add preact_ujs` or `npm i preact_ujs`
4. Include your Preact components in your application.js
   Update `app/javascript/packs/application.js`, add the following lines:
   ```
   var componentRequireContext = require.context("components", true);
   var PreactRailsUJS = require("preact_ujs");

   PreactRailsUJS.useContext(componentRequireContext)
   ```
5. Create the directory `app/javascript/components`. That's where your Preact components will reside.
6. Create your first Preact component - create the file `app/javascript/components/Button.js` and add the following lines:
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
 7. Link the javascript Pack in Rails, add `<%= javascript_pack_tag 'application' %>` to `app/views/layouts/application.html.erb`
 8. Render your Preact component in a view
    ```
    <%= preact_component('Button', { type: 'submit', label: 'Get started!'}) %>
    ```
    
