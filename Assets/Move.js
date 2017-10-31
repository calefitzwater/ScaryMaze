#pragma strict

var sound : AudioClip;
var hits : boolean;
var speed : float;
var sprint : boolean;
var time : float;
var timeStop : float;
var coolDown : boolean;
var timeS : float;
var timeStopS : float;
var customSkin : GUIStyle;
var sprintIMG : Texture;
var walkIMG : Texture;

function Start(){
	sprint = true;
}


function Update () {
	if(Input.GetMouseButton(1) && sprint){
		speed = speed + .02;
	}
	
	if(coolDown){
		time = time + .1;
	}
	
	if(time >= timeStop){
		coolDown = false;
		time = 0;
		sprint = true;
	}
	
	if(Input.GetMouseButton(1) && sprint){
		timeS = timeS + .1;
	}
	
	if(!Input.GetMouseButton(1) && sprint){
		timeS = timeS -.1;
	}
	
	if(time <= 0){
		time = 0;
	}
	if(timeS <= 0){
		timeS = 0;
	}
	
	if(timeS >= timeStopS){
		GetComponent.<AudioSource>().PlayOneShot(sound);
		sprint = false;
		timeS = 0;
		coolDown = true;
	}
		
	
	
	if(Input.GetKey("w") && !hits){
		transform.Translate(Vector3.forward * speed);
	}
	
	if(Input.GetKey("s") && !hits){
		transform.Translate(Vector3.forward * -speed);
	}

	if(Input.GetKey("a") && !hits){
		transform.Translate(Vector3.left * speed);
	}

	if(Input.GetKey("d") && !hits){
		transform.Translate(Vector3.right * speed);
	}
	
	if(transform.position.y != 0){
		transform.position.y = 0;
	}
	
	if(Health.health > 80){
		speed = .03;
	}
	
	if(Health.health < 80 && Health.health > 50){
		speed = .025;
	}
	
	if(Health.health < 50 && Health.health > 25){
		speed = .02;
	}
	
	if(Health.health < 25 && Health.health > 0){
		speed = .015;
	}
}

function OnCollisionEnter(other : Collision) {
	hits = true;
}

function OnCollisionExit(other : Collision) {
	hits = false;
}

function OnGUI(){
	if(!sprint){
		
	}
}