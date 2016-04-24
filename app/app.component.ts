import {Component, ChangeDetectionStrategy} from 'angular2/core';
import {Course, Teacher, School, Semester, Offered} from './course';
import {TEACHERS, SCHOOLS, SEMESTERS, COURSES} from './mock-data';
import {FilterPipe} from './filter.pipe';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    pipes: [FilterPipe]
})

export class AppComponent {
    semesters = SEMESTERS;
    courses: Course[] = COURSES;

    courseById(id: number) {
        for (var i in this.courses) {
            if (this.courses[i].id == id) {
                return this.courses[i];
            }
        }
    }

    // Registration Functinos

    addCourse(course: Course) {
        this.courses.splice(this.courses.indexOf(course), 1);
        course.enrolled = true;
        this.courses.push(course);
    }

    dropCourse(course: Course) {
        this.courses.splice(this.courses.indexOf(course), 1);
        course.enrolled = false;
        this.courses.push(course);
    }
    completeArgs = {
        title: "",
        days: [],
        enrolled: false,
        degree: false,
        complete: true,
    };
    degreeArgs = {
        title: "",
        days: [],
        enrolled: false,
        degree: true,
        complete: false,
    };


    // Search functions
    showFilters = true;

    filterArgs = {
        title: "",
        days: [],
        enrolled: false,
        degree: false,
        complete: false,
    };

    displayDays(days: string[]) {
        var display = "";
        for (var day in days) {
            display += days[day].toUpperCase();
        }
        return display;
    }

    displayTime(time: number) {
        var start = "";
        var end = "";
        if (time > 12) {
            start = (time-12)+"PM";
            end = (time-11)+"PM";
        } else if (time == 12) {
            start = "12PM";
            end = "1PM";
        } else {
            start = time+"AM";
            end = (time+1)+"AM"
        }

        return start+" - "+end;
    }

    toggleFilters() {
        this.showFilters = !this.showFilters;
    }

    // Chat functions
    chats: string[] = [];

    hatterChats: string[] = [];
    hareChats: string[] = [];

    msgOpen(msg: string) {
        if (this.chats.indexOf(msg) == -1) {
            this.chats.push(msg);
        }
    }

    msgClose(msg: string) {
        this.chats.splice(this.chats.indexOf(msg), 1);
    }
}
