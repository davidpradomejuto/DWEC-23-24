function devolverArrayDeEcuacion(a,b,c){

    let solucionRaiz = b^2-4*a*b*c;

    if (solucionRaiz >0){
        let result1 = (-b+sqrt(b^2-4*a*b*c))/2*a;
        let result2 = (-b-sqrt(b^2-4*a*b*c))/2*a;
        
        return [result1,result2];
    }
    
    return false;
}

