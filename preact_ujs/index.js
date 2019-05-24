var PreactRailsUJS = {
  CLASS_NAME_ATTR: 'data-preact-class',

  findDOMNodes: function() {
    return document.querySelectorAll('['+PreactRailsUJS.CLASS_NAME_ATTR+']')
  },

  mountComponents: function() {
    var nodes = PreactRailsUJS.findDOMNodes()
    for (var i = 0; i < nodes.length; ++i) {
      var node = nodes[i]
      var className = node.getAttribute(PreactRailsUJS.CLASS_NAME_ATTR)
      var constructor = window[className]

      preact.render(preact.h(constructor), node)
    }
  },

  handleEvent: function(eventName, callback) {
    document.addEventListener(eventName, callback);
  },

  removeEvent: function(eventName, callback) {
    document.removeEventListener(eventName, callback);
  }

}

PreactRailsUJS.handleEvent('DOMContentLoaded', PreactRailsUJS.mountComponents)

module.exports = PreactRailsUJS
