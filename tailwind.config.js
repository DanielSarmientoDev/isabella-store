import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  important: true,
  //prefix: 'tw-',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    preflight: false,
  },
  variants: {
    backgroundColor: ['responsive', 'odd', 'hover', 'focus'],
  },
  theme: {
    extend: {
      fontFamily: {
        serif: ['Airbnb Cereal App', ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        default: '0 5px 21px  rgba(0, 0, 0, 0.05)',
      },
      fontSize: {
        // title: '55px',
        // subtitle: '21px',
        // content: '16px',
        // tiny: '14px',
        xsmall: '14px',
        small: '16px',
        medium: '21px',
        large: '34px',
        xlarge: '55px',
      },
      colors: {
        'wild-sand': '#F6F6F6',
        'san-juan': '#2D4E60',
        'aqua-haze': '#F8FAFB',
        nepal: '#9DB5C2',
        primary: '#00d0eb',
        'citix-gray': '#808080',
        'athens-gray': '#F5F7F9',
        'athens-gray-dark': '#EEF2F4',
        mystic: '#D7E2E8',
        'slate-gray': '#728895',
      },
    },
  },
  plugins: [],
}
