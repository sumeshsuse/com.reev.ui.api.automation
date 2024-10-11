class RequestAPI {

executeRequest(methodHTTP, urlHTTP, headersHTTP, bodyHTTP){
    return cy.request({
      method: methodHTTP,
      url: urlHTTP,
      headers: headersHTTP,
      body: bodyHTTP
    })
}

requestURL(uri){
  if(uri.includes('createserialnumber')){
    return "/charge-point";
  }else if (uri.includes('getserialnumber')){
    return "/charge-point";
  }
  else {
    return "/charge-point/{deleteID}";
  }
}



}
export default RequestAPI;