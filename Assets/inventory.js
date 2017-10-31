#pragma strict

var inventory : boolean;
var up : boolean;
var haveAxe : boolean;
var Player : GameObject;

function Start () {

}

function Update () {
	if(haveAxe && Input.GetKey("2")){
		
	}
}

function OnTriggerEnter(other : Collider){
	if(other.tag == "Axe"){
		haveAxe = true;
	}
}