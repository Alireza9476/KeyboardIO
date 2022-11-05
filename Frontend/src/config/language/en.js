export function getObject(pageName, values) {
  var content = {
    [pageName]: values.reduce(
      (a, v) => ({ ...a, [v.toUpperCase().replace(/\s/g, "_")]: v }),
      {}
      //homepage: domains.map(elem=> ({[elem]:elem}))
    ),
  };
  return content;
}

/* 
    input:
    pageName = "homepage"
    values = ["Replace, Mix Words"]
*/

//output : {homepage: {REPLACE: Replace, MIX_WORDS: Mix Words}}
