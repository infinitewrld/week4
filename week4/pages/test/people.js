import fs from 'fs';
import path from 'path';

// get filepath to data directory
const dataDir = path.join( process.cwd(), 'data' );
export default  function people () {


  const getpeople =  () => {
    // = await fetch()
    // get filepath to json file
    //const filePath = path.join(dataDir, 'persons.json');
    // load json file contents
    //const jsonString = fs.readFileSync(filePath,'utf8');
  
    // convert string from file into json array object
    //const jsonObj = JSON.parse(jsonString);
 
    //return res.json()
    return [
    'thomas',
    'khalil',
    'james',
    'tyson',
    'richard',
    'olivia',
    ]

  }
  let peoplelist =  getpeople()
  return(
    <div>
      <ul>
      {
        peoplelist.map((item) => {
          return(<li>{item}</li>)
        })

      }
      </ul>
    </div>
  )
  
}


   
    
    














  
   