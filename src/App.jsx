import './App.css'
import Card from './components/Card/Card'
import Tag from './components/Tag/Tag'

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
    name: 'test',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }

  const text1 = {
    status: 'test',
    especies: 'tester',
    origin: 'testing'
  }

  // Listas (Arrays)
  const itens = [item1, item2, item3]

  return (
    <>
      <div className="cards">
        {/* Para cada um dos itens da lista, exibir um Card */}
        {itens.map(elemento => <Card item={elemento} key={elemento.name} />)}
        
        {/*{itens.map(function (elemento) {
          return <Card item={elemento} /> })}*/}
        <Tag text={text1}/>
      </div>
    </>
  )
}

export default App