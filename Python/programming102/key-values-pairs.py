#key value is called a dictionary in python
# do not use a Variable as a  KEY

movie = {
    "name": "Star Wars",
    "episode":4,
    "year": "1997",
    "villians": ["vader", "tarkin"],
    "heros": ["luke", "leia", "han"]
    #test : "doesn't work because the key is not a string. # comment this out if you need it to work"
}   #key^   : ^value
print(movie)

print(movie["year"])
print(movie["heros"])

bad_guys = movie ["villians"]
print(bad_guys)
print(bad_guys[1])

print(movie)

#bad_guys movie = (list(set(vill))) to make a new list from the dictrionary without modifying the dictrionary

search = "heros"
print(movie[search])
   


if "year" in movie:
    print("yes this has a year")

if search in movie:
    print(movie[search])
else: 
    print("item not found")

#how to add items to the movie

movie["ships"] = ["Falcon", "star destroyer", "death star"]
print(movie)

#this is how you add to a list in a dictionary
movie["heros"].append("chewbacca")
print(movie["heros"])
print("****************************************")

for key in movie:
    print(key, movie[key])





