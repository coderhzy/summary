callback(
    {name: 'hello'}
)

$.ajax({
    url: 'http://localhost:8882/asdk.json',
    dataType: 'jsonp',
    jsonpCallback: 'callback',
    success: function (data) {
        console.log(data);
    }
})