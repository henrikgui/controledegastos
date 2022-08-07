import '../App.css';

function Home() {
  return (
<body class="h-screen w-screen justify-center flex items-center bg-teal-600 ">

  <div class="bg-white w-96 h-80 shadow-md rounded-md p-6 space-y-4">
    
       <h1 class="text-lg font-bold text-center text-teal-800">Login</h1>

       <div for="emailLogin"
        type="text"
        class="text-sm text-teal-800">E-mail
         <input
          id="emailLogin"
          type="email"
          class="w-full bg-gray-100 border border-teal-900 focus:border-teal-400 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>
       </div>

       <div for="passwordLogin" 
        class="text-sm text-teal-800 ">Senha
         <input
          id="passwordLogin"
          type="password"
          class="w-full  bg-gray-100 border border-teal-900 focus:border-teal-400 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>
      </div>
      
      <button class="w-full flex flex-row text-white text-sm bg-teal-900 hover:bg-teal-800 p-1.5 rounded-md transition duration-200 ease-in-out "><p class="flex-1">Login</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="flex-none h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg> 
      </button>
       
       <div>
        <a href="./register" class="text-xs  text-teal-900 hover:text-teal-600  hover:underline">Cadastrar</a>
       </div>

  </div>

</body>
  );
}

export default Home;
