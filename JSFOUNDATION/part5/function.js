function orderTea(teaType){
    function confirmOrder(){
        return 'Order confirmed for chai';
    }
    return confirmOrder()
}

let ordetConfirmation = orderTea("chai")
// console.log(ordetConfirmation);

function makeTea(typeOfTea){
    return 'maketea: ${typeOfTea}';
}

function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
}

let order = processTeaOrder(makeTea);
console.log(order);