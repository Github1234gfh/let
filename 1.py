import random

def rand4():
	return random.random() *4

# -- task  1 --
def rand8to10():
	a = rand4()+8
	while a>=10:
		a = rand4()+8
	return a

# -- task  2 -- 
def findDuplicates(list, c):
	for i in range(0, len(list)-1):
		try:
			if list[i]==list[i+c-1]:
				return i
		except:
			pass
	return -1

# -- task  3 --
def hasTerms(list, c):
	if c > -1:
		hasTerms(list,c- 1)
		b = c
		while b<len(list_of_ints)-1:
			l.append(list[c]+list[b+1])
			b+=1
	if summ in l:
		return True
	return False

# -- task  4 -- 
def deleteInt(list):
	while x in list:
		list.pop(list.index(x))
	return list

# -- task 5 --
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
	return result[::-1].upper()