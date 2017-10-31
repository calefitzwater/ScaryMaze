#pragma strict

var zombie : GameObject;
var MoveSpeed : float;
var inside : boolean;
var Player : GameObject;
var hits : boolean;
var distance : float;
var attack : float;
var sound : AudioClip;
var sound1 : AudioClip;

function Update () {
	if(inside){
		if(!hits){
			zombie.transform.LookAt(Player.transform);
			zombie.transform.position += zombie.transform.forward*MoveSpeed*Time.deltaTime;
			zombie.GetComponent.<Animation>().Play("run");
			zombie.GetComponent.<AudioSource>().PlayOneShot(sound);
			Player.GetComponent.<AudioSource>().Pause();
		}
	if(!inside){
		zombie.GetComponent.<Animation>().Play("idle");
	}
		
	}
	if(zombie.transform.position.y != -.5){
		zombie.transform.position.y = -.5;
	}
	
	if(Vector3.Distance(zombie.transform.position, Player.transform.position) > distance  && inside){
		Destroy(zombie);
		Player.GetComponent.<AudioSource>().PlayOneShot(sound1);
		inside = false;
	}
	
	if(Vector3.Distance(zombie.transform.position, Player.transform.position) < attack  && inside){
		zombie.GetComponent.<Animation>().Play("attack02");
		Health.health= Health.health - 1;
		hits = true;
	}
	
	if(Vector3.Distance(zombie.transform.position, Player.transform.position) > attack  && inside){
		hits = false;
	}
		
}

function OnTriggerEnter (other : Collider) {
	if(other.tag == "Player"){
		inside = true;
	}
}

function OnCollisionEnter(other : Collision) {
	hits = true;
}

function OnCollisionExit(other : Collision) {
	hits = false;
}