import '../App.css'

function Register(){
return(
<body class="h-screen w-screen justify-center flex items-center bg-teal-600">


<div class="bg-white shadow-md w-96 rounded-md p-6 space-y-4"> 

    <h1 class="text-lg font-bold text-center mb-2 text-teal-800">Cadastro</h1>

    <div for="nameRegister"
         type="text"
         class="text-sm text-gray-800 ">Nome completo
       <input
        id="nameRegister"
        type="name"
        class="placeholder:Name w-full bg-gray-100 border border-teal-900 focus:border-teal-400 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>
    </div>

    <div for="emailRegister"
         type="text"
         class="text-sm text-gray-800 ">E-mail
       <input
        id="emailRegister"
        type="email"
        class="w-full bg-gray-100 border border-teal-900 focus:border-teal-400 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>
    </div>

    <div for="passwordRegister" 
        class="text-sm text-gray-800">Senha
       <input
        id="passwordRegister"
        type="password"
        class="w-full bg-gray-100 border border-teal-900 focus:border-teal-400 rounded px-2 py-1 text-base placeholder-gray-400 focus:outline-none transition duration-200 ease-in-out"/>
    </div>
    
    <button class="w-full flex flex-row text-white text-sm bg-teal-900 hover:bg-teal-800 p-1.5 rounded-md transition duration-200 ease-in-out "><p class="flex-1">Cadastrar</p>
      <svg xmlns="http://www.w3.org/2000/svg" class=" flex-none h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <div>
      <a href="./" class="text-xs text-teal-900 hover:text-teal-600 hover:underline">Voltar</a>
    </div>

</div>

</body>
);
};
export default Register;