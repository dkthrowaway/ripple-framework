import StyleDictionary from 'style-dictionary';
StyleDictionary.registerFormat({
    name: 'utilities/marginClasses',
    formatter: function ({ dictionary }) {
        let output = `/**
 * Margin util
 *
 * This file is automatically generated, do not edit directly!
 */
`;
        for (let i = 0; i < dictionary.properties.steps.value; i++) {
            output += `.rpl-u-margin-${i + 1} {
  margin: var(--rpl-sp-${i + 1});
}

.rpl-u-margin-t-${i + 1} {
  margin-top: var(--rpl-sp-${i + 1});
}

.rpl-u-margin-r-${i + 1} {
  margin-right: var(--rpl-sp-${i + 1});
}

.rpl-u-margin-b-${i + 1} {
  margin-bottom: var(--rpl-sp-${i + 1});
}

.rpl-u-margin-l-${i + 1} {
  margin-left: var(--rpl-sp-${i + 1});
}

`;
        }
        output += `.rpl-u-margin-none {
  margin: 0;
}
`;
        return output;
    }
});
StyleDictionary.extend({
    properties: {
        steps: {
            value: 14
        }
    },
    platforms: {
        css: {
            buildPath: '../src/styles/generated/',
            transformGroup: 'css',
            files: [
                {
                    destination: '_margin.css',
                    format: 'utilities/marginClasses'
                }
            ]
        }
    }
}).buildAllPlatforms();
//# sourceMappingURL=margin.js.map