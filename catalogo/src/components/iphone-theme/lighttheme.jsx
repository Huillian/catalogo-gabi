import React, { useState } from "react";

function IphoneLightTheme({
  nome,
  foto,
  parcela,
  valorDestacado,
  valorQuebrado,
  valorAVista,
  midnight,
  silver,
  spacegray,
  starlight,
  capacidade1,
  capacidade2,
  capacidade3,
  chipm2,
  chipm3,
  wpp,
  desc,
  disponivel1,
  disponivel2,
  disponivel3,
}) {
  const [fotoAtual, setFotoAtual] = useState(foto);
  const [corAtiva, setCorAtiva] = useState("CORES");

  const trocarFoto = (novaFoto, cor) => {
    setFotoAtual(novaFoto);
    setCorAtiva(cor);
  };

  return (
    <>
      <div className="container border mt-3 d-md-none">
        <div className="row mt-2">
          <div className="col page-title text-center">{nome}</div>
        </div>
        <div className="row justify-content-center">
          <img className="iphone" src={fotoAtual} alt="" />
        </div>
        <div className="row mt-3">
          <div className="col text-start sub-text">{corAtiva}</div>
          <div className="col text-end disponibilidade-text">
            Disponibilidade
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="cores-disponiveis-mac d-flex list-unstyled mt-2">
              {midnight && (
                <li
                  className={`cor-midnight me-1  ${
                    corAtiva === "cor-midnight" ? "active" : ""
                  }`}
                  onClick={() => trocarFoto(midnight, "MIDNIGHT")}
                ></li>
              )}
              {silver && (
                <li
                  className={`cor-silver me-1 ${
                    corAtiva === "cor-silver" ? "active" : ""
                  }`}
                  onClick={() => trocarFoto(silver, "SILVER")}
                ></li>
              )}
              {spacegray && (
                <li
                  className={`cor-spacegray me-1  ${
                    corAtiva === "cor-spacegray" ? "active" : ""
                  }`}
                  onClick={() => trocarFoto(spacegray, "SPACEGRAY")}
                ></li>
              )}
              {starlight && (
                <li
                  className={`cor-starlight me-1  ${
                    corAtiva === "cor-starlight" ? "active" : ""
                  }`}
                  onClick={() => trocarFoto(starlight, "STARLIGHT")}
                ></li>
              )}
            </ul>
          </div>
          <div className="col d-flex justify-content-end">
            <div
              class="btn-group cap-mobile "
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className={`btn ${
                  disponivel3 === "nao" ? "text-decoration-line-through" : ""
                }`}
              >
                {capacidade1}
              </button>
              <button
                type="button"
                className={`btn ${
                  disponivel2 === "nao" ? "text-decoration-line-through" : ""
                }`}
              >
                {capacidade2}
              </button>
              <button
                type="button"
                className={`btn ${
                  disponivel1 === "nao" ? "text-decoration-line-through" : ""
                }`}
              >
                {capacidade3}
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-0 mb-2" />
        <div className="row">
          <div className="col selo d-flex justify-content-center">
            <div className="row my-2">
              <div class="col-2 pulsating-circle"></div>
              <span className="col text-start d-flex align-items-center">
                Disponivel
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col selo d-flex justify-content-center">
            <div className="row d-flex justify-content-md-center">
              <img
                className="col-2 col-md-3 img-apple "
                src="/assets/apple/logo_black.svg"
                alt=""
              />
              <span className="col text-start d-flex align-items-center">
                Garantia
                <br />
                Apple 1 ano
              </span>
            </div>
          </div>
        </div>
        <a
          href={wpp}
          type="button"
          class="btn btn-price btn-outline-light button-wpp mt-2 mb-2"
        >
          <p class="my-0 text-g">
            {parcela}x R$<span class="valor-spec">{valorDestacado}</span>,
            {valorQuebrado}
          </p>
          <p class="my-0 text-g">ou R${valorAVista} a vista</p>
        </a>
      </div>

      {/* Seção visível apenas em dispositivos médios e maiores */}
      <section className="d-none d-md-block mt-5">
        <div className="container-fluid px-0">
          {/* Linha para título */}
          <div className="row">
            <div className="col-1 "></div> {/* Margem esquerda */}
            <div className="col-10  text-start ">
              <div className="pc-tittle-prod">{nome}</div>
              <div>
                <p class="text-muted fs-4 col-7">{desc}</p>
              </div>
            </div>
            <div className="col-1 "></div> {/* Margem direita */}
          </div>

          {/* Linha para imagem e conteúdo adicional */}
          <div className="row">
            <div className="col-1 "></div> {/* Margem esquerda */}
            <div className="col-6 bg-gray-100">
              <img
                className="img-fluid mx-auto d-block img-pc-iphone"
                src={fotoAtual}
                alt=""
              />{" "}
              {/* Imagem centralizada */}
            </div>
            <div class="col-4 text-start">
              {" "}
              <h2 class="">Especificações</h2>
              {/* Specificacoes */}
              <ul class="list-unstyled d-grid gap-2 ">
                <li>
                  <button
                    type="button"
                    class={`btn btn-light w-100 text-start ${
                      disponivel1 === "nao"
                        ? "text-decoration-line-through"
                        : ""
                    }`}
                    onclick="selecionarCapacidade('64GB')"
                  >
                    64GB
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class={`btn btn-light w-100 text-start ${
                      disponivel2 === "nao"
                        ? "text-decoration-line-through"
                        : ""
                    }`}
                    onclick="selecionarCapacidade('128GB')"
                    disabled
                  >
                    128GB (Indisponível)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class={`btn btn-light w-100 text-start ${
                      disponivel3 === "nao"
                        ? "text-decoration-line-through"
                        : ""
                    }`}
                    onclick="selecionarCapacidade('256GB')"
                  >
                    256GB
                  </button>
                </li>
              </ul>
              <div class="card">
                <div class="card-header">
                  <div className="col text-start sub-text">
                    <strong>{corAtiva}</strong> DISPONÍVEL
                  </div>
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>
                      <ul className="cores-disponiveis-pc d-flex justify-content-start list-unstyled mt-2">
                        {midnight && (
                          <li
                            className={`cor-midnight me-1  ${
                              corAtiva === "cor-midnight" ? "active" : ""
                            }`}
                            onClick={() => trocarFoto(midnight, "MIDNIGHT")}
                          ></li>
                        )}
                        {silver && (
                          <li
                            className={`cor-silver me-1 ${
                              corAtiva === "cor-silver" ? "active" : ""
                            }`}
                            onClick={() => trocarFoto(silver, "SILVER")}
                          ></li>
                        )}
                        {spacegray && (
                          <li
                            className={`cor-spacegray me-1  ${
                              corAtiva === "cor-spacegray" ? "active" : ""
                            }`}
                            onClick={() => trocarFoto(spacegray, "SPACEGRAY")}
                          ></li>
                        )}
                        {starlight && (
                          <li
                            className={`cor-starlight me-1  ${
                              corAtiva === "cor-starlight" ? "active" : ""
                            }`}
                            onClick={() => trocarFoto(starlight, "STARLIGHT")}
                          ></li>
                        )}
                      </ul>
                    </p>
                    <footer class="blockquote-footer mt-2">
                      A vida é feita de cores,{" "}
                      <cite title="Source Title">Escolha a sua.</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div class="d-flex d-inline text-center justify-content-center mt-3 ">
                    <span>Disponível</span>

                    <div className="pulsating-circle ms-2"> </div>
                  </div>
                </div>
                <div className="col-6 mt-1">
                  {" "}
                  <div className="container text-center ">
                    <button
                      data-bs-toggle="collapse"
                      className="garantia "
                      data-bs-target="#demo"
                    >
                      <img
                        className=" justify-content-center"
                        src="public/assets/iphone/garantia1.png"
                        alt=""
                        width="130px"
                      />
                    </button>
                    <div id="demo" class="collapse text-muted text-center">
                      Seu Produto da marca Apple está coberto por garantia de 1
                      (um) ano a partir da data de compra original.
                    </div>
                  </div>
                </div>
                <di className="container d-flex justify-content-center">
                  <a
                    href={wpp}
                    type="button"
                    class="btn btn-price-pc btn-outline-light button-wpp col-10 mt-2 mb-2"
                  >
                    <p class="my-0 text-g">
                      {parcela}x R$
                      <span class="valor-spec">{valorDestacado}</span>,
                      {valorQuebrado}
                    </p>
                    <p class="my-0 text-g">ou R${valorAVista} a vista</p>
                  </a>
                </di>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IphoneLightTheme;
