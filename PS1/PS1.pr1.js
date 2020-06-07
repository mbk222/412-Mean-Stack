const pr1 = str => str.replace(/[.,\/#@!$%\^&\*;:{}=\-_`~()]/g,"").split('').sort().join('');

console.log(pr1('supercalifragilisticexpialidocious'));
console.log(pr1('!    supercalifragilist$@icexpialidociou$s'));
console.log(pr1("!c@bAa."))
