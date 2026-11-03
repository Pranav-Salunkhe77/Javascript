//Practical Borrow Book

borrow_records={
    "Pravina":["Book A","Book B"],
    "Rohan":["Book B"],
    "Shruti":["Book C","Book B"],
    "Prerana":[],
    "Dipali":["Book A"]
}
#Average of book records 
def avg_borrowed(records):
    total=0
    for books in records.values():
        total+=len(books)
    return total/len(records)
print("Average books borrowed:",avg_borrowed(borrow_records))

# Find most and least borrowed books
def max_min_borrowed(records):
    book_count={}
    for books in records.values():
        for book in books:
            if book in book_count:
                book_count[book]+=1
            else:
                book_count[book]=1

    max_book=max(book_count,key=book_count.get)
    min_book=min(book_count,key=book_count.get)
    return max_book,min_book 

max_b,min_b=max_min_borrowed(borrow_records)
print("Most borrowed book:",max_b)
print("Least borrowed book:",min_b)

#Count members with zero borrowings
def count_zero_borrowers(records):
    count=0

    for books in records.values():
        if len(books)==0:
            counts+=1
        return count
print("Members who borrowed 0 books:",count_zero_borrowers(borrow_records))
