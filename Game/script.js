        let player_1 = prompt("Enter the name of first gambler");
        let player_2 = prompt("Enter the name of second gambler");
        
              document.body.style.background = "url(197.png)";
              document.body.style.fontFamily =  'Staatliches';
              document.body.style.webkitUserSelect = 'none';
        let div_main = document.createElement('div');
              div_main.style.width = "35%";
              div_main.style.height = "100%";
              div_main.style.float = "right";
              div_main.style.display = 'none';
        let div_textarea = document.createElement('textarea');
              div_textarea.style.maxHeight = "95%";
              div_textarea.style.minHeight = "95%";
              div_textarea.style.maxWidth = "95%";
              div_textarea.style.minWidth = "95%";
              div_textarea.style.textAlign = "center";
              div_textarea.style.float = "left";
              div_textarea.style.border = "5px solid aqua";
              div_textarea.style.borderRadius = "3%";
              div_textarea.style.margin = "3% 0 0 0";
              div_textarea.style.background = "linear-gradient(45deg, #fddb92, #d1fdff)";
              div_textarea.style.fontFamily = 'Staatliches';
              div_textarea.style.fontSize = '50px';
              div_textarea.style.color = "#4da56e";
              div_main.appendChild(div_textarea);
        
        let div_right = document.createElement('div');
              div_right.style.width = "96%";
              div_right.style.float = "left";
        
        let div_gamePlace = document.createElement('div');
              div_gamePlace.style.background = "linear-gradient(45deg, #FA8BFF, #2BD2FF,#2BFF88)";
              div_gamePlace.style.position = 'relative';
              div_gamePlace.style.backgroundSize = 'cover';
              div_gamePlace.style.width = '100%';
              div_gamePlace.style.height = '800px';   
              div_gamePlace.style.borderRadius = "3%";
              div_gamePlace.style.border = "2px solid green"; 
              div_gamePlace.style.margin = "2% 2% 2% 2%";
              div_gamePlace.appendChild(div_main);
                        
              div_right.appendChild(div_gamePlace);
              document.body.appendChild(div_right);
        
        let newGame = document.createElement('h3');
        let textNewGame = document.createTextNode('New Game');
              newGame.style.backgroundColor = "yellow";
              newGame.style.width = "100px";
              newGame.style.height = "10%";
              newGame.style.position = "absolute";
              newGame.style.top = "5%";
              newGame.style.left = "45%";
              newGame.style.padding = "5px 5px 5px 5px";
              newGame.style.borderRadius = "20%";
              newGame.style.border = "2px solid green";
              newGame.style.textAlign = "center";
              newGame.appendChild(textNewGame);
              div_gamePlace.appendChild(newGame);
              newGame.style.fontSize = "35px";
        

        let gambler1 = document.createElement('h2');
        let textGambler1 = document.createTextNode('Gambler 1');
              gambler1.appendChild(textGambler1);
              gambler1.style.float = "left";
              gambler1.style.textAlign = "center";
              gambler1.style.display = "inline";
              gambler1.style.fontSize = "40px";
              gambler1.style.display = "none";
              gambler1.style.width = "100%";
              gambler1.style.height = "15%";
              gambler1.style.borderRadius = "20%";
              gambler1.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
        
        let gambler2 = document.createElement('h2');
        let textGambler2 = document.createTextNode('Gambler 2');
              gambler2.appendChild(textGambler2);
              gambler2.style.float = "left";
              gambler2.style.textAlign = "center";
              gambler2.style.display = "inline";
              gambler2.style.display = "none";
              gambler2.style.fontSize = "40px";
              gambler2.style.width = '100%';
              gambler2.style.height = "15%";
              gambler2.style.borderRadius = "20%";
              gambler2.style.border = "2px solid green";
              gambler2.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
        
        
        let result_score1 = document.createElement('h1');
        let textResultScore1 = document.createTextNode('0');
              result_score1.appendChild(textResultScore1);
              result_score1.style.display = "inline";
              result_score1.style.display = "none";
              result_score1.style.textAlign = "center";
              result_score1.style.fontSize = "40px";
              result_score1.style.display = "inlineBlock";
              result_score1.style.padding = "5px 5px 5px 5px";
              result_score1.style.borderRadius = "20%";
              result_score1.style.border = "2px solid green";
              result_score1.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
              result_score1.style.margin = "3% 45% 3% 45%";
              result_score1.style.float = "left";

        let result_score2 = document.createElement('h1');
        let textResultScore2 = document.createTextNode('0');
              result_score2.appendChild(textResultScore2);
              result_score2.style.float = "left";
              result_score2.style.display = "inline";
              result_score2.style.display = "none";
              result_score2.style.textAlign = "center";
              result_score2.style.fontSize = "40px";
              result_score2.style.padding = "5px 5px 5px 5px";
              result_score2.style.borderRadius = "20%";
              result_score2.style.border = "2px solid green";
              result_score2.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
              result_score2.style.margin = "3% 45% 3% 45%";
        
        let score1 = document.createElement('h2');
        let textScore1 = document.createTextNode('0');
              score1.appendChild(textScore1);
              score1.style.float = "right";
              score1.style.textAlign = "center";
              score1.style.fontSize = "30px";
              score1.style.display = "inline";
              score1.style.display = "none";
              score1.style.paddingTop = "15px";
              score1.style.padding = "5px 5px 5px 5px";
              score1.style.borderRadius = "20%";
              score1.style.border = "2px solid green";
              score1.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
              score1.style.margin = "7% 27% 5% 0%";

        let score2 = document.createElement('h2');
        let textScore2 = document.createTextNode('0');
              score2.appendChild(textScore2);
              score2.style.float = "right";
              score2.style.textAlign = "center";
              score2.style.fontSize = "30px";
              score2.style.display = "inline";
              score2.style.display = "none";
              score2.style.paddingTop = "15px";
              score2.style.padding = "5px 5px 5px 5px";
              score2.style.borderRadius = "20%";
              score2.style.border = "2px solid green";
              score2.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
              score2.style.margin = "7% 27% 5% 0%";
        
        let p_score1 = document.createElement('p');
        let textP1 = document.createTextNode('your Score');
              p_score1.appendChild(textP1);
              p_score1.style.float = "left";
              p_score1.style.display = "inline";
              p_score1.style.display = "none";
              p_score1.style.textAlign = "center";
              p_score1.style.padding = "0";
              p_score1.style.fontSize = "35px";
              p_score1.style.padding = "5px 5px 5px 5px";
              p_score1.style.borderRadius = "20%";
              p_score1.style.border = "2px solid green";
              p_score1.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
              p_score1.style.margin = "6% 3% 5% 10%";
        
        let p_score2 = document.createElement('p');
        let textP2 = document.createTextNode('your Score');
              p_score2.appendChild(textP2);
              p_score2.style.float = "left";
              p_score2.style.display = "inline";
              p_score2.style.display = "none";
              p_score2.style.textAlign = "center";
              p_score2.style.fontSize = "35px";
              p_score2.style.padding = "5px 5px 5px 5px";
              p_score2.style.borderRadius = "20%";
              p_score2.style.border = "2px solid green";
              p_score2.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
              p_score2.style.margin = "6% 3% 5% 10%";
        
        let div_continue = document.createElement('div');
        let textContinue = document.createTextNode('Continue');
              div_continue.appendChild(textContinue);
              div_continue.style.float = "left";
              div_continue.style.textAlign = "center";
              div_continue.style.fontSize = "30px";
              div_continue.style.display = "inline";
              div_continue.style.display = "none";
              div_continue.style.padding = "5px 5px 5px 5px";
              div_continue.style.borderRadius = "20%";
              div_continue.style.border = "2px solid green";
              div_continue.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
              div_continue.style.margin = "2% 5% 3% 7%";
              div_continue.style.webkitUserSelect = 'none';
        
        let div_enough = document.createElement('div');
        let textEnough = document.createTextNode('Enough');
              div_enough.appendChild(textEnough);
              div_enough.style.float = "left";
              div_enough.style.textAlign = "center";
              div_enough.style.marginTop = "30px";
              div_enough.style.fontSize = "30px";
              div_enough.style.display = "inline";
              div_enough.style.display = "none";
              div_enough.style.webkitUserSelect = 'none';
              div_enough.style.padding = "5px 5px 5px 5px";
              div_enough.style.borderRadius = "20%";
              div_enough.style.border = "2px solid green";
              div_enough.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
              div_enough.style.margin = "2% 5% 3% 7%";
        
        let awesome_continue = document.createElement('h3');
              awesome_continue.innerHTML = ('<i class="fa fa-hand-o-up" aria-hidden="true"></i>');
              div_continue.appendChild(awesome_continue);
              awesome_continue.style.width = "49%";
              awesome_continue.style.float = "left";
              awesome_continue.style.color = "green";
              awesome_continue.style.textAlign = "center";
              awesome_continue.style.fontSize = "20px";
              awesome_continue.style.margin = "0 0 0 30%";
        
        let awesome_enough = document.createElement('h3');
              awesome_enough.innerHTML = ('<i class="fa fa-hand-paper-o" aria-hidden="true"></i>');
              div_enough.appendChild(awesome_enough);
              awesome_enough.style.width = "49%";
              awesome_enough.style.float = "left";
              awesome_enough.style.color = "green";
              awesome_enough.style.textAlign = "center";
              awesome_enough.style.fontSize = "20px";
              awesome_enough.style.margin = "0 0 0 30%";

        let cube1 = document.createElement('div');
              cube1.style.width = "95px";
              cube1.style.height = "95px";
              cube1.style.backgroundImage = "url(1.png)";
              cube1.style.float = "left";
              div_gamePlace.appendChild(cube1);
              cube1.style.textAlign = "center";
              cube1.style.display = "none";
              cube1.style.margin = "7% 7% 0% 7%";
              cube1.style.border = "2px solid white";
              cube1.style.borderRadius = "10%";

        let cube2 = document.createElement('div');
              cube2.style.width = "95px";
              cube2.style.height = "95px";
              cube2.style.backgroundImage = "url(1.png)";
              cube2.style.float = "left";
              div_gamePlace.appendChild(cube2);
              cube2.style.textAlign = "center";
              cube2.style.display = "none";
              cube2.style.marginLeft = "500px";
              cube2.style.margin = "7% 7% 0% 7%";
              cube2.style.border = "2px solid white";
              cube2.style.borderRadius = "10%";

              newGame.id = 'newGame';
              gambler1.id = 'gambler1';
              gambler2.id = 'gambler2';
              result_score1.id = 'result_score1';
              result_score2.id = 'result_score2';
              score1.id = 'score1';
              score2.id = 'score2';
              p_score1.id = 'p_score1';
              p_score2.id = 'p_score2';
              div_continue.id = 'continue';
              div_enough.id = 'enough';
              awesome_continue.id = 'aw_continue';
              awesome_enough.id = 'aw_enough';
              cube1.id = 'cube1';
              cube2.id = 'cube2';
              div_textarea.id = 'textarea';
        

         let g1 = document.createElement('div');    
              g1.style.width = "30%";
              g1.style.height = "40%"; 
              g1.style.display = "none";   
              g1.style.position = "absolute"; 
              g1.style.top = '100px';
              g1.style.left = '5%';
              g1.style.border = '1px solid black';
              g1.style.borderRadius = '10%';
              g1.appendChild(gambler1);
              g1.appendChild(result_score1);
              g1.appendChild(score1);
              g1.appendChild(p_score1);
              div_gamePlace.appendChild(g1);
              g1.id = 'g1';

       let g2 = document.createElement('div');
              g2.style.width = "30%";
              g2.style.height = "40%";
              g2.style.display = "none";
              g2.style.position = "absolute"; 
              g2.style.top = '450px';
              g2.style.left = '5%';
              g2.style.border = '1px solid black';
              g2.style.borderRadius = '10%';
              g2.appendChild(gambler2);
              g2.appendChild(result_score2);
              g2.appendChild(score2);
              g2.appendChild(p_score2);
              div_gamePlace.appendChild(g2);
              g2.id = 'g2';

       let btn = document.createElement('div');
              btn.style.position = "absolute"; 
              btn.style.top = '20%';
              btn.style.left = '40%';
              btn.style.width = "30%";
              btn.style.height = "30%";
              btn.appendChild(div_continue);
              btn.appendChild(div_enough);
              div_gamePlace.appendChild(btn);
              btn.id = 'btn';

       let cube = document.createElement('div');
              cube.style.position = "absolute"; 
              cube.style.top = '45%';
              cube.style.left = '41%';
              cube.style.width = "30%";
              cube.style.height = "30%";
              cube.appendChild(cube1);
              cube.appendChild(cube2);
              div_gamePlace.appendChild(cube);
              cube.id = 'cube';

       let currValue = 0;
       let sumPoints1 = 0;
       let sumPoints2 = 0;
       let playNow = 1;

       function rnd(){
               return Math.floor(Math.random()*6)+1;
       }; 

       function block() {
              g1.style.display = "block";
              g2.style.display = "block";
              btn.style.display = "block";
              gambler1.style.display = "block";
              gambler2.style.display = "block";
              result_score1.style.display = "block";
              result_score2.style.display = "block";
              score1.style.display = "block";
              score2.style.display = "block";
              p_score1.style.display = "block";
              p_score2.style.display = "block";
              div_continue.style.display = "block";
              g1.style.display = "block";
              g2.style.display = "block";
              div_main.style.display = 'block';
              cube.style.display = "block";
       };

       function none() {
              g1.style.display = "none";
              g2.style.display = "none";
              btn.style.display = "none";
              gambler1.style.display = "none";
              gambler2.style.display = "none";
              result_score1.style.display = "none";
              result_score2.style.display = "none";
              score1.style.display = "none";
              score2.style.display = "none";
              p_score1.style.display = "none";
              p_score2.style.display = "none";
              div_continue.style.display = "none";
              g1.style.display = "none";
              g2.style.display = "none";
              div_main.style.display = 'none';
              newGame.style.display = 'block';
              cube.style.display = 'none';
       };

       function ChangeColor() {
              if(playNow == 1) {
                     g1.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D)";
                     g1.style.color = "linear-gradient(45deg, #FF9A8B, #FF6A88,#FF99AC)";

                     g2.style.background = "grey";
                     g2.style.color = "black";
                     g2.style.border = 'none';

                     gambler1.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
                     result_score1.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
                     score1.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
                     p_score1.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";

                     gambler2.style.background = "grey";
                     result_score2.style.background = "grey";
                     score2.style.background = "grey";
                     p_score2.style.background = "grey";
                     gambler2.style.border = 'none';
                     result_score2.style.border = 'none';
                     score2.style.border = 'none';
                     p_score2.style.border = 'none';

              }else {
                     g1.style.background = "grey";
                     g1.style.color = "black";
                     g1.style.border = 'none';

                     gambler1.style.background = "grey";
                     result_score1.style.background = "grey";
                     score1.style.background = "grey";
                     p_score1.style.background = "grey";
                     gambler1.style.border = 'none';
                     result_score1.style.border = 'none';
                     score1.style.border = 'none';
                     p_score1.style.border = 'none';

                     g2.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D)";
                     g2.style.color = "linear-gradient(45deg, #FF9A8B, #FF6A88,#FF99AC)";

                     gambler2.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
                     result_score2.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
                     score2.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
                     p_score2.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
              
        }
 };

       function gift() {
              let bonus = document.createElement('div');
              bonus.id = 'bonus';
              div_gamePlace.appendChild(bonus);
              bonus.style.width = "200px";
              bonus.style.height ="200px";
              bonus.style.position = 'absolute';
              bonus.style.top = "70%";
              bonus.style.left ="45%";
              bonus.style.backgroundImage = "url(0152.png)";
       };
       function del() {
              bonus.remove();
       };


       function changeGambler() {
              return playNow == 1 ? playNow = 2: playNow = 1;
       };

              document.querySelector('#continue').addEventListener('mouseover', function() {
              div_continue.style.background = "linear-gradient(45deg,#F4D03F, #16A085";
       });
        
              document.querySelector('#continue').addEventListener('mouseout', function() {
              div_continue.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
       });

              document.querySelector('#enough').addEventListener('mouseover', function() {
              div_enough.style.background = "linear-gradient(45deg,#FAD961, #F76B1C";
       });
        
              document.querySelector('#enough').addEventListener('mouseout', function() {
              div_enough.style.background = "linear-gradient(45deg, #85FFBD, #FFFB7D, #FFFFFF)";
       });

              document.querySelector('#newGame').addEventListener('click', function(){
              document.querySelector('#gambler1').textContent = player_1;
              document.querySelector('#gambler2').textContent = player_2;
              document.querySelector('#score1').textContent = 0;
              document.querySelector('#score2').textContent = 0;
              document.querySelector('#result_score1').textContent = 0;
              document.querySelector('#result_score2').textContent = 0;
              newGame.style.display = 'none';
              document.getElementById('textarea').value = '\n\n\n\n\n LET\'S PLAY';

              block();
              ChangeColor();
              
              currValue = 0;
              sumPoints1 = 0;
              sumPoints2 = 0;
              playNow = 1;
       });

              document.querySelector('#continue').addEventListener('click', function(){

              
              cube1.style.display = "block";
              cube2.style.display = "block";
              
             
       let x = rnd();
       let y = rnd();
            
              switch(x) {
                      case 1: cube1.style.backgroundImage = "url(1.png)";
                      break;
                      case 2: cube1.style.backgroundImage = "url(2.png)";
                      break;
                      case 3: cube1.style.backgroundImage = "url(3.png)";
                      break;
                      case 4: cube1.style.backgroundImage = "url(4.png)";           
                      break;
                      case 5: cube1.style.backgroundImage = "url(5.png)"; 
                      break;
                      case 6: cube1.style.backgroundImage = "url(6.png)";
                      break;
              }   
              switch(y) {
                      case 1: cube2.style.backgroundImage = "url(1.png)";
                      break;
                      case 2: cube2.style.backgroundImage = "url(2.png)";
                      break;
                      case 3: cube2.style.backgroundImage = "url(3.png)";
                      break;
                      case 4: cube2.style.backgroundImage = "url(4.png)";
                      break;
                      case 5: cube2.style.backgroundImage = "url(5.png)";
                      break;
                      case 6: cube2.style.backgroundImage = "url(6.png)";
                      break;
              }
              currValue += x+y;
 
              if(currValue>21) {
                     document.querySelector('#score' + playNow).textContent = 0;
                     currValue = 0;
                     //cube1.style.display = "none";
                     //cube2.style.display = "none";
                     div_enough.style.display = "none";

                     if(document.getElementById('bonus')) {
                            del();
                     }; 
                     
                     changeGambler();
                     ChangeColor();

              } else if(x == 5 && y == 5) {
                     document.querySelector('#score' + playNow).textContent = currValue;
                     div_enough.style.display = "block";
                     gift();
                     playNow == 1 ? sumPoints1 += 10 : sumPoints2 += 10;

              } else {
                     document.querySelector('#score' + playNow).textContent = currValue;
                     div_enough.style.display = "block";
               }
              
               
       });

                     document.querySelector('#enough').addEventListener('click', function(){
              
       let value =  (playNow == 1 ? sumPoints1 += currValue : sumPoints2 += currValue);
              
                     if(sumPoints1>=100){
                     none();
                     div_main.style.display = "block";
                     document.getElementById('textarea').value = '\n\n\n\n'+ player_1 + ' is won';
                     currValue = 0;
                     sumPoints1 = 0;
                     sumPoints2 = 0;

                     if(document.getElementById('bonus')) {
                            del();
                     };   

              } else if(sumPoints2>=100) {
                     none();
                     div_main.style.display = "block";
                     document.getElementById('textarea').value = '\n\n\n\n'+ player_2 + ' is won';
                     currValue = 0;
                     sumPoints1 = 0;
                     sumPoints2 = 0;

                     if(document.getElementById('bonus')) {
                            del();
                     };
              
              }else if(document.getElementById('bonus')) {
                     del();
                     document.querySelector('#result_score' + playNow).textContent = value;
                     document.querySelector('#score' + playNow).textContent = 0;
                     div_enough.style.display = "none";
                    
                              
                     if(playNow == 1){
                            document.getElementById('textarea').value = '\n\n' + player_1 + ' has ' + sumPoints1 + ' points.';
                     currValue = 0;
                     } else {
                            document.getElementById('textarea').value = '\n\n\n\n\n\n\n\n' + player_2 + ' has ' + sumPoints2 + ' points.';
                     currValue = 0;
              }
       } 
              else {
                     document.querySelector('#result_score' + playNow).textContent = value;
                     document.querySelector('#score' + playNow).textContent = 0;
                     div_enough.style.display = "none";
                    
                              
                     if(playNow == 1){
                            document.getElementById('textarea').value =  '\n\n' + player_1 + ' has ' + sumPoints1 + ' points.';
                     currValue = 0;
                     } else {
                            document.getElementById('textarea').value = '\n\n\n\n\n\n\n\n' + player_2 + ' has ' + sumPoints2 + ' points.';
                     currValue = 0;
                     }
                     
              } 
              changeGambler();
              ChangeColor();
        });

        
              

       