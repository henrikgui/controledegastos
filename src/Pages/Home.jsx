import '../App.css';

function Home() {
  return (
<body class="h-screen w-screen justify-center flex items-center bg-esmerald-100 ">

  <div class="max-w-md">
    
   <h1 class="text-lg font-bold text-center mb-2">Login</h1>
   
    <div class="bg-white shadow-md rounded-md p-6 space-y-4"> 

       <label for="emailLogin"
        type="text"
        class="text-sm text-gray-800 ">E-mail</label>
         <input
          id="emailLogin"
          type="email"
          class="w-full bg-gray-100 border border-gray-700 focus:border-blue-500 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>

       <label 
        for="passwordLogin" 
        class="text-sm text-gray-800">Senha</label>
         <input
          id="passwordLogin"
          type="password"
          class="w-full bg-gray-100 border border-gray-700 focus:border-blue-500 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>
      
      <div class="">

       <button class="w-full flex flex-row text-white text-sm bg-blue-500 hover:bg-blue-600 p-1.5 rounded-md transition duration-200 ease-in-out "><p class="flex-1">Login</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="flex-none h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg> 
        </button>
       
      </div>

       <div>
        <a href="./register" class="text-xs  text-gray-600 hover:text-blue-600  hover:underline">Cadastrar</a>
       </div>

    </div>

  </div>

</body>
  );
}

export default Home;
