function spy(){}


function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    let ask = function(){}
        return ask;
    }

    function returnsAnAnonymousFunction(){
                return function(){}
    }