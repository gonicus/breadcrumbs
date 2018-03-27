
qx.Theme.define('go.ui.indicator.theme.Appearance', {
  extend: qx.theme.simple.Appearance,

  appearances:
  {
    'bread-crumb': {
      style: function () {
        return {
          minHeight: 38,
          backgroundColor: 'lightgray-dark',
          decorator: 'bread-crumb'
        }
      }
    },

    'bread-crumb-item': {
      style: function (states) {
        return {
          padding: 0,
          margin: 0,
          backgroundColor: states.forelast || states.last ? 'transparent' : (
            states.nextpressed ? 'aqua-light' : 'aqua-dark')
        }
      }
    },

    'bread-crumb-item/atom': {
      include: 'atom',
      alias: 'atom',
      style: function (states) {
        var background = 'aqua-dark'

        if (states.last) {
          background = 'transparent'
        } else if (states.hovered) {
          background = 'aqua-light'
        }

        return {
          cursor: states.hovered ? 'pointer' : 'default',
          paddingLeft: 6,
          paddingRight: 6,
          backgroundColor: background,
          textColor: states.last ? 'darkgray-dark' : 'white'
        }
      }
    },

    'bread-crumb-item/atom/icon': {
      style: function () {
        return {
          width: 22,
          height: 22,
          scale: true
        }
      }
    },

    'bread-crumb-item/arrow': {
      style: function (states) {
        return {
          height: 0,
          width: 0,
          decorator: states.last ? undefined : 'bread-crumb-item-arrow'
        }
      }
    },

    'bread-crumb-item/arrow-inner': {
      style: function (states) {
        return {
          height: 0,
          width: 0,
          decorator: states.last ? undefined : (
            states.hovered ? 'bread-crumb-item-arrow-inner-pressed' : 'bread-crumb-item-arrow-inner')
        }
      }
    }
  }
})
