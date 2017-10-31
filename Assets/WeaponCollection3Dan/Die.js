#pragma strict

var health : int;
var Max : boolean;
var died : boolean;
var customSkin : GUISkin;

function OnTriggerStay(other : Collider){
	if(other.tag == "Enemy"){
		yield WaitForSeconds(.01);
		health--;
	}
}

function Update(){
	if(health <= 0){
		Destroy(gameObject);
		died = true;
	}
	if(died){
		Application.LoadLevel("Death");
	}
}

function OnGUI(){ 
    GUI.Label (Rect (52,65, 200, 200), "Health = "+health);
}	


function OnTriggerEnter(other : Collider){
	if(other.tag == "health"){
		if(health < 100){
			health = health + 25;
			Destroy(other.gameObject);
		}
	}
}

function healthCheck(){
	if(health > 100){
		health = 100;
	}
}

