
var accessToken = sessionStorage.getItem("AccessToken");

//$.ajaxSetup({
//    beforeSend: function (request) {
//        request.setRequestHeader("Authorization", 'Bearer ' + accessToken);
//    }
//});

function doAjaxCall(url, inData, callback) {
    $.ajax({
        type: "POST",
        dataType: "json",
        async: false,
        data: inData,
        url: url,
        success: callback
    });

   /*
  
    var isAsync = false;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (xmlEvent) {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xmlEvent.target.responseText);
            callback(data);
        }
    }
    xhr.open('POST', url, isAsync);    
    xhr.setRequestHeader("Accept", 'application/json, text/javascript, *//*; q=0.01');
    xhr.setRequestHeader("X-Requested-With", 'XMLHttpRequest');
    xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded; charset=UTF-8');
    //xhr.setRequestHeader("Authorization", 'Bearer ' + accessToken);

    var data = [];
    $.each(inData, function (key, value) {
        data.push(key + "=" + value);        
    });
    xhr.send(data.join('&'));
    */
}