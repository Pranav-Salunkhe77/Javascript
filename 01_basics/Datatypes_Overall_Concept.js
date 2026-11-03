//IMPLEMENT OPERATION BASED ON INSERTION, SELECTION, DISPLAY, SEARCH
//C LANGUAGE
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

struct Node* insert(struct Node* r, int x) {
    if(r == NULL) {
        r = malloc(sizeof(struct Node));
        r->data = x;
        r->left = r->right = NULL;
    }
    else if(x < r->data)
        r->left = insert(r->left, x);
    else if(x > r->data)
        r->right = insert(r->right, x);
    return r;
}

void display(struct Node* r) {
    if(r) {
        display(r->left);
        printf("%d ", r->data);
        display(r->right);
    }
}

int search(struct Node* r, int x) {
    if(r == NULL) return 0;
    if(r->data == x) return 1;
    if(x < r->data) return search(r->left,x);
    return search(r->right,x);
}

struct Node* del(struct Node* r, int x) {
    struct Node *t;
    if(r == NULL) return r;

    if(x < r->data) r->left = del(r->left,x);
    else if(x > r->data) r->right = del(r->right,x);
    else {
        if(r->left == NULL) {
            t = r->right;
            free(r);
            return t;
        }
        if(r->right == NULL) {
            t = r->left;
            free(r);
            return t;
        }
        t = r->right;
        while(t->left) t = t->left;
        r->data = t->data;
        r->right = del(r->right,t->data);
    }
    return r;
}

int main() {
    struct Node* root = NULL;
    int ch,x;

    do {
        printf("\n1.Insert\n2.Delete\n3.Search\n4.Display\n5.Exit");
        printf("\nEnter choice: ");
        scanf("%d",&ch);

        switch(ch) {
            case 1:
                printf("Enter value: ");
                scanf("%d",&x);
                root=insert(root,x);
                printf("Node inserted successfully!");
                break;

            case 2:
                printf("Enter value: ");
                scanf("%d",&x);
                root=del(root,x);
                printf("Node deleted successfully!");
                break;

            case 3:
                printf("Enter value: ");
                scanf("%d",&x);
                if(search(root,x))
                    printf("Node found!");
                else
                    printf("Node not found!");
                break;

            case 4:
                printf("Inorder Traversal: ");
                display(root);
                break;

            case 5:
                printf("Exiting...");
                break;
        }
    } while(ch != 5);

    return 0;
}
