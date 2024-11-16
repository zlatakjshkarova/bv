function hello1() {
    console.log("Привет,JavaScript")

}
hello1();


function red(der, far) {

    if (der % 2 == 0 && far % 2 == 0) {
        return der * far
    } else if (der % 2 != 0 && far % 2 != 0) {
        return der + far
    } else if (der % 2 == 0 && far % 2 != 0) {
        return der, far
    }

}

let ress = red(2, 7);
console.log(ress)



function checkVelo(wheels, weight) {


    if (wheels === 2 && weight < 100) {

        return "Парковка разрешена"
    } else {
        return "Парковка только для велосипедов"
    }
}
let res = checkVelo(2, 102);
console.log(res);






function func() {
    param4 = param1 + param2 + param3
    return param4
}
let param1 = 1;
let param2 = 2;
let param3 = 3;

let am4 = func(param1, param2, param3)
console.log(am4)





function rame(as) {
    let wer = as ** 2
    return wer
}

let er = rame(3)
console.log(er)

function nwer(res) {
    let waq = res ** 3
    return waq
}
let a = nwer(4);
console.log(a)


function edf(c) {
    let ert = c ** 1 / 2
    return ert
}
let dfs = edf(4);
console.log(dfs);

function wer(r) {
    let df = r ** 1 / 2
    return df
}
let ran = wer(3);
let ran1 = wer(4);
console.log(ran + ran1);



