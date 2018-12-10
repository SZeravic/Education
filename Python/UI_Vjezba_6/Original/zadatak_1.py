import pygame
import time

# inicijaliziraj pygame modul
pygame.init()

def detekcija_sudara(lead_x, lead_y, lead_x_2, lead_y_2):
	# detektiraj sudar izmedju dva bloka samo ako se u potpunosti preklope
	if ( (lead_y == lead_y_2) and (lead_x == lead_x_2) ):
		print('Blokovi su se sudarili!')
	else:
		print('Blokovi se nisu sudarili!')

def glavna_petlja():
	broj_stupaca = 800
	broj_redaka = 500
	velicina_ekrana = (broj_stupaca,broj_redaka)
	gameDisplay = pygame.display.set_mode(velicina_ekrana)
	pygame.display.set_caption('Moja igra')

	green = (100, 255, 100)
	blue = (0, 0, 255)
	black = (0, 0, 0)

	FPS = 30

	clock = pygame.time.Clock()

	pygame.display.update()

	gameExit = False

	velicina_bloka = 20
	pomak = 10
	pomak2 = 5

	# 1. blok
	lead_x = 0
	lead_y = broj_redaka - velicina_bloka
	lead_x_change = 0
	lead_y_change = 0

	# 2. blok
	lead_x_2 = broj_stupaca - velicina_bloka
	lead_y_2 = 0
	lead_x_change_2 = 0
	lead_y_change_2 = 0

	while not gameExit:

		for event in pygame.event.get():
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

		if (lead_x + velicina_bloka - 1) >= broj_stupaca:
			gameExit = True
		if (lead_x + velicina_bloka - 1) < 0:
			gameExit = True
		if (lead_y + velicina_bloka - 1) >= broj_redaka:
			gameExit = True
		if (lead_y + velicina_bloka - 1) < 0:
			gameExit = True

		lead_x += lead_x_change
		lead_y += lead_y_change

		# boja labirinta
		gameDisplay.fill(green)

		# pomakni pocetni blok
		pygame.draw.rect(gameDisplay, black, [lead_x, lead_y, velicina_bloka, velicina_bloka])

		# udaljenost od bloka1 do bloka2 u slucaju da blok2 pomaknemo lijevo
		udaljenost_lijevo = pow((lead_x - (lead_x_2-pomak)), 2) + pow((lead_y - lead_y_2), 2)
		#print('Udaljenost lijevo: ', udaljenost_lijevo)

		# NADOPISATI OSTALE OPCIJE

		if ( (udaljenost_lijevo <= udaljenost_desno) & (udaljenost_lijevo <= udaljenost_dolje) & (udaljenost_lijevo <= udaljenost_gore) ):
			#print('Idemo lijevo!')
			lead_x_2 = lead_x_2-pomak2
		# NADOPISATI OSTALE OPCIJE

		# nacrtaj drugi blok
		pygame.draw.rect(gameDisplay, blue, [lead_x_2, lead_y_2, velicina_bloka, velicina_bloka])

		detekcija_sudara(lead_x, lead_y, lead_x_2, lead_y_2)

		# azuriraj promjene
		pygame.display.update()	

		clock.tick(FPS)

glavna_petlja()

pygame.quit()
quit()

