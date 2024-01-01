import { Button, Stack, TextField } from '@mui/material';
import './App.css';



import { useState } from 'react';



function App() {
  const[input,setinput] = useState('')

  const Calculate=()=>{ 
    try { 
        const calculatedresult = eval(input)
        setinput(calculatedresult+'')}
    catch{
          setinput('Error')
          setTimeout(()=>{setinput('')},1000)
        }
       
 }

  const display = (e)=>{
    if(e==='AC'){
    setinput('')
   }
    else if(e==='='){
   Calculate();
    }
    else if(e==='Clear'){
    setinput(input.slice(0,-1))
    }
   else{
     setinput((n)=>n+e)
   }
  }


  return (
   <>
   <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'> 
   <div  className='p-5 rounded' style={{width:'600px',backgroundColor:"white"}}> 
    <div className='bg-success w-100 d-flex justify-content-center align-items-center'> 
    <h1 className='text-center text-light'>Calculator</h1>
    </div>
   <form className='mt-5' >
   <Stack direction="row" spacing={2}>
  
   <TextField value={input} className='w-100' id="outlined-basic" placeholder='0' label="" variant="outlined"/> 
   <Button onClick={()=>display('AC')} style={{color:'black',fontSize:'20px'}}  variant="contained">AC</Button>

   </Stack>
   <Stack className='mt-3 w-100' direction="row" spacing={5}>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('7')} variant="contained">7</Button>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('8')} variant="contained">8</Button>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('9')}  variant="contained">9</Button>
   <Button style={{width:'80px',height:'50px',color:'yellow',fontSize:'30px'}} onClick={()=>display('/')}  variant="contained">/</Button>
   </Stack>

   
   <Stack className='mt-3 w-100' direction="row" spacing={5}>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('4')}  variant="contained">4</Button>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('5')}  variant="contained">5</Button>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('6')}  variant="contained">6</Button>
   <Button style={{width:'80px',height:'50px',color:'yellow',fontSize:'30px'}} onClick={()=>display('*')}  variant="contained">*</Button>
   </Stack>
   
   
   <Stack className='mt-3 w-100' direction="row" spacing={5}>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('1')}  variant="contained">1</Button>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('2')}   variant="contained">2</Button>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('3')}  variant="contained">3</Button>
   <Button style={{width:'80px',height:'50px',color:'yellow',fontSize:'30px'}} onClick={()=>display('-')}   variant="contained">-</Button>
   </Stack>

   <Stack className='mt-3 w-100' direction="row" spacing={5}>
   <Button style={{width:'80px',height:'50px',fontSize:'20px'}} onClick={()=>display('0')}  variant="contained">0</Button>
   <Button style={{width:'80px',height:'50px',color:'yellow',fontSize:'30px'}} onClick={()=>display('.')}  variant="contained">.</Button>
   <Button style={{width:'80px',height:'50px',color:'yellow',fontSize:'30px'}} onClick={()=>display('=')}  variant="contained">=</Button>
   <Button style={{width:'80px',height:'50px',color:'yellow',fontSize:'30px'}} onClick={()=>display('+')}  variant="contained">+</Button>
   </Stack>

   <Stack className='mt-3 w-100' direction="row" spacing={3}>
   <Button style={{width:'80px',height:'50px',color:'yellow',fontSize:'15px'}} onClick={()=>display('Clear')}  variant="contained">Clear</Button>
   </Stack>
     
   </form>
   </div>
   </div>
   </>
  );
}

export default App;
