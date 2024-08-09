import React, { useEffect } from 'react';
import PrivatePolices from "../../componentes/PrivacePolity";


function TerminosLegales(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <>
        <PrivatePolices/>
        </>
    );
}

export default TerminosLegales