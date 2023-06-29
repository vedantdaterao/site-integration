function redirectToSearch() {
  const query = document.getElementById('searchInput').value;
  
  const current_base_url = location.origin;

  const redirectUrl = `https://oriparts.com/?search=${query}&back_url_pn=${current_base_url}/site-integration/index.html?pn={pn}`; 

  //window.open(redirectUrl);
  window.location.href = redirectUrl;

}
























































// const searchButton = document.getElementById('searchButton');

// searchButton.addEventListener('click', redirectToSearch);

// function redirectToSearch(event) {
//   event.preventDefault(); 
//   // const searchInput = document.getElementById('searchInput');
//   // const query = searchInput.value.trim();
//   // let current_base_url = location.origin;

//   // const redirectUrl = `https://oriparts.com/?search=${query}&back_url_pn=${current_base_url}/search/{pn}`; 
    
//   // window.open(redirectUrl);
//   //   //window.location.href = redirectUrl;

// }


// // document.getElementById('searchForm').addEventListener('submit', function(event) {
// //   event.preventDefault(); // Prevent the form from submitting in the default way

// //   // Get the search query from the input field
// //   const query = document.getElementById('queryInput').value;

// //   // Construct the redirect URL with the search query
// //   const redirectUrl = `https://oriparts.com/search?query=${encodeURIComponent(query)}`;

// //   // Redirect the user to the constructed URL
// //   window.location.href = redirectUrl;
// // });



// // let part = document.getElementById("partnum").value;
// // let current_base_url = location.origin;
// // let redirect_url = `https://oriparts.com/?search=${part}&back_url_pn=${current_base_url}/search/{pn}`;
// // console.log(redirect_url);
// // location.href=redirect_url;






// // document.getElementById('searchForm').addEventListener('submit', function(event) {
// //   event.preventDefault(); // Prevent the form from submitting in the default way

// //   // Get the search query from the input field
// //   const query = document.getElementById('queryInput').value;

// //     const xhr = new XMLHttpRequest();
// //     xhr.open("GET", "https://oriparts.com/?search=${encodeURIComponent(query)}");
// //     xhr.send();
// //     xhr.responseType = "json";
// //     xhr.onload = () => {
// //   if (xhr.readyState == 4 && xhr.status == 200) {
// //     const data = xhr.response;
// //     console.log(data);
// //   } else {
// //     console.log(`Error: ${xhr.status}`);
// //   }
// // };

// //   // Construct the redirect URL with the search query
// //   //const redirectUrl = `https://oriparts.com/?search=${encodeURIComponent(query)}`;

// //   // Open the URL in a new tab or window
// //   //window.open(redirectUrl, '_blank');
// // });

// // document.querySelector(".search-bar .Accept").addEventListener("click",()=>{
    
// //    window.location.replace('https://oriparts.com/?search=55810M75J30')
// // })

// // document.querySelector(".search-bar button").addEventListener("click",()=>{
    
// //    window.location.replace('https://oriparts.com/?search=55810M75J30') 
// // })
