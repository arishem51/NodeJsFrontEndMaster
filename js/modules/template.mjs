import { readFile, writeFile } from "fs/promises";

const getTemplateFilePath = (path = "") => {
  const filePath =
    path === "public" ? "../../public/index.html" : "../../template/index.html";
  return new URL(filePath, import.meta.url);
};

const getTemplate = () => readFile(getTemplateFilePath(), "utf-8");

const setTemplate = (newTemplate) =>
  writeFile(getTemplateFilePath("public"), newTemplate);

const interpolateTemplate = (data, template) => {
  let newTemplate = template;
  Object.entries(data).forEach(([key, value]) => {
    newTemplate = newTemplate.replace(`{${key}}`, value);
    console.log(newTemplate);
  });
  return newTemplate;
};

export { getTemplate, setTemplate, interpolateTemplate };
