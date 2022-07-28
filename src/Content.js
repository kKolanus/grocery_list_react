import React from 'react'

const content = () => {

    const handleNameChange = () => {
        const names = [`Krzto`,`Krzemień`,`Mufasy`];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

  return (
    
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
    </main>
  )
}

export default content