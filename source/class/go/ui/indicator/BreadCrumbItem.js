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

    if (qx.core.Environment.get('qx.dynlocale')) {
        qx.locale.Manager.getInstance().addListener("changeLocale", this._onChangeLocale, this)
    }
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
      nullable: true,
      apply: '_applyPrecending'
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
      hovered: true,
      highlight: true
    },

    _onChangeLocale: function () {
      var model = this.getModel()
      if (model && model.getLabel() && model.getLabel().translate) {
        this.getChildControl('atom').setLabel(model.getLabel().translate());
      }
    },

    _applyModel: function (model, old) {
      if (old && old.isHighlighted()) {
        this.removeState('highlight');
        if (this.getPreceding()) {
          this.getPreceding().removeState('nexthighlight');
        }
      }
      if (model) {
        if (model.getLabel() || model.getIcon()) {
          this.getChildControl('atom').set({
            label: model.getLabel() && model.getLabel().translate ? model.getLabel().translate() : model.getLabel(),
            icon: model.getIcon()
          })
          if (model.isHighlighted()) {
            this.addState('highlight');
            if (this.getPreceding()) {
              this.addState('nexthighlight');
            }
          }
        }
      }
    },

    _applyPrecending: function (value, old) {
      if (old) {
        old.removeState('nexthighlight')
      }
      if (value && this.getModel().isHighlighted('highlight')) {
        value.addState('nexthighlight');
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
          control.addListener('resize', function (ev) {
            console.log(control.getLabel(), ev.getData());
          });
          control._forwardStates.last = true
          control.setRich(true)
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
    if (qx.core.Environment.get("qx.dynlocale")) {
      qx.locale.Manager.getInstance().removeListener("changeLocale", this._onChangeLocale, this);
    }
  }
})
