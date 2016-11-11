#import "stdlib.h"
#import "stdio.h"
#import "string.h"

void reverse (char * input);

int main(int argc, char ** argv) {
    reverse("fun times");

    return 0;
}

void reverse (char * input) {
    int len = strlen(input);
    char * output = malloc(sizeof(char) * len);

    int index;

    for (index = len - 1; index >= 0; index--) {
        printf("Char: %c\n", input[index]);
        output[len - index - 1] = input[index];
    }

    printf("String: %s\n", input);
    printf("Reversed string: %s\n", output);

    return;
}
