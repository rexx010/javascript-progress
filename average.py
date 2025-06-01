def average(*args):
	if *args == 0:
		return "average() missing 1 required
positional argument."
	else:
		return sum(args) / len(args)


num1 = 41
num2 = 12
num3 = 22

print(average(num1, num2, num3))