#pragma strict

static public var health : int;
var Max : boolean;
var died : boolean;
var customSkin : GUIStyle;

function OnTriggerStay(other : Collider){
	if(other.tag == "Enemy"){
		health--;
	}
}

function Start(){
	health = 100;
}

function Update(){
	if(health <= 0){
		Application.LoadLevel("Finish");
		Destroy(gameObject);
		died = true;
	}
}

function OnGUI(){
    GUI.Label (Rect (52,25, 200, 200), "Health = "+health, customSkin);
}	


function OnTriggerEnter(other : Collider){
	if(other.tag == "health"){
		health = health + 25;
		Destroy(other.gameObject);
	}
}