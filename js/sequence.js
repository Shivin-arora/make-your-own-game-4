class Sequence{

    constructor(min, max, count){
        this.random = [];
        for (var i = 0; i < count; i++) {
            flag = true;
            while (flag) {
                r = randomNumber(min, max)
                if (this.random.indexOf(r) === -1) {
                    this.random.push(r);
                   
                    flag = false;
                }
            }
        }
        
       
    }

     display(){
         var x=50;
         var y = 300;
         for(var i = 0; i<this.random.length; i++){
             textSize(25);
             fill(0);
             if(i > 1 && i % 9 == 0){
                y += 40;
                x = 50;   
            }
            text(this.random[i],x,y);
            x = x+ 40;
            

         }

     }

     sortArray(){
            this.random.sort(sortNumbersinArray);
     }

     sortNumbersinArray (a, b) {
        return a > b ? 1 : b > a ? -1 : 0;
      }



}