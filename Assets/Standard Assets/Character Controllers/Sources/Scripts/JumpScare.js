var Sound : AudioClip;
var trim : boolean;
 
function OnTriggerEnter(other : Collider){
	if(other.tag == "Player"){
		if(!trim){
			GetComponent.<AudioSource>().clip = Sound;
        	GetComponent.<AudioSource>().Play();
			yield WaitForSeconds(20);
			GetComponent.<AudioSource>().Stop();
		}
	}
}