datoteka = 'recenzije.txt'
goodWords = ['Best', 'fun', 'loved', 'funny', 'great', 'Super', 'well', ]
badWords= ['worse', 'bad', 'horrible', 'hated', 'boring']

good = 0
bad = 0
goodReviews = 0.0
badReviews = 0.0

tempGood = 0
tempBad = 0
with open(datoteka) as f:
    sadrzaj = f.read().splitlines()
totalReviews = float(len(sadrzaj))

for i in range (0, len(sadrzaj)):
    print('Recenzija: ' + str(sadrzaj[i]))
    sadrzaj_bez_delimitera = sadrzaj[i].replace('.', '')
    sadrzaj_bez_delimitera = sadrzaj_bez_delimitera.replace(',', '')
    sadrzaj_bez_delimitera = sadrzaj_bez_delimitera.replace('!', '')
    sadrzaj_bez_delimitera = sadrzaj_bez_delimitera.replace('-', '')
    rijeci_iz_trenutne_recenzije = sadrzaj_bez_delimitera.split()
    for x in rijeci_iz_trenutne_recenzije:
        if x in goodWords:
            good +=1
            tempGood= 1

        if x in badWords:
            bad +=1 
            tempBad = 1
        
    
    if tempGood > tempBad:
        goodReviews +=1
    else:
        badReviews +=1

if good > bad:
     print("pozitivna")
else:
     print("negativna")

print(bad, good, totalReviews)
print(goodReviews)
temp = goodReviews/totalReviews
print(temp)
print(str(goodReviews/totalReviews) + "Positive Reviews", str(badReviews/totalReviews) + "bad Reviews")


