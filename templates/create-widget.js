const copy = require("copy-template-dir")
const path = require("path")
const fromCamelCase = require("./fromCamelCase")

const templateName = process.argv[2]

const vars = {
    TemplateName: templateName,
    "template-name": fromCamelCase(templateName),
}
console.log(vars);
const inDir = path.join(process.cwd(), "templates/feature")
const outDir = path.join(process.cwd(), "src/widgets")

if (!templateName) {
    console.error("No template name", templateName)
    process.exit(1)
}

copy(inDir, outDir, vars, (err, createdFiles) => {
    if (err) throw err
    createdFiles.forEach((filePath) => console.log(`Created ${filePath}`))
    console.log("done!")
})
