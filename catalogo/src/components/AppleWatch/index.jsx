window.addEventListener('scroll', function() {
    var titles = document.querySelectorAll('.page-title');
    var scrollPosition = window.scrollY;

    titles.forEach(function(title) {
        var titleOffsetTop = title.offsetTop; // Obtém a posição superior do título
        var windowHeight = window.innerHeight; // Obtém a altura da janela visível

        if (window.innerWidth >= 853) { // Verifica se é uma tela grande
            if (scrollPosition > (titleOffsetTop - windowHeight * 0.75)) { // Atrasa o início do efeito de scroll
                title.style.fontSize = '76pt'; // Tamanho menor para dispositivos maiores que 853px
            } else {
                title.style.fontSize = '90pt'; // Tamanho maior para dispositivos maiores que 853px
            }
        } else { // Se for uma tela pequena (como dispositivos móveis)
        }
        if (window.innerWidth <= 853) { // Verifica se é uma tela grande
            if (scrollPosition > (titleOffsetTop - windowHeight * 0.75)) { // Atrasa o início do efeito de scroll
                title.style.fontSize = '20pt'; // Tamanho menor para dispositivos maiores que 853px
            } else {
                title.style.fontSize = '30pt'; // Tamanho maior para dispositivos maiores que 853px
            }
        } else { // Se for uma tela pequena (como dispositivos móveis)
            title.style.fontSize = '48pt'; // Mantém o tamanho da fonte inalterado
        }
    });
});

import React, { useState } from 'react';


function AppleWatch({  nome, foto, parcela41, valorDestacado41, valorQuebrado41, valorAVista41, parcela45, valorDestacado45, valorQuebrado45, valorAVista45, midnight, silver, spacegray, starlight,  dim41, dim45, wpp}) {
    const [fotoAtual, setFotoAtual] = useState(foto);
    const [corAtiva, setCorAtiva] = useState("midnight");
    

    const trocarFoto = (novaFoto, cor) => {
        setFotoAtual(novaFoto);
        setCorAtiva(cor);
    };
    
    const [dim41Ativo, setDim41Ativo] = useState(true); // Define a dimensão 41mm como ativa inicialmente

    const trocarDimensao = (dim41Atual) => {
        setDim41Ativo(dim41Atual);
    };
    


    return (
        <div className="container border  mt-5">
            <div className="row mt-2 ">
                <div className="col  page-title  text-center ">{nome}</div>
            </div>
            <div className="row justify-content-center">
                <img className='watch' src={fotoAtual} alt="AppleWatch" />
            </div>
            <div className="row mt-3">
                <div className="col text-start sub-text">{corAtiva}</div>
                <div className="col text-end disponibilidade-text">Disponibilidade</div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="cores-disponiveis-mac d-flex list-unstyled mt-2">
                        {midnight && (
                            <li className={`cor-midnight me-1  ${corAtiva === "cor-midnight" ? "active" : ""}`} onClick={() => trocarFoto(midnight, "MIDNIGHT")}></li>
                        )}  
                        {silver && (
                            <li className={`cor-silver me-1 ${corAtiva === "cor-silver" ? "active" : ""}`} onClick={() => trocarFoto(silver, "SILVER")}></li>
                        )}  
                        {spacegray && (
                            <li className={`cor-spacegray me-1  ${corAtiva === "cor-spacegray" ? "active" : ""}`} onClick={() => trocarFoto(spacegray, "SPACEGRAY")}></li>
                        )}  
                        {starlight && (
                            <li className={`cor-starlight me-1  ${corAtiva === "cor-starlight" ? "active" : ""}`} onClick={() => trocarFoto(starlight, "STARLIGHT")}></li>
                        )}   
                                                
                    </ul>
                </div>
                <div className="col justify-content-end">
                <div className="col chip text-end">
                    <div></div>
    <img src={dim41} alt="41mm" className={dim41Ativo ? 'dim41-active' : ''} onClick={() => trocarDimensao(true)} />
    <img src={dim45} alt="45mm" className={dim41Ativo ? '' : 'dim45-active'} onClick={() => trocarDimensao(false)} />
</div>

                </div>
            </div>
            <hr className='mt-0 mb-2' />
            <div className="row">
                <div className="col selo">
                    <div className="row">
                        <img className='col-2 img-apple ' src="/assets/apple/logo_black.svg" alt="" />
                        <span className='col text-start d-flex align-items-center'>Garantia<br />Apple 1 ano</span>
                    </div>
                </div>
                
            </div>
            <a href={wpp} type="button" className="btn btn-outline-light button-wpp mt-2">
             <p className='my-0 text-g' dangerouslySetInnerHTML={{ __html: dim41Ativo ? `${parcela41}x R$<span class="valor-spec">${valorDestacado41}</span>,${valorQuebrado41}` : `${parcela45}x R$<span class="valor-spec">${valorDestacado45}</span>,${valorQuebrado45}` }}></p>
             <p className='my-0 text-g'>ou {dim41Ativo ? `R$${valorAVista41}` : `R$${valorAVista45}`} a vista</p>
            </a>
        </div>
    );
}



export default AppleWatch;
