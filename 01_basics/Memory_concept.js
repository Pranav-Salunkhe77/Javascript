//Implement Hash Table Of Size 10. ANd Use the divisio method 
//C LANGUAGE
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define SIZE 10

struct Node 
{
    int key;
    char value[100];
    struct Node *next;
} *table[SIZE];

int hash(int k) 
{
    return (k % SIZE + SIZE) % SIZE;
}

void insert(int k, char v[])
{
    int i = hash(k);
    struct Node *n = malloc(sizeof(struct Node));
    n->key = k;
    strcpy(n->value, v);
    n->next = NULL;

    if (!table[i]) table[i] = n;
    else {
        struct Node *t = table[i];
        while (t->next) t = t->next;
        t->next = n;
    }
    printf("Inserted key %d at index %d\n", k, i);
}

void search(int k)
{
    struct Node *t = table[hash(k)];
    while (t) {
        if (t->key == k) {
            printf("Key %d found at index %d with value: %s\n",
                   k, hash(k), t->value);
            return;
        }
        t = t->next;
    }
    printf("Key %d not found!\n", k);
}

void deleteKey(int k)
{
    int i = hash(k);
    struct Node *t = table[i], *p = NULL;

    while (t)
{
        if (t->key == k) {
            if (p) p->next = t->next;
            else table[i] = t->next;
            free(t);
            printf("Key %d deleted!\n", k);
            return;
        }
        p = t;
        t = t->next;
    }
    printf("Key %d not found!\n", k);
}

void display() {
    printf("\nHash Table:\n");
    for (int i = 0; i < SIZE; i++) {
        printf("Index %d: ", i);
        struct Node *t = table[i];
        if (!t) printf("NULL");
        while (t) {
            printf("-> [Key: %d, Value: %s] ",
                   t->key, t->value);
            t = t->next;
        }
        printf("\n");
    }
}

int main() {
    int ch, k;
    char v[100], ans;

    do {
        printf("\n***** Hash Table Menu (Chaining) *****\n");
        printf("1. Insert\n2. Search\n3. Delete\n4. Display\n5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                printf("\nEnter key: ");
                scanf("%d", &k);
                printf("Enter value: ");
                scanf("%99s", v);
                insert(k, v);
                break;
            case 2:
                printf("\nEnter key to search: ");
                scanf("%d", &k);
                search(k);
                break;
            case 3:
                printf("\nEnter key to delete: ");
                scanf("%d", &k);
                deleteKey(k);
                break;
            case 4: display(); break;
            case 5: return 0;
            default: printf("Invalid choice!\n");
        }
        printf("\nDo you want to continue (y/n): ");
        scanf(" %c", &ans);
    } while (ans == 'y' || ans == 'Y');

    return 0;
}
