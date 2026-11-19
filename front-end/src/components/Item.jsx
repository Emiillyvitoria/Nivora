import React from 'react'

const Item = () => {
  return (
    <a href="/" className='flex flex-col gap-2'>
      <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQxODM2ODMwODQ2NzkzMjgyNA==/original/46f5884d-4f51-4a33-bab9-118edfb5a482.jpeg?im_w=320" alt="foto da acomodacao" className='aspact-square rounded-2xl object-cover' />

      <div>
    <h3 className='text-xl font-semibold'>Lugar relaxante no Rio de Janeiro</h3>
    <p className='truncate text-gray-600'>
      Casa com arquitetura contemporânea, em madeira, pedra e vidro, que se integra perfeitamente à paisagem natural. Localizada em uma das regiões mais privilegiadas do sul da ilha – conforto, natureza e cultura em um só lugar.
Todos os ambientes internos climatizados – inclusive a piscina aquecida de borda infinita – oferecem uma vista espetacular do mar, além da possibilidade de avistar baleias e golfinhos. A noite, é possível ir a pé ao teatro Vermelho assistir a um concerto ou um show de MPB.
</p>
</div>
    <p >
      <span className='font-semibold'> R$550 </span>por noite</p>
    
</a>
  )
}

export default Item