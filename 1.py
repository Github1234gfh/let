import random

def rand4():
	return random.random() *4

# -- task  1 --
#def rand8to10():
#	a = rand4()+8
#	while a>=10:
#		a = rand4()+8
#	return a
#print(rand8to10())

# -- task  2 -- 
#list_of_ints = list(map(int, input('List of numbers: ').split(' ')))
#k = int(input('Distance number: '))
#def findDuplicates(list, c):
#	for i in range(0, len(list)-1):
#		try:
#			if list[i]==list[i+c-1]:
#				return i
#		except:
#			pass
#	return -1
#print(findDuplicates(list_of_ints, len(list_of_ints)))

# -- task  3 --
#list_of_ints = list(map(int, input('List of numbers: ').split(' ')))
#summ = int(input('Summ numbers: '))
#l = []
#def hasTerms(list, c):
#	if c > -1:
#		hasTerms(list,c- 1)
#		b = c
#		while b<len(list_of_ints)-1:
#			l.append(list[c]+list[b+1])
#			b+=1
#	if summ in l:
#		return True
#	return False
#print(hasTerms(list_of_ints, len(list_of_ints)))

# -- task  4 -- 
#list_of_ints = list(map(int, input('List of numbers: ').split(' ')))
#x = int(input('Delete Number: '))
#def deleteInt():
#	if x in list_of_ints:
#		list_of_ints.pop(list_of_ints.index(x))
#		deleteInt()
#	return list_of_ints
#print(deleteInt())

# -- task 5 --
list_hex = input('Enter 2 hex: ').lower().split(' ')
def add(str1, str2):
	arr = {
	'a': 10,
	'b': 11,
	'c': 12,
	'd': 13,
	'e': 14,
	'f': 15,
	10: 'a',
	11: 'b',
	12: 'c',
	13: 'd',
	14: 'e',
	15: 'f'
	}
	while len(str1) > len(str2):
		str2 = str2[::-1]+'0'
		str2 = str2[::-1]
	while len(str2) > len(str1):
		str1 = str1[::-1]+'0'
		str1 = str1[::-1]
	result = ''
	rev = 0
	for i,j in zip(str1[::-1], str2[::-1]):
		if i in arr:
			i= arr[i]
		else:
			i = int(i)
		if j in arr:
			j = arr[j]
		else:
			j = int(j)
		suma = i+j+rev
		rev = 0
		if suma>15:
			suma-=16
			rev = 1
		if suma in arr:
			result += arr[suma]
		else:
			result += str(suma)
	if rev:
		result += str(rev)
	result = result[::-1]
	return result.upper()
print(add(list_hex[0], list_hex[1]))