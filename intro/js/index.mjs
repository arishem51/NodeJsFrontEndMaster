import {
  getTemplate,
  setTemplate,
  interpolateTemplate,
} from "./modules/template.mjs";

async function main() {
  const data = {
    heading: "Learn NodeJs in Front-End Master",
    body: "This is the first HTML file",
  };

  const template = await getTemplate();
  const newTemplate = interpolateTemplate(data, template);
  setTemplate(newTemplate);
}

main();
