fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random")
  .then((response) => response.json())
  .then((data) => console.log(data)); //now do whatever with the data

fetch("URL")
  .then((res) => res.json())
  .then(
    (data = {
      //do stuff in here
    }),
  );
