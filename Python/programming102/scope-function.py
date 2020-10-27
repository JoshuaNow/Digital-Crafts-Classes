x = 10 # is a global scope because it is not only declared in a function

def add_to_x(a):
    return x + a

def add_two_numbers(a,b):  #c variable canonnt be used any besides the local scope
    c = a+b
    return c

print(add_to_x(12))
print(add_to_x(33))




