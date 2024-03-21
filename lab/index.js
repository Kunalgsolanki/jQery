const data =[

    {
         name: "diya ", 
         skil :'web development'
    }, 
    {
        name: "riya  ", 
        skil :'app development'
   }, 
   {
    name: "piya  ", 
    skil :'ml development'
}
]


  console.log(data[0].constructor())
  if (data[0].constructor === Object){
    
    console.log(true)
  }
  else{
    console.log(false)
  }