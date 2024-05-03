'''
Write a function:
def solution(A)
that, given an array A of N integers, returns True if A contains at least two elements which differ by 1, and False otherwise.
Examples:
1. Given A = [7], the function should return False.
2. Given A = [4, 3], the function should return True.
3. Given A = [11, 1, 8, 12, 14], the function should return True. Pair of elements which differ by 1 is (11, 12).
4. Given A = [4, 10, 8, 5, 9], the function should return True. Pairs of elements which differ by 1 are (4, 5), (10, 9) and (8, 9).
5. Given A = [5, 5, 5, 5, 5], the function should return False. There are no two elements in A whose values differ by 1.
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
'''

def solution(A):
    A = A.sort()
    for a in A:
        if a+1 in A or a-1 in A:
            return True
    return False