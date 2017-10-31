#pragma strict

var customSkin : GUIStyle;

function OnGUI () {
	var buttonWidth : int = 200;
	var buttonHeight : int =  100;
		
	GUI.Label(Rect(500, 100, 700,700), "Use WASD to move. Use a mouse to look around.  Right click to sprint.  Collect the red potions for health.  Keep your volume up.  Don't run into zombies.  Try to find your way out.  If you get stuck in a wall look the opposite way the wall is facing and go forward to get out. Also this game is still in the BETA stage of development so there might be some glitches.  Made, Designed, and Coded by Cale.", customSkin);	
	if(GUI.Button(Rect(1200, 600, buttonWidth, buttonHeight), "Back", customSkin)){
		Application.LoadLevel("HorrorBegin");
	}
}