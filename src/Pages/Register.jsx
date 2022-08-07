import '../App.css'

function Register(){
return(
<body class="h-screen w-screen flex justify-center items-center bg-es "> 

<div class="max-w-md">
  
 <h1 class="text-lg font-bold text-center mb-2">Cadastro</h1>
 
  <div class="bg-white shadow-md rounded-md p-6 space-y-4"> 
    <label for="nameRegister"
      type="text"
      class="text-sm text-gray-800 ">Nome Completo</label>
       <input
        id="nameRegister"
        type="name"
        class="placeholder:Name w-full bg-gray-100 border border-gray-700 focus:border-blue-500 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>

     <label for="emailRegister"
      type="text"
      class="text-sm text-gray-800 ">E-mail</label>
       <input
        id="emailRegister"
        type="email"
        class="w-full bg-gray-100 border border-gray-700 focus:border-blue-500 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>

     <label 
      for="passwordRegister" 
      class="text-sm text-gray-800">Senha</label>
       <input
        id="passwordRegister"
        type="password"
        class="w-full bg-gray-100 border border-gray-700 focus:border-blue-500 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>
    
    <div class="">

     <button class="w-full flex flex-row text-white text-sm bg-blue-500 hover:bg-blue-600 p-1.5 rounded-md transition duration-200 ease-in-out "><p class="flex-1">Cadastrar</p>
      <svg xmlns="http://www.w3.org/2000/svg" class=" flex-none h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
       <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      </button>

    </div>

    <div>
      <a href="./"class="text-xs  text-gray-600 hover:text-blue-600  hover:underline"> 
        Voltar </a>
    </div>

  </div>

</div>

</body>
);
};
export default Register;