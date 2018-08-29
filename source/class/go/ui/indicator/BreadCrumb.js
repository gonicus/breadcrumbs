/**
 * This widget shows a path as breadcrumb navigation
 *
 * Example:
 * <pre class='javascript'>
 *  var breadcrumb = new go.ui.indicator.BreadCrumb()
 *  var model = []
 *  model.push(new go.data.PathItem('Qooxdoo', qx.util.ResourceManager.getInstance().toUri('go/ui/indicator/test.png')))
 *  model.push(new go.data.PathItem('Widgetbrowser'))
 *  model.push(new go.data.PathItem('Breadcrumbs'))
 *  breadcrumb.setPath(model)
 * </pre>
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
      apply: 'refresh'
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

    refresh: function () {
      var children = this._getChildren()
      var item
      var precedingItem
      var data = this.getPath()
      var length = data.length

      for (var i = 0; i < length; i++) {
        if (children[i]) {
          item = children[i]
          item.show()
        } else {
          item = new go.ui.indicator.BreadCrumbItem()
          item.addListener('selected', this._itemSelected, this)
          this._add(item)
        }

        item.setModel(data[i])

        item.removeState('first')
        item.removeState('forelast')
        item.removeState('last')

        if (precedingItem) {
          item.setPreceding(precedingItem)
        }

        precedingItem = item
      }

      if (length) {
        children = this._getChildren()
        children[0].addState('first')
        if (length > 1) {
          children[length - 2].addState('forelast')
        }
        children[length - 1].addState('last')
      }

      for (var k = length, l = children.length; k < l; k++) {
        children[k].resetModel()
        children[k].resetPreceding()
        children[k].exclude()
      }
    }
  }
})
