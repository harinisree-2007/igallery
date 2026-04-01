        var img = [
    {image:"dulquer.jpg", caption:"DULQUER"},
    {image:"danish.jpg", caption:"DANISH"},
    {image:"karthi.jpg", caption:"KARTHI"},
    {image:"sk...jpg", caption:"SIVA KARTHIKEYAN"},
    {image:"suriya.jpg", caption:"SURIYA"},
];
var index=0;
function next()
{
    index++;
    if(index >= img.length)
        index = 0;
    document.getElementById("image").src = img[index].image;
    document.getElementById("caption").innerHTML= img[index].caption;
}

function prev()
{
    index--;
    if(index < 0)
        index = img.length - 1;
    document.getElementById("image").src = img[index].image;
    document.getElementById("caption").innerHTML= img[index].caption;
}