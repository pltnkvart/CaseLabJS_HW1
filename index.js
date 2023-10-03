function censor() {
    const data = [];
    return function (arg1, arg2) {
        if (arg1 && arg2) {
            data.push([arg1, arg2]);
        }
        if (arg1) {
            data.forEach(word => {
                arg1 = arg1.split(word[0]).join(word[1]);
            });
            return arg1;
        }
    }
}

const changeScene = censor();

changeScene('PHP', 'JS');
changeScene('backend', 'frontend')

console.log(changeScene('PHP is the most popular programming language for backend web-development'));
