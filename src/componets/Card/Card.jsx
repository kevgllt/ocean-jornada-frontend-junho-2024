export default function Card(){
    return (
        <div className="card">
            <h2>Rick Sanchez</h2>
            <div className="tags">
                <div>Status: vivo</div>
                <div>Especie: Humana</div>
                <div>Origem: Terra C-137</div>
            </div>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Imagem de personagem ficticio" />
        </div>
   )
}