async function renderPage() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method:'GET'
        });
        let data = await response.json();        
        // console.log(data);
       document.getElementById("DescriptionApi").innerHTML = data[2].body;
       document.getElementById("desc1").innerHTML = data[3].body;
       document.getElementById("desc2").innerHTML = data[4].body;
       document.getElementById("desc3").innerHTML = data[5].body;

    }
    catch(e) {
        document.getElementById("DescriptionApi").innerHTML = e;
        }
    
}


renderPage();