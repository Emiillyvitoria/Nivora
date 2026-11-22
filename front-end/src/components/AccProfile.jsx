import React from 'react'

const AccProfile = (user) => {
  return (
       <div className="flex flex-col items-center gap-4">
          <p>Logado como {user.name} ({user.email})</p>
          <button className="bg-primary-400 cursor-pointer rounded-full px-4 py-2 transition text-white min-w-44 ">Logout</button>
        </div>
  );
};

export default AccProfile;