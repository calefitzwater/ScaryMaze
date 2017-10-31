var timeOn = 0.1;
var timeOff = 0.5;
private var changeTime = 0;
 
function Update() {
    if (Time.time > changeTime) {
        GetComponent.<Light>().enabled = !GetComponent.<Light>().enabled;
        if (GetComponent.<Light>().enabled) {
            changeTime = Time.time + timeOn;
        } else {
            changeTime = Time.time + timeOff;
        }
    }
}