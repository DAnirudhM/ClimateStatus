

$(document).ready(function(){
	
$('#submit').click(function(){
	var lat=$('#lat').val();
	var lng=$('#long').val();;
	
	 console.log(lat+"  "+lng);
	
	$.ajax({
		
		
        type:"GET",
        url:"http://api.openweathermap.org/data/2.5/find?lat="+lat+"&lon="+lng+"&cnt=10&appid=a30ebb5af6b78e566e1797db9855606e",
        datatype:"json",
        success: function(data){
        	var loc=data.list;
        	var loc_name=[];
        	var weather=[];
        	var wind=[];
            console.log("hi from the ajax");
            
            var htm="<table border='1' cellpadding='5'>" +
            "<th>Name</th>"+
            "<th>Description"+
            "</th><th>Description</th>";
            
        for(i=0;i<10;i++){
        	loc_name.push(loc[i].name);
        	weather.push(loc[i].weather[0].description);
        	wind.push(loc[i].wind.speed);
            htm+="<tr><td>"+loc_name[i]+"</td><td>"+weather[i]+"</td><td>"+wind[i]+"</td></tr>"
        }


        htm+="</table>";
        console.log(htm);
        $("#info").html(htm);
           
           
         

        },
        error:function(){

            console.log("Inside the error function");


    }
	
	})
	
	
	
	
	
	
	
	})
})
