#pragma strict

var open : boolean;

function OnTriggerStay(other : Collider) {
	if(other.tag == "Player"){
		open = true;
	}
}

function Update(){
	if(open){
		transform.rotation.y = transform.rotation.y + .004;
	}
	if(transform.rotation.y >= 45){
		transform.rotation.y =45;
	}
}