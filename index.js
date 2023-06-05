function receivesAFunction (name) {
    return name()
}
receivesAFunction('spy', function(name){ return name; })

function returnsANamedFunction () {
    return function name(){}
}

function returnsAnAnonymousFunction(){
    return function (){}
}