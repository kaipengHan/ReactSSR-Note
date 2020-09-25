import  getScript  from "./getScript";
import  getLinks  from "./getLinks";

export default (componentHTML, path, store) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>SSR</title>
    ${getLinks()}
  </head>
  <body>
    <div id="root">${componentHTML}</div>
    <script>
      window.pageDatas = ${JSON.stringify(store.getState())}
      window.requestPath = "${path}";
    </script>
    ${getScript()}
  </body>
  </html>`;
  return html;
};
