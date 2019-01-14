file = "recenzije.txt"
wordsGood = ['good', 'great', 'fun', 'funny', 'super', 'well', 'loved']
wordsBad = ['bad', 'horrible', 'hated', 'boring', 'worse']

good = 0
goodReviews = 0.0
bad = 0
badReviews = 0.0

goodPercentage = 0.0
badPercentage = 0.0

with open(file) as f:
    content = f.read().splitlines()
totalReviews = float(len(content))

print("\n------------------------------------------------------------------------------------")
print("-------------------------------------- START ---------------------------------------")
print("------------------------------------------------------------------------------------")

print("\n")
print("Content:")
for line in content:
     print(line)
print("\n")
print("Number of recensions in the file = " + str(len(content)))

print("--------------------------------------------------------------------------")

for i in range (0, len(content)):
    # print("Recension[" + str(i+1) + "]" + ": " + str(content[i]))
    content_delim = content[i].replace('.', '')
    content_delim = content_delim.replace('-', '')
    content_delim = content_delim.replace('!', '')
    content_lower = content_delim.lower()
    current = content_lower.split()    
    # print("Fixed[" + str(i+1) + "]" + ": " + str(current))

    # counter = 0
    for words in current:        
        # counter = counter + 1
        # print("Counter = " + str(counter))
        
        if words in wordsGood:
            good = good + 1

        if words in wordsBad:
            bad = bad + 1

    print("Good Counter = " + str(good))
    print("Bad Counter = " + str(bad))
    if good > bad:
        print("Review[" + str(i+1) + "]" + ": " + "Good Review!!!")
        goodReviews = goodReviews + 1
    else: 
        print("Review[" + str(i+1) + "]" + ": " + "Bad Review :(")
        badReviews = badReviews + 1

print("--------------------------------------------------------------------------")
print("Results: ")
print("Good Reviews : " + str(goodReviews))
print("Bad Reviews : " + str(badReviews))
print("Total Reviews : " + str(totalReviews))
print("--------------------------------------------------------------------------")
goodPercentage = goodReviews/totalReviews
print("Good review percetnage: " + str(goodPercentage * 100))
badPercentage = badReviews/totalReviews
print("Bad review percetnage: " + str(badPercentage * 100))
print("Percentage Sum = " + str(goodPercentage * 100 + badPercentage * 100))
print("--------------------------------------------------------------------------")