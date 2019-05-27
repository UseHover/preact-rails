var preact = require("preact")
var constructorFromGlobal = require("./src/getConstructor/fromGlobal")
var constructorFromRequireContextWithGlobalFallback = require("./src/getConstructor/fromRequireContextWithGlobalFallback")

var PreactRailsUJS = {
  CLASS_NAME_ATTR: 'data-preact-class',
  PROPS_ATTR: 'data-preact-props',

  findDOMNodes: function() {
    return document.querySelectorAll('['+PreactRailsUJS.CLASS_NAME_ATTR+']')
  },

  getConstructor: constructorFromGlobal,

  useContext: function(requireContext) {
    this.getConstructor = constructorFromRequireContextWithGlobalFallback(requireContext)
  },

  mountComponents: function() {
    console.log('mountcomponent loaded')
    var nodes = PreactRailsUJS.findDOMNodes()
    for (var i = 0; i < nodes.length; ++i) {
      var node = nodes[i]
      var className = node.getAttribute(PreactRailsUJS.CLASS_NAME_ATTR)
      var constructor = PreactRailsUJS.getConstructor(className)
      var propsJson = node.getAttribute(PreactRailsUJS.PROPS_ATTR)
      var props = propsJson && JSON.parse(propsJson)
      preact.render(preact.h(constructor, props), node)
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
