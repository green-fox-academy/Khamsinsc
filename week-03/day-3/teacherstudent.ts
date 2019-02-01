'use strict';

class Student {
    learn(){
        
    }
    question(iTeacher:Teacher){
        iTeacher.answer();
    }
}

class Teacher {
    teach(iStudent:Student){
        iStudent.learn();
    }

    answer(){

    }
}