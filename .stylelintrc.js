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
        /* =========================
          1. POSITIONING / LAYOUT
        ========================== */
        {
          groupName: "layout",
          properties: [
            "display",
            "position",
            "top",
            "right",
            "bottom",
            "left",
            "inset",
            "z-index"
          ]
        },

        /* =========================
          2. SIZE (BOX MODEL)
        ========================== */
        {
          groupName: "box-model",
          properties: [
            "width",
            "min-width",
            "max-width",
            "height",
            "min-height",
            "max-height",
            "margin",
            "padding",
            "box-sizing"
          ]
        },

        /* =========================
          3. FLEXBOX
        ========================== */
        {
          groupName: "flex",
          properties: [
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-basis",
            "flex-direction",
            "flex-wrap",
            "justify-content",
            "align-items",
            "align-content",
            "align-self",
            "gap"
          ]
        },

        /* =========================
          4. GRID
        ========================== */
        {
          groupName: "grid",
          properties: [
            "grid",
            "grid-template-columns",
            "grid-template-rows",
            "grid-template-areas",
            "grid-auto-columns",
            "grid-auto-rows",
            "grid-auto-flow",
            "grid-column",
            "grid-column-start",
            "grid-column-end",
            "grid-row",
            "grid-row-start",
            "grid-row-end",
            "gap",
            "row-gap",
            "column-gap",
            "place-items",
            "place-content",
            "place-self"
          ]
        },

        /* =========================
          5. VISUAL / DECORATION
        ========================== */
        {
          groupName: "visual",
          properties: [
            "background",
            "background-color",
            "background-image",
            "background-size",
            "background-position",
            "background-repeat",
            "border",
            "border-width",
            "border-style",
            "border-color",
            "border-radius",
            "outline",
            "box-shadow",
            "opacity",
            "filter"
          ]
        },

        /* =========================
          6. TYPOGRAPHY
        ========================== */
        {
          groupName: "typography",
          properties: [
            "font",
            "font-family",
            "font-size",
            "font-weight",
            "font-style",
            "line-height",
            "letter-spacing",
            "text-align",
            "text-transform",
            "text-decoration",
            "text-indent",
            "white-space",
            "color"
          ]
        },

        /* =========================
          7. INTERACTION / BEHAVIOR
        ========================== */
        {
          groupName: "interaction",
          properties: [
            "cursor",
            "user-select",
            "pointer-events",
            "transition",
            "transform",
            "animation",
            "will-change"
          ]
        }
      ],
      {
        severity: "warning"
      }
    ]
  },
  ignoreFiles: ['src/scss/vendors/_normalize.scss'],
};
