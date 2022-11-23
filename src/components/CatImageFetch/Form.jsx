import React from 'react'

export default function Form({ catName, setCatName, breed, setBreed }) {
  return (
    <div className="flex flex-col items-center my-4 sm:flex-row">
      <div className="form-control flex-1 sm:mr-4">
        <div className="input-group w-full">
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            value={catName}
            placeholder="Name"
            onChange={(e) => setCatName(e.target.value)}
          />
          <button type="button" className="btn btn-primary btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="dropdown">
        <label tabIndex={0} className="btn btn-primary m-1">
          Breed - {breed}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <button type="button" onClick={() => setBreed('abys')}>
              Abyssinian
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setBreed('amau')}>
              Arabian Mau
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setBreed('beng')}>
              Bengal
            </button>
            <button type="button" onClick={() => setBreed('drex')}>
              Devon Rex
            </button>
            <button type="button" onClick={() => setBreed('mcoo')}>
              Maine Coon
            </button>
            <button type="button" onClick={() => setBreed('srex')}>
              Selkirk Rex
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
