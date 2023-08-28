let contenido = document.querySelector("#contenedor_tarjetas")

function crearMostrarTarjetasPast(arregloEventos, ubicacion, fechaBase) {

  let tarjetas = ""
  for (evento of arregloEventos) {

    // verificar los eventos pasados segun la fecha base informada

    if (evento.date < fechaBase) {

      tarjetas += `<div class="card col-md-3">
        <img src=" ${evento.image}" class="card-img card-img-top mt-1 object-fit-cover" alt="...">

        <div class="card-body">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}family.</p>

          <div class="row">

          <div class="col-3 p-0">
            <h4 class="mb-0">Date</h4>
          </div>

          <div class="col-5 justify-content-center d-flex p-md-2 pt-1 justify-content-md-start">
            <h6 class="mb-0">${evento.date}</h6>
          </div>

        </div>


          <div class="row">

            <div class="col-3 p-0">
              <h4 class="mb-0">Price</h4>
            </div>

            <div class="col-4 justify-content-center d-flex p-md-2 pt-1 justify-content-md-start">
              <h6 class="mb-0">U$S ${evento.price}</h6>
            </div>

            <div class="col-4">
              <a href="./assets/pages/details.html" class="btn btn-primary">Details</a>
            </div>

          </div>
        </div>
      </div>`
    }
  }

  ubicacion.innerHTML = tarjetas
}

crearMostrarTarjetasPast(data.events, contenido, data.currentDate)