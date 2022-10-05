import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BuscadorTraveling } from '../Services/BuscadorTraveling'
import CardTravel from '../Components/CardTravel'
import './Discover.css'

const Pesquisa = () => {

    const pesquisa = useParams();
    const [buscador, setBuscador] = useState([]);

    useEffect(() => {
        BuscadorTraveling(pesquisa.termopesquisado).then(response => (setBuscador(response)))
    }, [])

    if (buscador.length == 0) {
        return (
        <div style={{fontSize: "50px", textAlign: "center", marginTop: "16rem"}} >Busca não encontrada <br/> ERRO 404</div>
        )
    }

    return (
        <div>
            <h2>Pesquisa</h2>
            <div className="discover">
             { buscador.map( index => <CardTravel {...index}/>) }
            </div>

          
        </div>
    )
}

export default Pesquisa;