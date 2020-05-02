
var a = " Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicing";
var b = " Lorem ipsum dolor sit amet";
var c = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
var g = " laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicinglaboris nisi ut aliquip ex ea commodo consequat";
    var d = [a ,b,c,g];
    var f =0
function clc() {
   

            document.getElementById('par').innerHTML = d[f];
            if(f < d.length -1){
                f++;
            }
            else
            f=0;
    }

