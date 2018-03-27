/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "breadcrumbs"
 *
 * @asset(go/ui/indicator/*)
 */
qx.Class.define('go.demo.Application', {
  extend: qx.application.Standalone,

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members: {
    /**
     * This method contains the initial application code and gets called
     * during startup of the application
     *
     * @lint ignoreDeprecated(alert)
     */
    main: function () {
      // Call super class
      this.base(arguments)

      // Enable logging in debug variant
      if (qx.core.Environment.get('qx.debug')) {
        // support native logging capabilities, e.g. Firebug for Firefox
        // eslint-disable-next-line no-unused-expressions
        qx.log.appender.Native
        // support additional cross-browser console. Press F7 to toggle visibility
        // eslint-disable-next-line no-unused-expressions
        qx.log.appender.Console
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      var breadcrump = new go.ui.indicator.BreadCrumb()

      var model = []
      model.push(new go.data.PathItem('Qooxdoo', qx.util.ResourceManager.getInstance().toUri('go/ui/indicator/test.png')))
      model.push(new go.data.PathItem('Widgetbrowser'))
      model.push(new go.data.PathItem('Breadcrumbs'))
      breadcrump.setPath(model)

      // Document is the application root
      var doc = this.getRoot()

      // Add button to document at fixed coordinates
      doc.add(breadcrump, {left: 100, top: 50})
    }
  }
})
