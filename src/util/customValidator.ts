export class customValidator {
    static isZero(control){
        if(control.value == 0)
            return { invalidNumber: true};
        else
            return null;
    }

    static isPositive(control){
        if(control.value >= 0)
            return null;
        else
            return { invalidNumber: true };
    }

    static verifyFloatType(control){
      if(control.value != null){
        if(control.value.match(/^(-?[1-9]+\d*)$|^0$/))
            return null;
        else
            return { invalidNumber: true };
      }
      
    }
}