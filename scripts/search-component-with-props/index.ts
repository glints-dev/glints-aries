// Scenario: search the components with variant="secondary" and theme="blue" props
// Usage: yarn search ../dst/app --props='{"variant": "secondary", "theme": "blue"}'

function transformer(file, api, options) {
  const props = options.props;
  const j = api.jscodeshift;
  const root = j(file.source);
  const result = root.findJSXElements().filter(p => {
    const filterTheme = j.filters.JSXElement.hasAttributes(props);
    return filterTheme(p);
  });

  if (result.length) {
    const JSXNames = [];
    result.forEach(p => {
      JSXNames.push(p.value.openingElement.name.name);
    });

    console.log(
      `\nPath: ${file.path}`,
      `\nJSXElements: ${JSXNames}`,
      `\nCount: ${result.length}\n`
    );
  }
}

module.exports = transformer;
module.exports.parser = 'tsx';
