import { insertTemplate } from "./insertTemplate";

document.getElementById("saveTemplate")?.addEventListener("click", () => {
  const templateEditor = document.getElementById(
    "templateEditor"
  ) as HTMLTextAreaElement;
  const template = templateEditor.value;
  if (template) {
    chrome.storage.local.set({ savedTemplate: template }, () => {
      console.log("Template saved");
    });
  }
});

chrome.storage.local.get("savedTemplate", (data) => {
  const templateEditor = document.getElementById(
    "templateEditor"
  ) as HTMLTextAreaElement;
  if (data.savedTemplate) {
    templateEditor.value = data.savedTemplate;
  }
});

document.getElementById("applyTemplate")?.addEventListener("click", () => {
  const templateEditor = document.getElementById(
    "templateEditor"
  ) as HTMLTextAreaElement;
  const template = templateEditor.value;
  if (template) {
    insertTemplate(template);
    window.close();
  }
});
