export function getObject(homepage, mixWords) {
  var content = {
    [homepage]: mixWords.reduce((a, v) => ({ ...a, [v]: v }), {}),
    //   homepage: domains.map(elem=> ({[elem]:elem}))
  };
  return content;
}
