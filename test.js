var A=[];
A.push([1]);
// A.push([4,5,6]);
// A.push([7,8,9]);
function spiral(A){
    var a=[];
    var row=A.length;
    var col=A[0].length;
    var dir=0;
    var t=0;
    var b=row-1;
    var l=0;
    var r= col-1;
    while(t<=b&&l<=r){
        if(dir===0){
            for(var i=l;i<=r;i++){
                a.push(A[t][i]);
            }
            t++;
            dir=1;
        }else if(dir===1){
            for(var i=t;i<=b;i++){
                a.push(A[i][r]);
            }
            r--;
            dir=2;
    
        }else if(dir===2){
            for(var i=r;i>=l;i--){
                a.push(A[b][i]);
            }
            b--;
            dir=3
    
        }else if(dir===3){
            for(var i=b;i>=t;i--){
                a.push(a.push(A[i][l]))
            }
            l++;
            dir=0;
    
        }
    }
    console.log(a);
}
spiral(A);
