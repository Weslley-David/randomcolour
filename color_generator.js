function color_gen(){
    color_base = '1234567890abcdef';
    teste = "";
    i = 0;
    while(i < 6){
        teste = teste + color_base[Math.floor(Math.random() * 16)];
        //console.log(teste);
        i++;
    }
    teste = "#" + teste
    return teste;
}
function main(){
var color = document.getElementById("cor");
new_color = color_gen();
console.log(new_color)
color.style.backgroundColor = new_color
}
main()