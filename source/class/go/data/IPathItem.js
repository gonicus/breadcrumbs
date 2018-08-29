
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
    /**
     * Return the label for the path item
     * @returns {String}
     */
    getLabel: function () {},

    /**
     * Icon to use as image source
     * @returns {String}
     */
    getIcon: function () {},

    /**
     * Path to the current item as '/' separated string
     * @returns {String}
     */
    getPath: function () {},

    /**
     * Highlight the breadcrump item
     * @returns {Boolean}
     */
    isHighlighted: function () {}
  }
})
