Breadcrump navigation widget - A qooxdoo contribution
=====================================================

The breadcrumb widget show a path split into single breadcrumb navigation items.

Example:
```
var breadcrumb = new go.ui.indicator.BreadCrumb()

var model = []
model.push(new go.data.PathItem('Qooxdoo', qx.util.ResourceManager.getInstance().toUri('go/ui/indicator/test.png')))
model.push(new go.data.PathItem('Widgetbrowser'))
model.push(new go.data.PathItem('Breadcrumbs'))
breadcrumb.setPath(model)
```

This example creates a breadcrumb path for `/Qooxdoo/Widgetbrowser/Breadcrumbs`.

![Breadcrump widget example](breadcrumb.png)


