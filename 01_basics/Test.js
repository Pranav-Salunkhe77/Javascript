//Python Linear BInary Search
def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1


def binary_search(a, x):
    a = sorted(a)
    low, high = 0, len(a) - 1
    while low <= high:
        mid = (low + high) // 2
        if a[mid] == x:
            return mid
        elif x < a[mid]:
            high = mid - 1
        else:
            low = mid + 1
    return -1


a = list(map(int, input("Enter elements: ").split()))
x = int(input("Enter element: "))


# Linear Search
l = linear_search(a, x)


# Binary Search
b = binary_search(a, x)
print("\nLinear Search:")
if l != -1:
    print("Index:", l, "Position:", l + 1)
else:
    print("Element not found")
print("\nBinary Search:")
if b != -1:
    print("Index:", b, "Position:", b + 1)
else:
    print("Element not found")
