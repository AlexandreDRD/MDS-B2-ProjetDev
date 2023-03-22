import { useEffect, useState } from 'react'

function Clock () {
  // Initialisation de l'etat local
  const [date, setDate] = useState(new Date())
  // Fonction appelée automatiquement au montage de composant
  useEffect(() => {
    // Fonction appelée tous les 100ms
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  // Afichage de composant
  return (
    <h1>{date.toLocaleTimeString()}</h1>
  )
}

export default Clock
