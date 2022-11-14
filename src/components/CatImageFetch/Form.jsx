import React from 'react'

export default function Form({ catName, setCatName, breed, setBreed }) {
  return (
    <div>
      <label htmlFor="catName">
        Name
        <div>
          <input
            name="catName"
            id="catName"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
        </div>
      </label>
      <label htmlFor="breed">
        Breed
        <div>
          <select
            name="breed"
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="abys">Abyssinian</option>
            <option value="amau">Arabian Mau</option>
            <option value="beng">Bengal</option>
            <option value="drex">Devon Rex</option>
            <option value="mcoo">Maine Coon</option>
            <option value="srex">Selkirk Rex</option>
          </select>
        </div>
      </label>
    </div>
  )
}
