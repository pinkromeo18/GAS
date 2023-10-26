
//var ret = await fetchPost(url,obj)
//   .then(d=>d.json())
async function fetchPost(baseurl,obj){
  const method = "POST";
  const body = JSON.stringify(obj);  
  const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
  }  
  var url = baseurl
  return fetch(url, {method, headers, body})
}
async function fetchGet(baseurl,obj){
  let b = new URL(baseurl);
  let params = b.searchParams
  Object.keys(obj).forEach(key=> params.set(key,obj[key]))
  let url = b.href
  return fetch(url)
}

function toJSON(obj){
  var formData = isElement(obj)?new FormData(obj):obj
  var obj = Object.fromEntries(
    Array.from(formData.keys()).map(key => [
      key, formData.getAll(key).length > 1 ? 
      formData.getAll(key) : formData.get(key)
    ])
  )
  return obj    
}

/*
function isFormData(obj){
  return obj instanceof FormData
}
*/
function isElement(node) {
  return !!(node &&
    (node.nodeName  // we are a direct element
    || (node.prop && node.attr && node.find)));  // we have an on and find method part of jQuery API
}

var GAS ={fetchPost,fetchGet,toJSON}
export { GAS }
