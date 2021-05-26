import sys

strArr = str(sys.argv[1]).split(',')
sum = 0
for num in strArr:
    sum += int(num)
print(sum)
sys.stdout.flush()