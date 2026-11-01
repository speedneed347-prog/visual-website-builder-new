type HtmlTemplateOptions = {
  title: string;
  description: string;
  body: string;
};

function escapeAttribute(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function createHtmlTemplate({
  title,
  description,
  body
}: HtmlTemplateOptions) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeAttribute(description)}">
  <title>${escapeAttribute(title)}</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  ${body}
  <script src="script.js" defer></script>
</body>
</html>`;
}
