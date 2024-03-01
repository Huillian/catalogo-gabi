
function Iphonecard({ nome, foto, parcela,  valorDestacado, valorQuebrado, valorAVista }) { 
    return(
        <section className="styles.card ">
          <div className="container cont-bd">
            <div className="row align-items-center">
              <div className="col-4 ">
                <div className=""><img src={foto} alt="Imagem do iPhone" class=" img-size-phone"  /></div>
                <div className="row ">
                  <div className="col">
                    <img class='img-size-garantia' src="src/assets/iphone/garantia1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-8 text-center">
                <p className="mt-5 tittle">{nome}</p>
                <div className="row">
                  <div className="col">
                    <button type="button " class="btn btn-empty position-relative">
                    <p className="text-spec">138GB</p>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      disponivel
                    </span>
                    
                    </button>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col">
                    <button type="button" class="btn btn btn-empty   position-relative">
                     <p className="text-spec">256GB</p>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      disponivel
                    </span>
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <button type="button" class="btn btn btn-empty  position-relative">
                    <p className="text-spec">512GB</p>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                      disponivel
                    </span>
                    </button>
                  </div>
                </div>

                <div className="container mb-3">
                  <div className="col ">
                    <div className="row bg-cont justify-content-center gx-1 gy-3">
                      <p class='my-0 text-g' >{parcela}x R$<span class="valor-spec">{valorDestacado}</span>,{valorQuebrado}</p>
                      <p class='my-0 text-g'>ou R${valorAVista} a vista</p>
                    </div>
                  </div>
                </div>
              </div>
  
              </div>
          </div>
        </section>
    )
}
export default Iphonecard