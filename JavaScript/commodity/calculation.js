var adds=document.querySelectorAll('.increase')
        var lesson=document.querySelectorAll('.reduce')
        var counts=document.querySelectorAll('.quantity')
        var prices=document.querySelectorAll('.price')
        var sum=document.querySelectorAll('.sum')
        var count_sum=document.querySelector('.quantitys')
        var total=document.querySelector('.spend')
        var total_max=document.querySelector('.spendmax')

                for(var i=0;i<adds.length;i++){
                    c(i)
                }
        function c(index){
            adds[index].onclick=function(){
                merge(index,+1)
                
            }
        
            lesson[index].onclick=function(){
                merge(index,-1)
        }
        function merge(index,cou){
            var num=+counts[index].innerHTML+cou
            switch(true){
                case num>10:
                    alert("不能超过十件")
                    num=10
                    break;
                case num<0:
                    alert('商品已经归零了')
                    num=0
                    break;
            }
            var result=parseFloat(prices[index].innerHTML)*num
             sum[index].innerHTML=result
            counts[index].innerHTML=num
            merge_C()
        }
        function merge_C(){
            var totalSum=0
            var countSum=0
            var totalMax=0
            for(var i=0;i<lesson.length;i++){
                totalSum+= +sum[i].innerHTML
                countSum+= +counts[i].innerHTML
                if(counts[i].innerHTML!=0){
                    if(prices[i].innerHTML>totalMax){
                        totalMax=prices[i].innerHTML
                    }
                }
             }
             total.innerHTML=totalSum
             count_sum.innerHTML=countSum
             total_max.innerHTML=totalMax
        }
        
    }