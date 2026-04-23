export default {
  extends: [
    "stylelint-config-standard-scss"
  ],
  plugins: [
    "stylelint-order"
  ],
  rules: {
    "order/properties-order": [
      [
        {
          groupName: "layout",
          properties: [
            "display",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "z-index"
          ]
        },
        {
          groupName: "box-model",
          properties: [
            "width",
            "min-width",
            "max-width",
            "height",
            "margin",
            "padding"
          ]
        },
        {
          groupName: "flex",
          properties: [
            "flex",
            "flex-direction",
            "justify-content",
            "align-items",
            "gap"
          ]
        },
        {
          groupName: "visual",
          properties: [
            "background",
            "background-color",
            "border",
            "border-radius"
          ]
        },
        {
          groupName: "typography",
          properties: [
            "font-size",
            "font-weight",
            "text-align",
            "color"
          ]
        },
        {
          groupName: "interaction",
          properties: [
            "cursor",
            "transition",
            "transform"
          ]
        }
      ]
]
  },
  ignoreFiles: ['src/scss/vendors/_normalize.scss'],
};
