/* 

*/


function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ['"', "&quot;"], ["<", "&lt;"], [">", "&gt;"]];

    replacements.forEach(function (replace) {
        const regex = new RegExp(replace[0],"g");

        text = text.replace(regex, replace[0][1]);
    });

    var i = 0;
    replacements.forEach(replace => {
        text = text.replace(replacements[i][0], replacements[i][1]);
        i++;
    });

    return text
}

console.log(escapeHTML("as>dasda<&"));
