function countryCard(data) {
  const {
    flags: {png, alt},
    name: {common, official},
    capital,
    region,
    population,
    subregion,
    maps: {googleMaps},
  } = data;
  const generateId = official.split(" ").join("_").toLowerCase();

  const div = document.createElement("div");
  div.className = "col-sm-6 col-md-4 col-lg-3 col-xxl-2";
  div.innerHTML = `<div class="card">
  <img src="${png}" class="card-img-top object-fit-cover" height="180" alt="${alt}">
  <div class="card-body">
    <h5 class="card-title fw-bold">${common}</h5>
    <p class="card-text"><b>Capital: </b>${capital[0]}</p>
    <p class="card-text"><b>Region: </b>${region}</p>

    <!-- show more details -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${generateId}">
      Details
    </button>

    <!-- Modal -->
    <div class="modal fade" id="${generateId}" tabindex="-1" aria-labelledby="${generateId}Label"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="${generateId}Label">${common}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img src="${png}" class="card-img-top" alt="${alt}">
            <hr />
            <h4 class="fw-bold">${common}</h4>
            <p><b>Capital: </b>${capital[0]}</p>
            <p><b>Region: </b>${region}</p>
            <p><b>Official: </b>${official}</p>
            <p><b>Population: </b>${population}</p>
            <p><b>Subregion: </b>${subregion}</p>
            <a href="${googleMaps}" class="btn btn-primary btn-sm" target="_blank">Map</a>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end more details -->
  </div>
</div>`;
  return div;
}
