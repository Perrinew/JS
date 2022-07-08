var canvas = document.querySelector("canvas");
	var contexte = canvas.getContext("2d");
	//dimensions du jeu
	var X = canvas.width;         var Y = canvas.height;  
	// vitesse de déplacement de la balle
	var balleDX = 2 ; var  balleDY = 4 ;  
	// déclaration de variables globales
	var balleX, balleY; // position initiale de la balle
	var raquetteX; // position initiale X de la raquette
	var raquetteH ;// hauteur raquette
	var raquetteW;  // largeur de la raquette
	var raquetteD;  // position initiale Y de la raquette
	 // initialiser variables relatives à balle et raquette
	init();
    // dessiner la balle et la raquette à leur position initiale 
	raquette();	// appel fonction qui dessine la raquette
	balle() ; 	// appel fonction qui dessine la balle
    document.querySelector('button').onclick = function()
	{
		var boucle = setInterval(jeuballe, 20); 
		// appel de la fonction jeuballe tous les 20 millisecondes
		document.onkeydown = function(e)
		{
			if (e.keyCode == 37) gauche(); 	
			if (e.keyCode == 39) droite(); 		
		} 
		//fonction jeu balle
	    function jeuballe()
		{
             contexte.clearRect(0, 0, X, Y); 
			//dessine la raquette à sa nouvelle position 
			raquette(); 
			balle(); 
        
            // changer les coordonnées de la  balle
            balleX += balleDX;            balleY += balleDY;
            // si balle touche le bords droit ou gauche 
            if (balleX + balleDX > X - 15 || balleX + balleDX < 15) balleDX = -balleDX;

            // si la balle touche le bord haut
            if (balleY + balleDY < 15) balleDY = -balleDY;
            // si la balle touche le bord bas
            else if (balleY + balleDY > Y - 15) 
			{
                // et si la balle touche la raquette
                if (balleX > raquetteX && balleX < raquetteX + raquetteW) balleDY = -balleDY;
                // Sinon : perdu !
                else 
				{
                   clearInterval(boucle);
                    alert("Perdu!");
					// appel la fonction qui réinitialise les variables
					init() ; 
                }
            } 
        } 
		//fin de fonction de jeu de balle 
	}
	function gauche()
		 {
            raquetteX = raquetteX - 20;   if (raquetteX < 0) raquetteX = 0;
         }
	function droite()
		{
            raquetteX = raquetteX + 20;  if (raquetteX > X - raquetteW) raquetteX = X - raquetteW;
        }
	function raquette() 
	{
	    // Dessiner la raquette
            contexte.fillStyle = "blue";
            contexte.beginPath();   
			contexte.rect(raquetteX, raquetteD, raquetteW, raquetteH);
            contexte.closePath();  contexte.fill();
	}
	function balle()
	{
	       // Dessiner la balle
            contexte.fillStyle = "yellow";
            contexte.beginPath();       
			contexte.arc(balleX, balleY, 15, 0, Math.PI * 2, true);
            contexte.closePath();       
			contexte.fill();
	}
	function init()
	{	// valeurs initiales variables 
		balleX = 150;         balleY = 50; 
		raquetteX = 150; raquetteH = 10; raquetteW = 100; raquetteD = 390 ; 
   	}
