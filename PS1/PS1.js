// Mehmet Kurt (U38416972)

const pr1 = str => str.replace(/[.,\/#@!$%\^&\*;:{}=\-_`~()]/g,"").split('').sort().join('');

const pr2 = expression => eval(expression);

const pr3 = (str, func) => func(str);

const e1 = str => str.split(/(?=c)/g);

const e2 = str =>[str, str.replace(/a/g,"A"), str.replace(/a/g,"A").match(/A/g).length.toString(),str.replace(/a/g,"A").length.toString()];

console.log(pr3("supercalifragilisticexpialidocious", e2));
