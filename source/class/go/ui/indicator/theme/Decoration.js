
qx.Theme.define('go.ui.indicator.theme.Decoration', {
  extend: qx.theme.simple.Decoration,

  decorations: {
    'bread-crumb':
    {
      style: {
        width: 1,
        color: 'lightgray-dark',
        radius: 4
      }
    },

    'bread-crumb-item-last':
    {
      style: {
        backgroundColor: 'transparent'
      }
    },

    'bread-crumb-item-arrow':
    {
      style: {
        width: [18, 0, 18, 11],
        color: ['transparent', 'rgba(0, 0, 0, 0.15)', 'transparent', 'rgba(0, 0, 0, 0.15)']
      }
    },

    'bread-crumb-item-arrow-inner':
    {
      style: {
        width: [18, 0, 18, 11],
        color: ['transparent', 'aqua-dark', 'transparent', 'aqua-dark']
      }
    },

    'bread-crumb-item-arrow-inner-pressed':
    {
      include: 'bread-crumb-item-arrow-inner',
      style: {
        color: ['transparent', 'aqua-light', 'transparent', 'aqua-light']
      }
    }
  }
})
