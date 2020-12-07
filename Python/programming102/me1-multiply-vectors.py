test_list1 = [1, 3, 4, 6, 8] 
test_list2 = [4, 5, 6, 2, 10] 


res_list = [] 
for i in range(0, len(test_list1)): 
    res_list.append(test_list1[i] * test_list2[i])
print(res_list)