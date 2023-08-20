#include <stdio.h>
main( )  
{ 
 int i,j,k,l;
for(i=1;i<=7;i++)
{
for(l=1;l<=40;l++)
{
printf(" ");
}
for(j=i;j<=7;j++)
{
printf("%d",j);
if(j!=7)
continue;

for(k=2;k<=i*2;k++)
{
printf(" ");
}
for(k=j;k>=i;k--)
{
printf("%d",k);
}
}
printf("\n");
}
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


#include <stdio.h>
main( )  
{ 
 int a,b,c;
printf("enter a value:");
scanf("%d", &a);
printf("enter second value:");
scanf("%d", &b);
c=expo(a,b);
printf("\na to the power b is:%d", c);
} 

int expo(int a,int b)
{
int i=1,j;
for(j=1;j<=b;j++)
{
i=a*i;
}
return(i);

}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@