module.exports = {
    semi: true,
    singleQuote: false,
    tabwidth:2,
    userTabs: true,
    plugin: [
        require("prettier-plugin-astro")
    ],
    overrides: [
        {
            files: "**/*astro",
            options:{
                option: "astro"
            }
        }
    ]
}