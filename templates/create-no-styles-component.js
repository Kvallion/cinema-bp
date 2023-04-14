const copy = require("copy-template-dir")
const path = require("path")
const fromCamelCase = require("./fromCamelCase")

const templateName = process.argv[2]
const pathToComponentsFold = process.argv[3];

const vars = {
    TemplateName: templateName,
    "template-name": fromCamelCase(templateName),
}
const inDir = path.join(process.cwd(), "templates/component-no-styles")
const outDir = path.join(process.cwd(), pathToComponentsFold)

if (!templateName) {
    console.error("No template name", templateName)
    process.exit(1)
}

// copy(inDir, outDir, vars, (err, createdFiles) => {
//     if (err) throw err
//     createdFiles.forEach((filePath) => console.log(`Created ${filePath}`))
//     console.log("done!")
// })
