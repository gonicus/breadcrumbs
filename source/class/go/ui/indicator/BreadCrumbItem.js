/**
 * A single breadcrumb path widget
 */
qx.Class.define('go.ui.indicator.BreadCrumbItem', {
  extend: qx.ui.core.Widget,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
  construct: function () {
    this.base(arguments)
    this._setLayout(new qx.ui.layout.HBox())

    this._createChildControl('atom')
    this._arrowContainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas())
    this._add(this._arrowContainer)
    this._createChildControl('arrow')
    this._createChildControl('arrow-inner')

    // Add listeners
    this.addListener('pointerover', this._onPointerOver)
    this.addListener('pointerout', this._onPointerOut)
    this.addListener('pointerup', this._onPointerUp)
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
      init: 'bread-crumb-item'
    },

    model: {
      check: 'go.data.IPathItem',
      init: null,
      apply: '_applyModel'
    },

    preceding: {
      init: null,
      check: 'go.ui.indicator.BreadCrumbItem',
      nullable: true
    }
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members: {
    _callback: null,

    // overidden
    /**
     * @lint ignoreReferenceField(_forwardStates)
     */
    _forwardStates: {
      first: true,
      last: true,
      forelast: true,
      hovered: true
    },

    _applyModel: function (model) {
      if (model.getLabel() || model.getIcon()) {
        this.getChildControl('atom').set({
          label: model.getLabel(),
          icon: model.getIcon()
        })
      }
    },

    _onPointerOver: function (e) {
      this.addState('hovered')

      if (this.getPreceding()) {
        this.getPreceding().addState('nextpressed')
      }
    },

    _onPointerOut: function (e) {
      this.removeState('hovered')

      if (this.getPreceding()) {
        this.getPreceding().removeState('nextpressed')
      }
    },

    _onPointerUp: function () {
      this.fireDataEvent('selected', this.getModel())
    },

    // overidden
    _createChildControlImpl: function (id, hash) {
      var control = null

      switch (id) {
        case 'atom':
          control = new qx.ui.basic.Atom()
          this._add(control)
          break

        case 'arrow':
          control = new qx.ui.core.Widget()
          this._arrowContainer.add(control, {top: 0, left: 1, right: 0, bottom: 0})
          break

        case 'arrow-inner':
          control = new qx.ui.core.Widget()
          this._arrowContainer.add(control, {top: 0, left: 0, right: 1, bottom: 0})
          break
      }

      return control || this.base(arguments, id, hash)
    }
  },

  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */
  destruct: function () {
    this._disposeObjects('_arrowContainer')
    this._callback = null
  }
})
