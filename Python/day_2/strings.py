"look"

''' look
at 
this

'''


"""this 
also 
works doing this
"""
#give them variable if you want to print them out.
print("hello"+ " " + "world")


# command or alt "/" whole text is hilighted makes it commented or not

# f string lets you add 2 variables inside another line.
message = "hello world"

name= "Joshua"

combined = f"I want to say {message} to {name}"

print(combined)

######
 # inturpulation 
new_string = "hey this is %s, and I like it." % "awesome"
print(new_string)

f = "pretty cool"
better_string = "hey this is %s, and I like it." %f
print(better_string)


the_string = ("hey this is %s %s %s %s and I like it." % ("I" , "know" ,"This" , "works"))
print(the_string)

#https://www.programiz.com/python-programming/string-interpolation this is interpulation with f strings
 

haiku = """
Hello [person], 
I hope that your [today] is going well. 
I'm personally really [emotion].
"""
print(haiku)


haiku_one = """
Hello %s, 
I hope that your %s is going well. 
I'm personally really %s. 
""" % ("josh" , "day" , "good")
print(haiku_one)

