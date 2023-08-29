import './App.css'
import { useGetDataQuery } from './api/api'
import { iData } from './types/types'



function App() {

  const {data=[]} = useGetDataQuery("")

  return (
    <>
      <header className="header">
        <form action="">
          <input type="text" />
          <button>Add</button>
        </form>
        <hr />
      </header>

      <section className="section">
        {data.map((item: iData) => {
          return (
            <div
              key={item.id}
              style={{
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                gap: `20px`,
              }}
            >
              <input type="checkbox" name="" id="" checked={item.complete} />
              {item.complete ? <h4 style={{textDecoration:`line-through`}}>{item.title}</h4> : <h4>{item.title}</h4>}
              <button>Delete</button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App
