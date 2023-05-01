document.getElementById("typescript")!.addEventListener("click", () => {
  insertTemplate("TypeScriptで出力すること");
});

document.getElementById("ddd")!.addEventListener("click", () => {
  insertTemplate("ドメイン駆動開発のプロジェクトでの最適解を出すこと");
});

function insertTemplate(template: string) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0].id !== undefined) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: `document.activeElement.value += '${template}';`,
        },
        () => {
          window.close();
        }
      );
    }
  });
}
