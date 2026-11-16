const blogpost = {
  id: 159,
  name: "Venkateh",
  title: "Java Script",
};

//Convert to JSON

const json_object = JSON.stringify(blogpost);

console.log(json_object);

//Convert to JS Object

const js_object = JSON.parse(json_object);

console.log(js_object);
