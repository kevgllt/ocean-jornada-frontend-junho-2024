import './App.css'
import Card from './componets/Card/Card'

function App() {
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  const item2 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }
  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }

  // Listas (Arrays)
  const itens = [item1, item2, item3]

  return (
    <>
      <div className="cards">
        {/* Para cada um dos itens da lista, exibir um Card */}
        {itens.map(function (elemento) {
          return <Card item={elemento} />
        })}
      </div>
    </>
  )
}

export default App