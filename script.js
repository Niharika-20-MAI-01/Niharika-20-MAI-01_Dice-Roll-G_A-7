var ct= parseInt(0)
var tg = 30
function calcu()
{
    
    ct+=1

    p1 = document.getElementById("p1")
    p2 = document.getElementById("p2")
    
    if (ct%2 == 0)
    {
        var d2 = Math.floor(Math.random()*6) +1 

        
        p2.value =  parseInt(p2.value)+  d2
        if (p2.value  >= tg)
        {
            document.getElementById("res").innerHTML = " Winner is Player : 2 !!! "
            
        }
    }
    if (ct%2 != 0)
    {
        
        var d1 = Math.floor(Math.random()*6) +1 

        p1.value =  parseInt(p1.value)+  d1
        if (p1.value  >= tg)
        {
            document.getElementById("res").innerHTML = " Winner is Player : 1 !!! "
        }

    }

    return false
}