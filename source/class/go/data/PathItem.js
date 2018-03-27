
/**
* The PathItem is used as a data model for an single {@link go.ui.indicator.BreadCrumbItem}.
*/
qx.Class.define('go.data.PathItem', {
  extend: qx.core.Object,
  implement: go.data.IPathItem,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
  construct: function (name, icon) {
    this.base(arguments)
    if (name) {
      this.setName(name)
    }
    if (icon) {
      this.setIcon(icon)
    }
  },

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
  properties: {
    name: {
      check: 'String',
      nullable: true
    },

    icon: {
      check: 'String',
      nullable: true
    }
  }
})