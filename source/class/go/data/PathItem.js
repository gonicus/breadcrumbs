
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
  construct: function (label, icon) {
    this.base(arguments)
    if (label) {
      this.setLabel(label)
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
    label: {
      check: 'String',
      nullable: true
    },

    icon: {
      check: 'String',
      nullable: true
    }
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members: {
    __path: null,

    setPath: function (val) {
      this.__path = val;
    },

    getPath: function () {
      return this.__path;
    }
  }
})