import React from 'react'

const List = ({ people,setPeople }) => {

  const handleRemove = (id) => {
    const rmvItem = people.filter((person)=> person.id !== id)
    setPeople(rmvItem)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} Years</p>
            </div>
            <button style={{width: "80px"}} className="Remove" onClick={() => handleRemove(id)}>Remove</button>
          </article>
        )
      })}
    </>
  )
}

export default List