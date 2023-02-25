// get all country list
const counters = async (changeUrl) => {
  try {
    const API = `https://restcountries.com/v3.1/${changeUrl}`;
    const fetchData = await fetch(API);
    const data = await fetchData.json();
    showCountries(data); // send countries data
  } catch (error) {
    console.log(error.message);
  }
};
counters("all");

// show all countries where id is country_list
function showCountries(data) {
  // show all countries
  const country_list = document.getElementById("country_list");
  country_list.innerHTML = ""; // clear previous country
  data.forEach((singleData) => {
    country_list.appendChild(countryCard(singleData)); // appending all country
  });
}

// Search country name
function searchCountry() {
  // https://restcountries.com/v3.1/name/{name}
  const search = document.getElementById("search");
  search.addEventListener("keyup", function (e) {
    const name = e.target.value;
    counters(`name/${name}`);
  });
}
searchCountry();

// filter by region
function filterCountries() {
  // https://restcountries.com/v3.1/region/{region}
  const filter = document.getElementById("filter");
  filter.addEventListener("change", function (e) {
    const category = e.target.value;
    category !== "" ? counters(`region/${category}`) : counters("all");
  });
}
filterCountries();
