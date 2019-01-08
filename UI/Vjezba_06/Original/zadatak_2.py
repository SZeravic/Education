import pygame
import time

# inicijaliziraj pygame modul
pygame.init()

# wallpaper size
velicina_slike = (800,500)
gameDisplay = pygame.display.set_mode(velicina_slike)
pygame.display.set_caption('UI igra')

#background = pygame.image.load("background.png")

red = (255, 0, 0) # boja cilja
green = (100, 255, 100) # boja pozadine
green_darker = (0, 150, 0) # boja sume
blue = (0, 0, 255) # boja vode
black = (0, 0, 0) # boja lika kojeg korisnik kontrolira
gray = (121, 108, 108) # boja planina

FPS = 30

clock = pygame.time.Clock()

pygame.display.update() # bez parametara azurira sve, sa parametrima samo odredjeni dio

font = pygame.font.SysFont(None, 30)

def detekcija_sudara(x1, x2, y1, y2, w1, w2, h1, h2):
	if x1 > x2 and x1 < x2 + w2 or x1 + w1 > x2 and x1 + w1 < x2 + w2:
		if y1 > y2 and y1 < y2 + h2 or y1 + h1 > y2 and y1 + h1 < y2 + h2:
			return True

# poruka za kraj igre
def poruka(tekst, boja):
	screen_text = font.render(tekst, True, boja)
	gameDisplay.blit(screen_text, [10, 10])

def poruka_sudar(tekst, boja):
	screen_text = font.render(tekst, True, boja)
	gameDisplay.blit(screen_text, [30, 250])

def gameLoop():
	gameExit = False # true - main loop
	gameOver = False

	velicina_bloka = 20
	pomak = 10

	lead_x = 0
	lead_y = 500 - velicina_bloka
	lead_x_change = 0
	lead_y_change = 0

	while not gameExit:

		while gameOver == True:
			gameDisplay.fill(green);
			poruka("Igra je gotova. Pritisnite C da bi igrali ponovo ili Q za izlaz.", red)
			pygame.display.update()

			for event in pygame.event.get():
				if event.type == pygame.KEYDOWN:
					if event.key == pygame.K_q:
						gameExit = True
						gameOver = False
						pygame.quit()
						quit() # python
					if event.key == pygame.K_c:
						gameLoop() 	
	
		for event in pygame.event.get():
		
			#print(event)
			if event.type == pygame.QUIT:
				gameExit = True

			if event.type == pygame.KEYDOWN:
				if event.key == pygame.K_LEFT:
					lead_x_change = -pomak
					lead_y_change = 0
				elif event.key == pygame.K_RIGHT:
					lead_x_change = pomak
					lead_y_change = 0
				elif event.key == pygame.K_UP:
					lead_y_change = -pomak
					lead_x_change = 0
				elif event.key == pygame.K_DOWN:
					lead_y_change = pomak
					lead_x_change = 0

			if event.type == pygame.KEYUP:
				if event.key == pygame.K_LEFT:
					lead_x_change = 0
				if event.key == pygame.K_RIGHT:
					lead_x_change = 0
				if event.key == pygame.K_UP:
					lead_y_change = 0
				if event.key == pygame.K_DOWN:
					lead_y_change = 0

		if (lead_x + velicina_bloka - 1) >= 800:
			gameOver = True
		if (lead_x + velicina_bloka - 1) < 0:
			gameOver = True
		if (lead_y + velicina_bloka - 1) >= 500:
			gameOver = True
		if (lead_y + velicina_bloka - 1) < 0:
			gameOver = True

	
		lead_x += lead_x_change
		lead_y += lead_y_change
	
		# boja labirinta
		gameDisplay.fill(green)
		#gameDisplay.blit(background, (0, 0))

		# pomakni lika
		pygame.draw.rect(gameDisplay, black, [lead_x, lead_y, velicina_bloka, velicina_bloka])

		# nacrtaj sve vode i detektiraj eventualne sudare
		pygame.draw.rect(gameDisplay, blue, [10, 10, 50, 50])	
		sudar1 = False
		sudar1 = detekcija_sudara(lead_x,10,lead_y,10,velicina_bloka,50,velicina_bloka,50)
		if sudar1 == True:
			gameOver = True
			poruka_sudar("Jezero je preveliko da ga preplivate! Treba vam brod!", red)
			pygame.display.update()
			time.sleep(3)

		pygame.draw.rect(gameDisplay, blue, [100, 100, 30, 30])
		sudar2 = False
		sudar2 = detekcija_sudara(lead_x,100,lead_y,100,velicina_bloka,30,velicina_bloka,30)
		if sudar2 == True:
			gameOver = True
			poruka_sudar("Jezero je puno otrovnog bilja i opasnih zivotinja. Treba vam brod!", red)
			pygame.display.update()
			time.sleep(3)

		pygame.draw.rect(gameDisplay, blue, [250, 300, 150, 100])
		sudar3 = False
		sudar3 = detekcija_sudara(lead_x,250,lead_y,300,velicina_bloka,150,velicina_bloka,100)
		if sudar3 == True:
			gameOver = True
			poruka_sudar("Jezero je dom zloglasnog zmijolikog cudovista! Zaobidjite ga!", red)
			pygame.display.update()
			time.sleep(3)

		pygame.draw.rect(gameDisplay, blue, [500, 400, 40, 40])
		sudar4 = False
		sudar4 = detekcija_sudara(lead_x,500,lead_y,400,velicina_bloka,40,velicina_bloka,40)
		if sudar4 == True:
			gameOver = True
			poruka_sudar("Jezero je puno opasnih zaba, zmija i riba. Treba vam brod!", red)
			pygame.display.update()
			time.sleep(3)

		# nacrtaj sve sume i detektiraj eventualne sudare
		pygame.draw.rect(gameDisplay, green_darker, [300, 200, 40, 40])
		sudar5 = False
		sudar5 = detekcija_sudara(lead_x,300,lead_y,200,velicina_bloka,40,velicina_bloka,40)
		if sudar5 == True:
			gameOver = True
			poruka_sudar("Suma je puna gladnih vukova! Zaobidjite je.", red)
			pygame.display.update()
			time.sleep(3)

		pygame.draw.rect(gameDisplay, green_darker, [30, 300, 100, 100])
		sudar6 = False
		sudar6 = detekcija_sudara(lead_x,30,lead_y,300,velicina_bloka,100,velicina_bloka,100)
		if sudar6 == True:
			gameOver = True
			poruka_sudar("Sumu je zacarao zli carobnjak! Zaobidjite je.", red)
			pygame.display.update()
			time.sleep(3)

		pygame.draw.rect(gameDisplay, green_darker, [400, 100, 200, 100])
		sudar7 = False
		sudar7 = detekcija_sudara(lead_x,400,lead_y,100,velicina_bloka,200,velicina_bloka,100)
		if sudar7 == True:
			gameOver = True
			poruka_sudar("Suma je puna magle i lako se je izgubiti! Zaobidjite je.", red)
			pygame.display.update()
			time.sleep(3)

		# nacrtaj sve planine i detektiraj eventualne sudare
		pygame.draw.rect(gameDisplay, gray, [600, 400, 100, 90])
		sudar8 = False
		sudar8 = detekcija_sudara(lead_x,600,lead_y,400,velicina_bloka,100,velicina_bloka,90)
		if sudar8 == True:
			gameOver = True
			poruka_sudar("Planina je prestrma da biste je presli. Zaobidjite je!", red)
			pygame.display.update()
			time.sleep(3)

		# nacrtaj cilj i provjeri je li igrac dosao do njega
		pygame.draw.rect(gameDisplay, red, [500, 50, velicina_bloka, velicina_bloka]) # stupac, redak
		sudar9 = False
		sudar9 = detekcija_sudara(lead_x,500,lead_y,50,velicina_bloka,velicina_bloka,velicina_bloka,velicina_bloka)
		if sudar9 == True:
			gameOver = True
			poruka_sudar("Bravo! Dosli ste do cilja!", red)
			pygame.display.update()
			time.sleep(3)

		# azuriraj promjene
		pygame.display.update()

		clock.tick(FPS)

	pygame.quit()
	quit() # python

gameLoop()
