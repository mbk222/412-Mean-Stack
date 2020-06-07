const pr3 = (str, func) => func(str);

const e1 = str => str.split(/(?=c)/g);

const e2 = str =>[str, str.replace(/a/g,"A"), str.replace(/a/g,"A").match(/A/g).length.toString(),str.replace(/a/g,"A").length.toString()];
