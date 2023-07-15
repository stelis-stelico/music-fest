const plugin = require("tailwindcss/plugin");

const buttonPlugin = plugin(function ({addComponents, matchComponents, theme}) {
    console.log(theme("spacing")["0.5"]);
    addComponents({
        '.btn': {
            display: 'inline-block',
            cursor: 'pointer',
            fontWeight: 'bold',
            padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
            borderRadius: theme("borderRadius.").lg,
        },
    })
})


module.exports = buttonPlugin;
