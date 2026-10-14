// Componente para listar nombres recibidos como prop
const UserList = ({ names }) => {
  // Crear una copia del arreglo para no mutar el original
  // y ordenar alfabéticamente en español usando localeCompare
  const sortedNames = [...names].sort((a, b) => a.localeCompare(b, 'es'));

  // Renderizar la lista ordenada
  return (
    <ol>
      {sortedNames.map((name, index) => (
        // Usar índice como key ya que los nombres podrían repetirse y no hay ID
        <li key={index}>{name}</li>
      ))}
    </ol>
  );
};

export default UserList;
