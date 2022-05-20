// Função simples que executa a mudança no body do documento o nome da classe

function mudaTema(){
   document.body.classList.toggle("dark") 
}


const swtcher = document.querySelector('btn');
swtcher.addEventListener('click', function(){
   document.body.classList.toggle('dark-theme')

   var className = document.body.className;

   if (className == "light-theme") {
      this.textContent = "Dark";
   }
   else{
      this.textContent = "light-theme"
   }
})
