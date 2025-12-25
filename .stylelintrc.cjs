export default {
  extends: [
    'stylelint-config-standard-scss'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'order/properties-order': 'warning'
  }
};
