#pragma strict

var customSkin : GUISkin;

function OnGUI () {
	var buttonWidth : int = 700;
	var buttonHeight : int =  150;
	
	var halfScreenWidth : float = Screen.width / 2;
	var halfButtonWidth : float = buttonWidth / 2;
	
	GUI.skin = customSkin;

	if(GUI.Button(Rect(halfScreenWidth - halfButtonWidth, 150, buttonWidth, buttonHeight), "Enter The Maze")){
		Application.LoadLevel("HorrorGame");
	}
	
	if(GUI.Button(Rect(halfScreenWidth - halfButtonWidth, 450, buttonWidth, buttonHeight), "Instructions")){
		Application.LoadLevel("instruction");
	}
	
	GUI.Label(Rect(800,700, 300, 200),"Made by Cale");
}