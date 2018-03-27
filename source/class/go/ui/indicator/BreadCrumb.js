/**
 * This widget shows a path as breadcrumb navigation
 */
qx.Class.define('go.ui.indicator.BreadCrumb', {
  extend: qx.ui.core.Widget,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
  construct: function () {
    this.base(arguments)
    this._setLayout(new qx.ui.layout.HBox())
  },

  /*
  *****************************************************************************
     EVENTS
  *****************************************************************************
  */
  events: {
    'selected': 'qx.event.type.Data'
  },

  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
  properties: {
    // overridden
    appearance: {
      refine: true,
      init: 'bread-crumb'
    },

    path: {
      init: null,
      check: 'Array',
      nullable: true,
      apply: '_applyPath'
    }
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members: {
    _itemSelected: function (ev) {
      this.fireDataEvent('selected', ev.getData())
    },

    // property apply
    _applyPath: function (data) {
      var children = this._getChildren()
      var item
      var precedingItem

      for (var i = 0, l = data.length; i < l; i++) {
        if (children[i]) {
          item = children[i]
          item.show()
        } else {
          item = new go.ui.indicator.BreadCrumbItem()
          item.addListener('selected', this._itemSelected, this)
          this._add(item)
        }

        item.setModel(data[i])

        item.removeState('forelast')
        item.removeState('last')

        if (precedingItem) {
          item.setPreceding(precedingItem)
        }

        precedingItem = item
      }

      if (data.length) {
        children = this._getChildren()
        if (data.length > 1) {
          children[data.length - 2].addState('forelast')
        }
        children[data.length - 1].addState('last')
      }

      for (i = data.length, l = children.length; i < l; i++) {
        children[i].exclude()
      }
    }
  }
})
