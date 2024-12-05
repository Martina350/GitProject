let votosMinecraft=0;
let votosRoblox=0;

actualizarVotosMinecraft=function() {
    document.getElementById("lblMinecraft").innerText = votosMinecraft;
}
actualizarVotosRoblox=function() {
    document.getElementById("lblRoblox").innerText = votosRoblox;
}
sumarLikeMinecraft=function(){
    votosMinecraft += 1;
    actualizarVotosMinecraft();
}
sumarCorazonMinecraft=function(){
    votosMinecraft += 5;
    actualizarVotosMinecraft();
}
restarLikeMinecraft=function(){
    votosMinecraft -= 1;
    actualizarVotosMinecraft();
}
sumarLikeRoblox=function(){
    votosRoblox += 1;
    actualizarVotosRoblox();
}
sumarCorazonRoblox=function(){
    votosRoblox += 5;
    actualizarVotosRoblox();
}
restarLikeRoblox=function(){
    votosRoblox -= 1;
    actualizarVotosRoblox();
}