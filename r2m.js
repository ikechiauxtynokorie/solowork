window.addEventListener('load',()=>{
    document.querySelector(".outer").style.display='none';
    document.querySelector("#start").addEventListener("click",startGame);    
}); 

const startGame = () =>{
    document.querySelector(".menu").style.display = 'none';
    document.querySelector(".outer").style.display ='flex';
    answers_holder = document.querySelector(".answers-holder");
    submit = document.querySelector(".submit");
    timer = document.querySelector(".timer")
    indication = document.querySelector(".indication");
    correct = 0;
    answers = document.querySelectorAll(".answer");
    breadth = 100;
    submit.style.pointerEvents = `all`;
    submit.style.background = '#0977f7';
    submit.style.color = '#fff';
    const countdown = ()=>{
        indication.style.width = `${breadth}%`
        breadth-=4.75;
        
        
        
        if(breadth<0){
            clearInterval(qtimer);
  
            timeout();
           
        }
    }
    const timeout = ()=>{
        submitAnswer(false),
    
        
        swal({
            icon:'error',
            title:'TIME UP',
            text:'THINK FASTER, click next'
        })        
    };
    submit.addEventListener("click",()=>{
        submitAnswer(true)    
    });
    const submitAnswer = (byUser) =>{
        if (byUser){

            if(submit.innerText === "SUBMIT"){
            let allanswers = document.querySelectorAll(".answer");
            

            allanswers.forEach((element,index)=>{
                if(element.classList.contains("checked") && (element.classList.contains("correct"))){
                    element.style.background = '#7ba45d';

                  

                    correct ++;
                 
                
                   

                    clearInterval(qtimer);
                    
                    
                    
                    
                    element.addEventListener('mouseover', function(){
                        element.style.backgroundColor ='#7ba45d';
                    });

                    element.addEventListener("mouseout", function(){
                        element.style.backgroundColor = '#7ba45d';
                    });
                    submit.innerText = "NEXT";

                    
                    
                    
                    
                    

                    
                }else if((element.classList.contains("checked")) && !(element.classList.contains("correct"))){
                    element.style.background = '#e60000';
                    clearInterval(qtimer);
                    clearInterval(countdown);
                    
                  
                    
                    element.addEventListener("mouseover",function(){
                        element.style.backgroundColor = '#e60000';
                    });

                    element.addEventListener("mouseout", function(){
                        element.style.backgroundColor = '#e60000';
                    });

                    allanswers.forEach((element,index)=>{
                        if((element.classList.contains("correct"))){
                            element.style.background = '#8bb44d';
                            element.addEventListener("mouseover", function(){
                            element.style.backgroundColor = '#7ba45d';
                            });

                            element.addEventListener("mouseout",function(){
                            element.style.backgroundColor ='#8bb44d';
                            });
                            submit.innerText = "Next";
                            
                        

                           
                            
                          

                        }
                    })
                }
            })}else{
                questionNumber ++;
                showQuestion();

                
                submit.innerText = "Submit";
                
            }
            
        }
        if (!byUser){
            if(submit.innerText == "SUBMIT"){
                let allanswers = document.querySelectorAll(".answer");
                allanswers.forEach((element,index)=>{
                    if((element.classList.contains("correct"))){
                        element.style.background ='#8bb44d';
                        element.addEventListener("mouseover",function(){
                            element.style.backgroundColor ="#0f6a0f";
                        });
                        element.addEventListener("mouseout",function(){
                            element.style.backgroundColor ="#1f7a1f";
                            
                    

                        })
                        
                        submit.innerText = "Next";

                       
                      
                    }
                })
            }
        } 

        
    }
   

  

    const questions = [
        
        {
            question:'Which of these states has the lowest number of LGAs?',
            answers:[
                {text:'Yobe', correct:false},
                {text:'Bayelsa', correct:true},
                {text:'Kebbi', correct:false},
                {text:'Jigawa', correct:false},
            ]
        },
        {
            question:'How many members are in the "House Of Senate"?',
            answers:[
                {text:'109', correct:true},
                {text:'119', correct:false},
                {text:'104', correct:false},
                {text:'115', correct:false},
            ]
        },
        {
            question:'which of these states has 19 LGAs?',
            answers:[
                {text:'Abia', correct:true},
                {text:'Osun', correct:false},
                {text:'Edo', correct:false},
                {text:'Akwa-Ibom', correct:false},
            ]
        },
        {
            question:'When was NDDC established?',
            answers:[
                {text:'2003', correct:false},
                {text:'1999', correct:false},
                {text:'2000', correct:true},
                {text:'2001', correct:false},
            ]
        },
        {
            question:'When was NAFDAC established?',
            answers:[
                {text:'In January,1993', correct:true},
                {text:'In February,1993', correct:false},
                {text:'In January,1994', correct:false},
                {text:'In January,1995', correct:false},
            ]
        },
        {
            question:'Dr Nmandi Azikiwe lived between?',
            answers:[
                {text:'1904 - 1996', correct:true},
                {text:'1903 - 1995', correct:false},
                {text:'1908 - 1996', correct:false},
                {text:'1904 - 1994', correct:false},
            ]
        },
        {
            question:'The "Urhobos" call thier king ...',
            answers:[
                {text:'Okpako', correct:false},
                {text:'Obakpa', correct:false},
                {text:'Oghene', correct:false},
                {text:'Ovie', correct:true},
            ]
        },
        {
            question:'The "RAT RACE" is a popular music title by?',
            answers:[
                {text:'Ras Kimono', correct:false},
                {text:'Majek Fashek', correct:false},
                {text:'Oritz Wiliki', correct:false},
                {text:'The Mandators', correct:true},
            ]
        },
        {
            question:'"korri" is a language native to ...',
            answers:[
                {text:'Ebonyi State', correct:true},
                {text:'Adamawa State', correct:false},
                {text:'Imo State', correct:false},
                {text:'Rivers State', correct:false},
            ]
        },
        {
            question:'Which of these states has the highest number of LGAs?',
            answers:[
                {text:'Kano', correct:true},
                {text:'kaduna', correct:false},
                {text:'Rivers', correct:false},
                {text:'Lagos', correct:false},
            ]
        },
        {
            question:'Which of this States has a Local Government Area named "Sagbama"',
            answers:[
                {text:'Abia', correct:false},
                {text:'Delta', correct:false},
                {text:'Edo', correct:false},
                {text:'Bayelsa', correct:true},
            ]
        },
        {
            question:'Obafemi Awolowo died on?',
            answers:[
                {text:'9th May,1987', correct:true},
                {text:'6th march,1986', correct:false},
                {text:'5th June,1987', correct:false},
                {text:'4th January,1988', correct:false},
            ]
        },
        {
            question:'What is the Appelation/ Title of Imo State?',
            answers:[
                {text:'Food Basket Of The Nation', correct:false},
                {text:'Sunshine State', correct:false},
                {text:'Gods Own State', correct:false},
                {text:'Eastern Heart Land', correct:true},
            ]
        },
        {
            question:'The First Calabar Festival was held in?',
            answers:[
                {text:'In January,2005', correct:false},
                {text:'In December,2004', correct:true},
                {text:'In December,2003', correct:false},
                {text:'In December,2005', correct:false},
            ]
        },
        {
            question:'The Ogba Zoo is in which of these states?',
            answers:[
                {text:'Edo State', correct:true},
                {text:'Lagos State', correct:false},
                {text:'Jigawa State', correct:false},
                {text:'Kebbi State', correct:false},
            ]
        },
        {
            question:'The Nigerian Currency System (Naira and Kobo) was introduced in?',
            answers:[
                {text:'1973', correct:true},
                {text:'1960', correct:false},
                {text:'1963', correct:false},
                {text:'1970', correct:false},
            ]
        },
        {
            question:'The NOK people use .... to make their artworks?',
            answers:[
                {text:'Terra-Cotta', correct:true},
                {text:'Ivory', correct:false},
                {text:'Stone', correct:false},
                {text:'Bronze', correct:false},
            ]
        },
        {
            question:'The British Colonisation of Nigeria was from .... to .....?',
            answers:[
                {text:'1895, 1960', correct:false},
                {text:'1905, 1963', correct:false},
                {text:'1901,1960', correct:true},
                {text:'1865,1960', correct:false},
            ]
        },
        {
            question:'The "Argungu Fishing Festival" is celebrated in which state?',
            answers:[
                {text:'Sokoto', correct:false},
                {text:'Rivers', correct:false},
                {text:'Osun', correct:false},
                {text:'kebbi', correct:true},
            ]
        },
        {
            question:'When was Abuja declared the Capital of Nigeria?',
            answers:[
                {text:'19th January,1993', correct:false},
                {text:'12th December,1991', correct:true},
                {text:'1st December,1994', correct:false},
                {text:'4th October,1990', correct:false},
            ]
        },
        {
            question:'How many Local Government Areas are in Oyo State?',
            answers:[
                {text:'33', correct:true},
                {text:'36', correct:false},
                {text:'27', correct:false},
                {text:'31', correct:false},
            ]
        },
        {
            question:'The "Ethiope River" is which state?',
            answers:[
                {text:'Bayelsa', correct:false},
                {text:'Cross-River', correct:false},
                {text:'Delta', correct:true},
                {text:'Edo', correct:false},
            ]
        },
        {
            question:'What is the name of the State where Rivers Niger and Benue met?',
            answers:[
                {text:'Kogi', correct:true},
                {text:'Nassarawa', correct:false},
                {text:'Benue', correct:false},
                {text:'Kebbi', correct:false},
            ]
        },
        {
            question:'The "Ovia River" is in which state?',
            answers:[
                {text:'Delta', correct:false},
                {text:'Imo', correct:false},
                {text:'Akwa-Ibom', correct:false},
                {text:'Edo', correct:true},
            ]
        },
        {
            question:"what do the Bini's call thier Kings?",
            answers:[
                {text:'Oba', correct:true},
                {text:'Enogie', correct:false},
                {text:'Ola', correct:false},
                {text:'Olu', correct:false},
            ]
        },
        {
            question:'When was NAFDAC established?',
            answers:[
                {text:'In January,1993', correct:true},
                {text:'In February,1993', correct:false},
                {text:'In January,1994', correct:false},
                {text:'In January,1995', correct:false},
            ]
        },
        {
            question:'what do the Itsekiris call thier Kings?',
            answers:[
                {text:'Oba', correct:false},
                {text:'Obi', correct:false},
                {text:'Ola', correct:false},
                {text:'Olu', correct:true},
            ]
        },
        {
            question:'Which state has the title "Home Of Solid Minerals"?',
            answers:[
                {text:'Katsina', correct:false},
                {text:'Niger', correct:false},
                {text:'Nassarawa', correct:true},
                {text:'Plateau', correct:false},
            ]
        },
        {
            question:'Which state has the title "Heart-Beat Of the Nation"?',
            answers:[
                {text:'Osun', correct:false},
                {text:'Oyo', correct:false},
                {text:'Delta', correct:false},
                {text:'Edo', correct:true},
            ]
        },
        {
            question:'Which state has the title "Salt Of The Nation"?',
            answers:[
                {text:'Rivers', correct:false},
                {text:'Ebonyi', correct:true},
                {text:'Bauchi', correct:false},
                {text:'Gombe', correct:false},
            ]
        },
        {
            question:'Which state has the title "New World"?',
            answers:[
                {text:'Kebbi', correct:false},
                {text:'Kwara', correct:false},
                {text:'Jigawa', correct:true},
                {text:'Yobe', correct:false},
            ]
        },
        {
            question:'Which state has the title "Centre Of Learning"?',
            answers:[
                {text:'Ondo', correct:false},
                {text:'Kaduna', correct:true},
                {text:'Ogun', correct:false},
                {text:'Kano', correct:false},
            ]
        },
        {
            question:'Which state has the slogan "Land Of Equity"?',
            answers:[
                {text:'Borno', correct:false},
                {text:'Niger', correct:false},
                {text:'Kebbi', correct:true},
                {text:'Ekiti', correct:false},
            ]
        },
        {
            question:'How many Local Government Area is on Ogun State?',
            answers:[
                {text:'15', correct:false},
                {text:'34', correct:false},
                {text:'26', correct:false},
                {text:'20', correct:true},
            ]
        },
        {
            question:"what do the Ibo's call Money?",
            answers:[
                {text:'Owo', correct:false},
                {text:'Ego', correct:true},
                {text:'Chi', correct:false},
                {text:'Bia', correct:false},
            ]
        },
        {
            question:'How many Local Government Area is in Sokoto state?',
            answers:[
                {text:'20', correct:false},
                {text:'34', correct:false},
                {text:'28', correct:false},
                {text:'23', correct:true},
            ]
        },
        {
            question:'What is the appelation of Sokoto State?',
            answers:[
                {text:"Nature's gift of the nation", correct:false},
                {text:'The Young Shall Grow', correct:false},
                {text:'Seat of the Caliphate', correct:true},
                {text:'Home of Peace', correct:true},
            ]
        },
        {
            question:'What is the appelation of Plateau State?',
            answers:[
                {text:'Home of peace', correct:false},
                {text:'Centre of Commerce', correct:false},
                {text:'The sunshine State', correct:false},
                {text:'Home of Peace and tourism', correct:true},
            ]
        },
        {
            question:'How many Local Government is in Gombe State?',
            answers:[
                {text:'18', correct:false},
                {text:'21', correct:false},
                {text:'14', correct:false},
                {text:'11', correct:true},
            ]
        },
        {
            question:'What is the Title of Delta State?',
            answers:[
                {text:'Treasure base of the nation', correct:false},
                {text:'The Big Heart of the Nation', correct:true},
                {text:'State Of Harmony', correct:false},
                {text:'Pace Setter', correct:false},
            ]
        },
        {
            question:'Harbert Marcauley lived from?',
            answers:[
                {text:'1893  -  1966', correct:false},
                {text:'1904  -  1958', correct:false},
                {text:'1864  -  1946', correct:true},
                {text:'1885  -  1966', correct:false},
            ]
        },
        {
            question:"'God's Own State' refers to which State in Nigeria?",
            answers:[
                {text:'Yobe', correct:false},
                {text:'Ondo', correct:false},
                {text:'Imo', correct:false},
                {text:'Abia', correct:true},
            ]
        },
        {
            question:"'Land Of Promise' refers to which State in Nigeria?",
            answers:[
                {text:'Edo', correct:false},
                {text:'Akwa-Ibom', correct:true},
                {text:'Anambra', correct:false},
                {text:'Osun', correct:false},
            ]
        },
        {
            question:'Bishop Samuel Ajayi Crowther lived from?',
            answers:[
                {text:'1822  -  1904', correct:false},
                {text:'1856  -  1956', correct:false},
                {text:'1889  -  1945', correct:false},
                {text:'1806  -  1891', correct:true},
            ]
        },
        {
            question:'When was NAFDAC established?',
            answers:[
                {text:'In January,1993', correct:true},
                {text:'In February,1993', correct:false},
                {text:'In January,1994', correct:false},
                {text:'In January,1995', correct:false},
            ]
        },
        {
            question:'Sir Ahmadu Bello died on the.....?',
            answers:[
                {text:'25th April,1963', correct:false},
                {text:'20th May,1969', correct:false},
                {text:'15th June, 1967', correct:false},
                {text:'15th January,1966', correct:true},
            ]
        },
    ]
