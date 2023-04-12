import PropTypes from "prop-types";



// const saludar = (name) => {
//     const saludo = `Hola ${name} como estas? `;
//     return saludo;
//  }

//props.title --> Al desestructurarse quedaria: "title"
export const SecondApp = ({title,subTitle}) => {

//  const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Jaider'
//  };

// if (!title) { Es otra forma de valir su viene o no una prop peo no es recomendable al estar dentro de mi componente 
//   throw new Error('El title no existe');
// }



  return (
    <>
        {/* <h1>{saludar("messi")}</h1> */}
        <h2>{title}</h2>
        {/* <h2>{subtitulo}</h2> */}
        {/* <h1>{newMessage.message}</h1> */}
        {/* <h3>{JSON.stringify(newMessage)}</h3> */}
        <p>Este es un subtitulo</p>
    </>
  )
}

//Las PropTypes me sirven para definir el tipo a las properties
SecondApp.propTypes = { // De esta forma se definen las PropTypes de mi Aplicativo
  title: PropTypes.string.isRequired //Esto obliga a que se deba de enviar la property de title
}

//De esta forma se prodian definir properties por default 
SecondApp.defaultProps = { // En el hilo de ejecución los defaultProps irian primero que las Proptypes 
  title: 'No hay titulo'
}