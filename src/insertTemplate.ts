import { browser } from "webextension-polyfill-ts";

export async function insertTemplate(template: string): Promise<void> {
  const tabs = await browser.tabs.query({ active: true, currentWindow: true });
  const tabId = tabs[0].id;

  if (tabId === undefined) {
    return;
  }

  await browser.tabs.executeScript(tabId, {
    file: "dist/insertTemplateScript.js",
    runAt: "document_end",
  });

  await browser.tabs.sendMessage(tabId, {
    type: "insertTemplate",
    template: template,
  });
}
