async function obtenerDatos() {
    try{
        const response = await fetch("http://127.0.0.1:5500/07-JSON/01-primer_json/datos.json")
        const json = await response.json();

        console.log(json)
        // console.log(JSON.stringify(json))


        console.log("--------------------------------------")
       
        //navegacion por json
        console.log(json.nombre);
        
        console.log(json.direccion.colonia);
        
        json.experiencia.forEach(elemento => {
            console.log(elemento.empresa)
        });



    }
    catch(error)
    {
        console.log("error",error)
    }

    
}

obtenerDatos();
