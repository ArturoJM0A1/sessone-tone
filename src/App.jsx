import { useState, useEffect } from 'react'
import UserList from './UserList'
import './App.css'

function App() {
  // Estado para almacenar la lista de usuarios
  const [users, setUsers] = useState([])
  // Estado para controlar la carga
  const [loading, setLoading] = useState(true)
  // Estado para almacenar un posible error al consumir el JSON
  const [error, setError] = useState(null)
  // Vista actual: null (nada montado), 'ordenada' (solo nombres) u 'original' (con edades)
  const [vista, setVista] = useState(null)

  // Efecto que se ejecuta una vez al montar el componente (dependencias vacías)
  useEffect(() => {
    // Consumir el archivo users.json servido desde /public
    fetch('/users.json')
      .then((res) => {
        // Validar que la respuesta sea correcta
        if (!res.ok) throw new Error('No se pudo cargar el archivo')
        return res.json()
      })
      .then((data) => {
        setUsers(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, []) // Arreglo de dependencias vacío: se ejecuta solo al montar

  // Extraer únicamente los nombres de los usuarios cargados
  const names = users.map((user) => user.name)

  // Mostrar estado de carga
  if (loading) return <p>Cargando usuarios...</p>

  // Mostrar estado de error
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <h1>Usuarios</h1>

      {/* Botón que monta los 15 elementos: solo nombres, orden alfabético */}
      <button type="button" onClick={() => setVista('ordenada')}>
        Cargar lista
      </button>

      {/* Botón que quita el orden alfabético y muestra la lista original con edades */}
      <button type="button" onClick={() => setVista('original')}>
        Ver original (sin orden alfabético y con edades)
      </button>

      {/* Vista ordenada: solo nombres (las edades no se muestran) */}
      {vista === 'ordenada' && <UserList names={names} />}

      {/* Vista original: sin filtro de orden, nombre y edad */}
      {vista === 'original' && (
        <ol>
          {users.map((user) => (
            <li key={user.name}>
              {user.name} — {user.age} años
            </li>
          ))}
        </ol>
      )}
    </>
  )
}

export default App
