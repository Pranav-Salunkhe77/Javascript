//PIZZA SHOP

#include <stdio.h>
#define N 20
#define INF 999

int a[N][N],v,vis[N];

void input() {
    int i,j,e,x,y,w;

    printf("Enter the number of locations (v): ");
    scanf("%d",&v);

    for(i=0;i<v;i++) {
        vis[i]=0;
        for(j=0;j<v;j++)
            a[i][j]=INF;
    }

    printf("Enter the number of edges (e): ");
    scanf("%d",&e);

    for(i=0;i<e;i++) {
        printf("Enter the end locations of edge %d: ",i+1);
        scanf("%d%d",&x,&y);
        printf("Enter the travel time: ");
        scanf("%d",&w);
        a[x-1][y-1]=a[y-1][x-1]=w;
    }
}

void display() {
    int i,j;
    printf("\nAdjacency Matrix:\n");
    for(i=0;i<v;i++) {
        for(j=0;j<v;j++)
            if(a[i][j]==INF) printf("INF ");
            else printf("%d ",a[i][j]);
        printf("\n");
    }
}

void prim() {
    int i,j,k,min,from=0,to=0,total=0;

    for(i=0;i<v;i++) vis[i]=0;
    vis[0]=1;

    printf("\nMinimum Delivery Routes:\n");

    for(k=0;k<v-1;k++) {
        min=INF;

        for(i=0;i<v;i++)
            if(vis[i])
                for(j=0;j<v;j++)
                    if(!vis[j] && a[i][j]<min) {
                        min=a[i][j];
                        from=i;
                        to=j;
                    }

        if(min==INF) {
            printf("No complete route!");
            return;
        }

        vis[to]=1;
        total+=min;

        printf("Deliver from Location %d -> Location %d with travel time: %d\n",
               from+1,to+1,min);
    }

    printf("\nMinimum Total Delivery Time: %d\n",total);
}

int main() {
    int ch;

    do {
        printf("\n==========PIZZA DELIVERY MIN TIME==========\n");
        printf("1. INPUT LOCATIONS AND EDGES\n");
        printf("2. DISPLAY MATRIX\n");
        printf("3. MINIMUM DELIVERY TIME\n");
        printf("4. EXIT\n");
        printf("Enter your choice: ");
        scanf("%d",&ch);

        switch(ch) {
            case 1: input(); break;
            case 2: display(); break;
            case 3: prim(); break;
            case 4: printf("Exiting program...\n"); break;
            default: printf("Invalid choice!\n");
        }
    } while(ch!=4);

    return 0;
}
