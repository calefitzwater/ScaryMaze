#pragma strict

function OnTriggerEnter(other : Collider){
	if(other.tag == "left"){
		transform.rotation.y = transform.rotation.y + 45;
	}
}

function Update(){
	transform.Translate(Vector3.forward * .015);
	GetComponent.<Animation>().Play("walk02");
}