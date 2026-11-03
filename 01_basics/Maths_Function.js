//DESIGN AND IMPLEMENT HASH FUNCTION OF FIXED SIZE
//C LANGUAGE
#include <stdio.h>
#include <string.h>
#define SIZE 10

struct Entry {
    int key;
    char name[100];
};

struct Entry table[SIZE];

void initialize() {
    for(int i = 0; i < SIZE; i++) {
        table[i].key = -1;
        strcpy(table[i].name, "NULL");
    }
}

void insert() {
    int k, index;
    char n[100];

    printf("Enter a Key: ");
    scanf("%d", &k);

    printf("Enter a Value: ");
    scanf("%99s", n);

    int hi = k % SIZE;

    for(int i = 0; i < SIZE; i++) {
        index = (hi + i) % SIZE;

        if(table[index].key == -1) {
            table[index].key = k;
            strcpy(table[index].name, n);
            printf("Inserted at index %d", index);
            return;
        }
    }

    printf("Hash Table is FULL!");
}

void display() {
    printf("\nIndex\tKey\tName");

    for(int i = 0; i < SIZE; i++) {
        printf("\nh[%d]\t%d\t%s", i,
        table[i].key, table[i].name);
    }
}

int find(int k) {
    int hi = k % SIZE;

    for(int i = 0; i < SIZE; i++) {
        int index = (hi + i) % SIZE;

        if(table[index].key == k) {
            printf("%d Found at index %d with Name %s",
            k, index, table[index].name);
            return index;
        }

        if(table[index].key == -1)
            return -1;
    }

    return -1;
}

void Delete(int k) {
    int index = find(k);

    if(index == -1)
        printf("Key Not Found!");
    else {
        table[index].key = -1;
        strcpy(table[index].name, "NULL");
        printf("\nKey %d Deleted!", k);
    }
}

int main() {
    int ch, k, index;
    initialize();

    do {
        printf("\n\n***** Hash Table Menu *****");
        printf("\n1. Insert");
        printf("\n2. Display");
        printf("\n3. Find");
        printf("\n4. Delete");
        printf("\n5. Exit");

        printf("\nEnter Your Choice: ");
        scanf("%d", &ch);

        switch(ch) {
            case 1:
                insert();
                break;

            case 2:
                display();
                break;

            case 3:
                printf("Enter a Key to Search: ");
                scanf("%d", &k);
                index = find(k);
                if(index == -1)
                    printf("Key Not Found!");
                break;

            case 4:
                printf("Enter a Key to Delete: ");
                scanf("%d", &k);
                Delete(k);
                break;

            case 5:
                printf("Exiting...");
                return 0;

            default:
                printf("Invalid Choice!");
        }

    } while(ch != 5);

    return 0;
}
