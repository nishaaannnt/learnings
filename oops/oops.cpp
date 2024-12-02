#include <iostream>
using namespace std;

class student
{
    string key;
    int value;
    public:
    student(string key, int value){
        this->key = key;
        this->value = value;
    }
    student(){
        this->key = "null";
        this->value = -1;
    }
    student(student &p){
        this->key = p.key;
        this->value = p.value;
    }
    void printinfo() {
        cout<<"key "<<key<<"\n";
        cout<<" value "<<value<<"\n";
    }
};

int main()
{   
    // Default Constructer Call
    student s1;
    s1.printinfo();
    // Parameterised Constructer Call
    student s2("sumeet",2);
    s2.printinfo();
    // Copy Constructor Call
    student s3(s2);
    s3.printinfo();

    return 0;
}
