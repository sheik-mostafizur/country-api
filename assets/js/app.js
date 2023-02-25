const counters = async () => {
  try {
    const API = `https://restcountries.com/v3.1/all`;
    const fetchData = await fetch(API);
    const data = await fetchData.json();
    showCountries(data);
  } catch (error) {
    console.log(error.message);
  }
};
counters();

function showCountries(data) {
  const country_list = document.getElementById("country_list");
  data.forEach((singleData) => {
    country_list.appendChild(countryCard(singleData));
  });
}
