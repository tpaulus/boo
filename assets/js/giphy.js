function searchGiphy() {
	q = "Cat"; // search query

	request = new XMLHttpRequest;
	request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);

	request.onload = function() {
		if (request.status >= 200 && request.status < 400){
			data = JSON.parse(request.responseText).data.image_url;
            if (data.startsWith("http://")) data = data.replace("http://", "https://");

            var element = document.getElementById("giphyme");
            element.onload = function () {
                document.getElementById("default-ghost").style.display = "none";
                element.style.display = "";
            };
            element.src = data;
		} else {
			console.log('reached giphy, but API returned an error');
		 }
	};

	request.onerror = function() {
		console.log('connection error');
	};

	request.send();
}
