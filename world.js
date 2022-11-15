window.onload = function() {
    var lookupButton = document.getElementById('lookup');
    var lookupCity = document.getElementById('searchcity')
    var input = document.querySelector('input');
    var result = document.getElementById('result');
    var httpRequest;
    
    lookupButton.addEventListener("click", function(element){
        element.preventDefault();
        httpRequest = new XMLHttpRequest();
        var url = "http://localhost/info2180-lab5/world.php?country="+input.value;

        httpRequest.onreadystatechange = loadList;
        httpRequest.open('GET', url);
        httpRequest.send();
    });
    
    
    function loadList(){
        if (httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200){
            var response = httpRequest.responseText;
            result.innerHTML = response;
        }
    }

    lookupCity.addEventListener("click", function(element){
        element.preventDefault();
        httpRequest = new XMLHttpRequest();
        var url = "http://localhost/info2180-lab5/world.php?city="+ input.value;

        httpRequest.onreadystatechange = loadList;
        httpRequest.open('GET', url);
        httpRequest.send();
    });
}