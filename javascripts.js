window.onload=oppstart;

function oppstart(){
	document.getElementById("btnStart").onclick = main;
}
var barLength = [200,200,200,200,200,200];
var dead = [0,0,0,0,0,0];
var charge = [200,200,200,200,200,200];
var tick;
function main(){
		document.getElementById("slot0").innerHTML = "";
		document.getElementById("slot1").innerHTML = "";
		document.getElementById("slot2").innerHTML = "";
		document.getElementById("slot3").innerHTML = "";
		document.getElementById("slot4").innerHTML = "";
		document.getElementById("slot5").innerHTML = "";
			
			barLength = [200,200,200,200,200,200];
			dead = [0,0,0,0,0,0];
			charge = [200,200,200,200,200,200];
			
		var selectedShips = findSelectedShips();
		var ships = stats();
		var slot = [document.getElementById("slot0"),document.getElementById("slot1"),document.getElementById("slot2"),document.getElementById("slot3"),document.getElementById("slot4"),document.getElementById("slot5"),];
		var healthLeft = findHealthLeft(selectedShips,ships);
		var powerLeft = findPowerLeft (selectedShips,ships);
		displayPicture(selectedShips,ships,slot);
		lifeBarSetup(selectedShips,ships,slot,healthLeft);
		tick = setInterval(function(){targeting(selectedShips,ships,slot,healthLeft,powerLeft);},100);
	
}
function displayPicture(selectedShips,ships,slot){
		document.getElementById("slot0").innerHTML = "";
		document.getElementById("slot1").innerHTML = "";
		document.getElementById("slot2").innerHTML = "";
		document.getElementById("slot3").innerHTML = "";
		document.getElementById("slot4").innerHTML = "";
		document.getElementById("slot5").innerHTML = "";
		
		for(var i=0;i<=5;i++){
			var	img = document.createElement("img");
			if(i<=2){
				img.src=ships[selectedShips[i]].imageLeft;
				img.id="shipPicture"+i;
				if(i===0){
					slot[i].appendChild(img);
					slot[i].innerHTML += "<br/>"
				}
				else if(i===1){
					slot[i].appendChild(img);
					slot[i].innerHTML += "<br/>"
				}
				else if(i===2){
					slot[i].appendChild(img);
					slot[i].innerHTML += "<br/>"
				}
				
			}
			else{						
				img.src=ships[selectedShips[i]].image;
				img.id="shipPicture"+i;
				if(i===3){
					slot[i].appendChild(img);	
					slot[i].innerHTML += "<br/>"					
				}
				else if(i===4){
					slot[i].appendChild(img);
					slot[i].innerHTML += "<br/>"
				}
				else if(i===5){
					slot[i].appendChild(img);
					slot[i].innerHTML += "<br/>"
				}
			}
		}		
}
function stats(){
	var merlin		= {rofPhysical:7.8,rofEnergy:0,rofDisrupt:0,damagePhysical:27,damageEnergy:64,damageDisrupt:0,damageMissile:0,numMissiles:4,powerLimit:500,ammoCap:420,powerConsumtion:25,health:2400,dodge:35,image:"colorpictures/merlinRight.jpg",imageLeft:"colorpictures/merlinLeft.jpg",name:"Merlin"};
	var gladius		= {rofPhysical:6.5,rofEnergy:0,rofDisrupt:0,damagePhysical:25,damageEnergy:34,damageDisrupt:0,damageMissile:275+600,numMissiles:6,powerLimit:500,ammoCap:1000,powerConsumtion:30,health:2730,dodge:23,image:"colorpictures/gladiusRight.jpg",imageLeft:"colorpictures/gladiusLeft.jpg",name:"Gladius"};
	var avenger		= {rofPhysical:4.25,rofEnergy:0,rofDisrupt:0,damagePhysical:21,damageEnergy:0,damageDisrupt:150,damageMissile:275,numMissiles:8,powerLimit:500,ammoCap:1200,powerConsumtion:100,health:3400,dodge:16,image:"colorpictures/avengerRight.jpg",imageLeft:"colorpictures/avengerLeft.jpg",name:"Avenger"};
	var hornet		= {rofPhysical:4.1,rofEnergy:0,rofDisrupt:0,damagePhysical:56,damageEnergy:92,damageDisrupt:0,damageMissile:175,numMissiles:8,powerLimit:500,ammoCap:900,powerConsumtion:60,health:3725,dodge:12,image:"colorpictures/hornetRight.jpg",imageLeft:"colorpictures/hornetLeft.jpg",name:"Hornet"};
	var redeemer	= {rofPhysical:7.1,rofEnergy:0,rofDisrupt:0,damagePhysical:940,damageEnergy:0,damageDisrupt:0,damageMissile:450,numMissiles:10,powerLimit:0,ammoCap:980,powerConsumtion:0,health:7230,dodge:9,image:"colorpictures/redeemerRight.jpg",imageLeft:"colorpictures/redeemerLeft.jpg",name:"Redeemer"};
	var retaliator	= {rofPhysical:5.5,rofEnergy:0,rofDisrupt:0,damagePhysical:0,damageEnergy:170,damageDisrupt:0,damageMissile:1500,numMissiles:6,powerLimit:500,ammoCap:0,powerConsumtion:150,health:18800,dodge:4,image:"colorpictures/retaliatorRight.jpg",imageLeft:"colorpictures/retaliatorLeft.jpg",name:"Retaliator"};
	return [merlin,gladius,avenger,hornet,redeemer,retaliator];
}

function findSelectedShips(){
	var ship1 = document.getElementById("ship1").value;
	var ship2 = document.getElementById("ship2").value;
	var ship3 = document.getElementById("ship3").value;
	var ship4 = document.getElementById("ship4").value;
	var ship5 = document.getElementById("ship5").value;
	var ship6 = document.getElementById("ship6").value;
	return[ship1,ship2,ship3,ship4,ship5,ship6];
}
function findHealthLeft(selectedShips,ships){
	var healthArray=[];
	for(var i=0;i<=5;i++){
		healthArray[i]=ships[selectedShips[i]].health;
	}
	return healthArray;
}

function findPowerLeft (selectedShips,ships){
	for(var i=0;i<=5;i++){
		charge[i]=ships[selectedShips[i]].powerLimit;
	}
	return charge;
}
function lifeBarSetup(selectedShips,ships,slot,healthLeft){
	
	
	for(var i=0;i<=5;i++){
		var shrinker =healthLeft[i]/ships[selectedShips[i]].health;
		
		var newLifeBar = document.createElement("img");
			newLifeBar.src = "green.png";
			newLifeBar.height="10";
			newLifeBar.width= barLength[i]*shrinker;
			slot[i].appendChild(newLifeBar);
			slot[i].innerHTML+="<br/>"+Math.floor(healthLeft[i])+"/"+ships[selectedShips[i]].health+"<br/>";
		
	}
}
function newChargeBar(selectedShips,ships,slot,healthLeft,powerLeft){
	for(var i=0;i<=5;i++){
		
		if(dead[i] ===1){
			continue;
		}
		var shipStatus = checkShipStatus(selectedShips,ships,slot,healthLeft,i);
		
		powerLeft[i] = powerLeft[i]-ships[selectedShips[i]].powerConsumtion;
		var powerShrinker = powerLeft[i]/ships[selectedShips[i]].powerLimit;
		
		var newLifeBar = document.createElement("img");
			newLifeBar.src = "yellow.png";
			newLifeBar.height="10";
			newLifeBar.width= charge[i]*powerShrinker;
			slot[i].appendChild(newLifeBar);
			slot[i].innerHTML+="<br/>"+charge[i]+"/"+ships[selectedShips[i]].powerLimit+"<br/>";
		if(powerLeft[i]>=ships[selectedShips[i]].powerConsumtion){
			shooter=ships[selectedShips[i]];
			findTarget(selectedShips,ships,slot,shooter,healthLeft,i);
		}
		else if(powerLeft<=0){
			setTimeout(function(){chargePower(selectedShips,ships,powerLeft);},ships[selectedShips[i]].speed*1000);
		}
	}
	
}
function chargePower(selectedShips,ships,powerLeft){
	for(var i=0;i<=5;i++){
		powerLeft[i]+
	}
}
function targeting(selectedShips,ships,slot,healthLeft,powerLeft){
	
	
	var shrinker=1;
	displayPicture(selectedShips,ships,slot);
	lifeBar(selectedShips,ships,slot,healthLeft,shrinker);
	newChargeBar(selectedShips,ships,slot,healthLeft,powerLeft);
	checkIfWon();

}
function lifeBar(selectedShips,ships,slot,healthLeft,shrinker){
		
	
	for(var i=0;i<=5;i++){
			
		shrinker= healthLeft[i]/ships[selectedShips[i]].health;
		if(dead[i] ===1){
			continue;
		}
		var shipStatus = checkShipStatus(selectedShips,ships,slot,healthLeft,i);
		
		if(healthLeft[i]===ships[selectedShips[i]].health){
			
			var newLifeBar = document.createElement("img");
			newLifeBar.src = "green.png";
			newLifeBar.height="10";
			newLifeBar.width= barLength[i];
			slot[i].appendChild(newLifeBar);
			slot[i].innerHTML+="<br/>"+Math.floor(healthLeft[i])+"/"+ships[selectedShips[i]].health+"<br/>";
			
		}
		else{
			var newLifeBar = document.createElement("img");
			newLifeBar.src = "green.png";
			newLifeBar.height="10";
			newLifeBar.width= barLength[i]*shrinker;
			slot[i].appendChild(newLifeBar);
			slot[i].innerHTML+="<br/>"+Math.floor(healthLeft[i])+"/"+ships[selectedShips[i]].health+"<br/>";

		}
		
				
	}
}
function checkShipStatus(selectedShips,ships,slot,healthLeft,i){
	
	for(i=0;i<=5;i++){
		if(dead[i] == 1){
			continue;
		}
		if(healthLeft[i]<=0){
			alert(ships[selectedShips[i]].name + "  is destroyed.");
			dead[i] = 1;
			return dead;
		}
	}
}
function findTarget(selectedShips,ships,slot,shooter,healthLeft,num1){
	var target=0;
	var shooter = num1;
	var player1=[0,1,2];
	var player2=[-1,-1,-1,3,4,5];
	
	//for(var i=0;i<=5;i++){
		
		if(player1[shooter]==shooter){
			var num2 = 3+Math.floor(Math.random()*3);
			if(dead[num2]===1){
				var num2 = 3+Math.floor(Math.random()*3);
			}
			else{
				
				healthLeft[num2]-=ships[selectedShips[shooter]].damage*Math.random();

			}
				
		}
		if(player2[shooter]==shooter){
			var num2 = Math.floor(Math.random()*3);
			if(dead[num2]===1){
					num2 = Math.floor(Math.random()*3);
			}
			else{
					healthLeft[num2]-=ships[selectedShips[shooter]].damage*Math.random();
					

			}
		//}
		
		
		var target = selectedShips[num2];
		
		
			
	}
}
function checkIfWon(){
		if(dead[0]===1&&dead[1]===1&&dead[2]===1){
			clearInterval(tick);
			alert("player1 lost")
		}
		if(dead[3]===1&&dead[4]===1&&dead[5]===1){
			clearInterval(tick);
			alert("player2 lost")
		}
}