
/**
* Interface for objects that should be used as model for the Breadcrumb navigation widget must implements this interface
 * Those can used as a data model for an single {@link go.ui.indicator.BreadCrumbItem}.
*/
qx.Interface.define('go.data.IPathItem', {

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members: {
    getLabel: function () {},
    getIcon: function () {},
    getPath: function () {}
  }
})
